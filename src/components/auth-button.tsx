"use client"

import { useAuth } from '@/components/auth-provider'

export default function AuthButton() {
  const { user, logout, loading } = useAuth()

  if (loading) {
    return <div className="text-gray-500">Loading...</div>
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">
          Welcome, <span className="font-medium">{user.name || user.email}</span>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => window.location.href = '/auth/login'}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Sign In
      </button>
      <button
        onClick={() => window.location.href = '/auth/signup'}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        Sign Up
      </button>
    </div>
  )
}
