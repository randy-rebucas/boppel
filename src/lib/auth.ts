import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from './prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

export interface User {
  id: string
  email: string | null
  name?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface AuthResponse {
  success: boolean
  user?: User
  token?: string
  message?: string
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions)
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string }
  } catch {
    return null
  }
}

export async function getUserById(id: string): Promise<User | null> {
  const user = await prisma.profile.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    }
  })
  return user
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const user = await prisma.profile.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    }
  })
  return user
}

export async function createUser(email: string, password: string, name?: string): Promise<AuthResponse> {
  try {
    // Check if user already exists
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
      return {
        success: false,
        message: 'User with this email already exists'
      }
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user in database
    const user = await prisma.profile.create({
      data: {
        email,
        name: name || null,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      }
    })

    // Generate token
    const token = generateToken(user.id)

    return {
      success: true,
      user,
      token
    }
  } catch (error) {
    console.error('Error creating user:', error)
    return {
      success: false,
      message: 'Failed to create user'
    }
  }
}

export async function authenticateUser(email: string, password: string): Promise<AuthResponse> {
  try {
    // Get user with password for verification
    const userWithPassword = await prisma.profile.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
        createdAt: true,
        updatedAt: true,
      }
    })

    if (!userWithPassword || !userWithPassword.password) {
      return {
        success: false,
        message: 'Invalid email or password'
      }
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, userWithPassword.password)
    if (!isValidPassword) {
      return {
        success: false,
        message: 'Invalid email or password'
      }
    }

    // Return user without password
    const user = {
      id: userWithPassword.id,
      email: userWithPassword.email,
      name: userWithPassword.name,
      createdAt: userWithPassword.createdAt,
      updatedAt: userWithPassword.updatedAt,
    }

    const token = generateToken(user.id)

    return {
      success: true,
      user,
      token
    }
  } catch (error) {
    console.error('Error authenticating user:', error)
    return {
      success: false,
      message: 'Authentication failed'
    }
  }
}
