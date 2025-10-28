'use client'

import { createClient } from '@/lib/supabase/client'
import { useState, useEffect } from 'react'

export default function TestSupabase() {
  const [supabase] = useState(() => createClient())
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getUser()
  }, [supabase])

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: 'test@example.com',
      password: 'password123',
    })
    console.log('Sign up:', data, error)
  }

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'test@example.com',
      password: 'password123',
    })
    console.log('Sign in:', data, error)
  }

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    console.log('Sign out:', error)
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Test Page</h1>
      
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button 
            onClick={handleSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <p>Not signed in</p>
          <div className="space-x-4 mt-4">
            <button 
              onClick={handleSignUp}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Sign Up
            </button>
            <button 
              onClick={handleSignIn}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
