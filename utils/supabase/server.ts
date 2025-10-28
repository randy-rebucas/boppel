import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The `cookies().set()` method can only be called from a Server Component or Server Action.
            // This error is typically caused by an attempt to set a cookie from a Client Component that
            // would still be rendered on the server (for example, a page initial render).
            // To fix this, you can pass the cookie options to the `createBrowserClient` with `is
            // `isSingleton` set to `false`.
            // For more details, see: https://supabase.com/docs/guides/auth/server-side/nextjs
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // The `cookies().set()` method can only be called from a Server Component or Server Action.
            // This error is typically caused by an attempt to set a cookie from a Client Component that
            // would still be rendered on the server (for example, a page initial render).
            // To fix this, you can pass the cookie options to the `createBrowserClient` with `is
            // `isSingleton` set to `false`.
            // For more details, see: https://supabase.com/docs/guides/auth/server-side/nextjs
          }
        },
      },
    }
  )
}
