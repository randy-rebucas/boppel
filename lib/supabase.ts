// Re-export the clients from the utils directory for backward compatibility
export { createClient as createServerClient } from '@/utils/supabase/server'
export { createClient as createBrowserClient } from '@/utils/supabase/client'

// For server-side operations that require elevated permissions
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)
