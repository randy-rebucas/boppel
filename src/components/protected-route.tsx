"use client"

import { useAuth } from '@/components/auth-provider'
import { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="text-gray-500">Loading...</div>
  }

  if (!user) {
    return fallback || (
      <div className="text-center p-8">
        <div className="text-red-500 mb-4">Please sign in to access this content.</div>
        <button
          onClick={() => window.location.href = '/auth/login'}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Sign In
        </button>
      </div>
    )
  }

  return <>{children}</>
}
