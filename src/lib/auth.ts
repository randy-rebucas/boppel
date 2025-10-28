import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createClient } from './supabase/server'

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
  try {
    const supabase = await createClient()
    const { data: user, error } = await supabase
      .from('profiles')
      .select('id, email, name, created_at, updated_at')
      .eq('id', id)
      .single()

    if (error || !user) {
      return null
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: new Date(user.created_at),
      updatedAt: new Date(user.updated_at),
    }
  } catch (error) {
    console.error('Error getting user by ID:', error)
    return null
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const supabase = await createClient()
    const { data: user, error } = await supabase
      .from('profiles')
      .select('id, email, name, created_at, updated_at')
      .eq('email', email)
      .single()

    if (error || !user) {
      return null
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: new Date(user.created_at),
      updatedAt: new Date(user.updated_at),
    }
  } catch (error) {
    console.error('Error getting user by email:', error)
    return null
  }
}

export async function createUser(email: string, password: string, name?: string): Promise<AuthResponse> {
  try {
    const supabase = await createClient()
    
    // Check if user already exists
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
      return {
        success: false,
        message: 'User with this email already exists'
      }
    }

    // Create user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || null,
        }
      }
    })

    if (authError) {
      return {
        success: false,
        message: authError.message
      }
    }

    if (!authData.user) {
      return {
        success: false,
        message: 'Failed to create user'
      }
    }

    // Create profile record
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user.id,
        email: authData.user.email,
        name: name || null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })

    if (profileError) {
      console.error('Error creating profile:', profileError)
      return {
        success: false,
        message: 'Failed to create user profile'
      }
    }

    const user = {
      id: authData.user.id,
      email: authData.user.email || null,
      name: name || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

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
    const supabase = await createClient()
    
    // Sign in with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      return {
        success: false,
        message: 'Invalid email or password'
      }
    }

    if (!authData.user) {
      return {
        success: false,
        message: 'Authentication failed'
      }
    }

    // Get user profile
    const user = await getUserById(authData.user.id)
    if (!user) {
      return {
        success: false,
        message: 'User profile not found'
      }
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
