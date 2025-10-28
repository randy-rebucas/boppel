# Supabase Setup Guide

## Overview
This project has been configured to use Supabase for authentication and database operations. Follow these steps to complete the setup.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Choose your organization
4. Fill in project details:
   - Name: `boppel` (or your preferred name)
   - Database Password: Generate a strong password
   - Region: Choose the closest to your users
5. Click "Create new project"

## 2. Get Your Project Credentials

Once your project is created:

1. Go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public** key (starts with `eyJ...`)
   - **service_role** key (starts with `eyJ...`)

## 3. Update Environment Variables

Edit the `.env.local` file and replace the placeholder values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d
```

## 4. Set Up Database Schema

In your Supabase dashboard:

1. Go to **SQL Editor**
2. Run the following SQL to create the profiles table:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, created_at, updated_at)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    NOW(),
    NOW()
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## 5. Configure Authentication

In your Supabase dashboard:

1. Go to **Authentication** → **Settings**
2. Configure the following:
   - **Site URL**: `http://localhost:3000` (for development)
   - **Redirect URLs**: Add `http://localhost:3000/auth/callback`
3. Go to **Authentication** → **Providers**
4. Enable **Email** provider
5. Configure email settings as needed

## 6. Test the Setup

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Visit `http://localhost:3000/test-supabase` to test the authentication

3. Try signing up and signing in to verify everything works

## 7. Next Steps

- Remove the test page (`src/app/test-supabase/page.tsx`) when you're ready
- Update your main application to use the auth functions from `src/lib/auth.ts`
- Configure additional authentication providers if needed
- Set up your production environment variables

## Available Auth Functions

The following functions are available in `src/lib/auth.ts`:

- `createUser(email, password, name?)` - Create a new user
- `authenticateUser(email, password)` - Sign in a user
- `getUserById(id)` - Get user by ID
- `getUserByEmail(email)` - Get user by email
- `hashPassword(password)` - Hash a password
- `verifyPassword(password, hash)` - Verify a password
- `generateToken(userId)` - Generate JWT token
- `verifyToken(token)` - Verify JWT token

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the Supabase dashboard for any error logs
- Verify the database schema is created properly
- Ensure the authentication policies are set up correctly
