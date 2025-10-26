-- =============================================
-- Boppel Atelier - Initial Database Schema
-- =============================================
-- This migration consolidates all previous migrations into a single initial schema
-- Created: 2025-01-23
-- Description: Complete database schema for Boppel Atelier marketplace

-- =============================================
-- ENUMS
-- =============================================

-- App roles for user management
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('buyer','seller','admin');
  END IF;
END $$;

-- Product types
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'product_type') THEN
    CREATE TYPE product_type AS ENUM ('physical', 'digital', 'ticket');
  END IF;
END $$;

-- Subscription tiers
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'subscription_tier') THEN
    CREATE TYPE subscription_tier AS ENUM ('starter', 'maker', 'pro_maker', 'collective');
  END IF;
END $$;

-- Seller types
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'seller_type') THEN
    CREATE TYPE seller_type AS ENUM ('physical', 'digital', 'both');
  END IF;
END $$;

-- Order statuses
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'order_status') THEN
    CREATE TYPE order_status AS ENUM ('pending', 'processing', 'shipped', 'delivered', 'cancelled');
  END IF;
END $$;

-- Collaboration statuses
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'collaboration_status') THEN
    CREATE TYPE collaboration_status AS ENUM ('pending', 'accepted', 'active', 'completed', 'declined');
  END IF;
END $$;

-- Application statuses
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'application_status') THEN
    CREATE TYPE application_status AS ENUM ('pending', 'approved', 'rejected');
  END IF;
END $$;

-- =============================================
-- UTILITY FUNCTIONS
-- =============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

-- =============================================
-- CORE TABLES
-- =============================================

-- User roles table
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Profiles table with seller fields
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY,
  name text,
  email text UNIQUE,
  subscription_tier subscription_tier DEFAULT 'starter',
  is_verified boolean DEFAULT false,
  badges text[] DEFAULT '{}',
  seller_type seller_type DEFAULT 'physical',
  bio text,
  avatar_url text,
  country text,
  region text,
  city text,
  show_city boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid NOT NULL,
  title text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  images text[],
  category text,
  is_active boolean DEFAULT true,
  stock_quantity integer DEFAULT 0,
  product_type product_type DEFAULT 'physical',
  customisation_fields jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id uuid,
  seller_id uuid NOT NULL,
  product_id uuid,
  quantity integer NOT NULL DEFAULT 1,
  total_amount decimal(10,2) NOT NULL,
  status order_status DEFAULT 'pending',
  customisation_data jsonb,
  shipping_address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Collab scores table
CREATE TABLE IF NOT EXISTS collab_scores (
  user_id uuid PRIMARY KEY,
  total_points integer DEFAULT 0,
  current_rank integer,
  completed_collabs integer DEFAULT 0,
  co_hosted_events integer DEFAULT 0,
  created_bundles integer DEFAULT 0,
  positive_reviews integer DEFAULT 0,
  average_rating decimal(3,2) DEFAULT 0,
  badges_earned text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Markets table
CREATE TABLE IF NOT EXISTS markets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  host_id uuid NOT NULL,
  title text NOT NULL,
  description text,
  event_type text,
  start_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  location text,
  max_participants integer,
  participation_fee decimal(10,2) DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Market participants table
CREATE TABLE IF NOT EXISTS market_participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  market_id uuid NOT NULL,
  seller_id uuid NOT NULL,
  application_status application_status DEFAULT 'pending',
  stall_number text,
  application_data jsonb,
  applied_at timestamptz DEFAULT now(),
  UNIQUE(market_id, seller_id)
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reviewer_id uuid NOT NULL,
  reviewee_id uuid NOT NULL,
  product_id uuid,
  order_id uuid,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text,
  verified_purchase boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Collaborations table
CREATE TABLE IF NOT EXISTS collaborations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  proposer_id uuid NOT NULL,
  partner_id uuid NOT NULL,
  collaboration_type text NOT NULL,
  title text NOT NULL,
  description text,
  status collaboration_status DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Waitlist table
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  user_type TEXT NOT NULL,
  wants_beta BOOLEAN DEFAULT false,
  uk_location text,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT uk_location_check CHECK (uk_location IS NULL OR uk_location IN ('England', 'Scotland', 'Wales', 'Northern Ireland', 'Not from UK'))
);

-- =============================================
-- FOREIGN KEY CONSTRAINTS
-- =============================================

-- Add foreign key constraints
ALTER TABLE public.user_roles ADD CONSTRAINT fk_user_roles_user_id FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
ALTER TABLE products ADD CONSTRAINT fk_products_seller_id FOREIGN KEY (seller_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
ALTER TABLE orders ADD CONSTRAINT fk_orders_buyer_id FOREIGN KEY (buyer_id) REFERENCES public.profiles(id) ON DELETE SET NULL;
ALTER TABLE orders ADD CONSTRAINT fk_orders_seller_id FOREIGN KEY (seller_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
ALTER TABLE orders ADD CONSTRAINT fk_orders_product_id FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL;
ALTER TABLE collab_scores ADD CONSTRAINT fk_collab_scores_user_id FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
ALTER TABLE markets ADD CONSTRAINT fk_markets_host_id FOREIGN KEY (host_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
ALTER TABLE market_participants ADD CONSTRAINT fk_market_participants_market_id FOREIGN KEY (market_id) REFERENCES markets(id) ON DELETE CASCADE;
ALTER TABLE market_participants ADD CONSTRAINT fk_market_participants_seller_id FOREIGN KEY (seller_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
ALTER TABLE reviews ADD CONSTRAINT fk_reviews_reviewer_id FOREIGN KEY (reviewer_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
ALTER TABLE reviews ADD CONSTRAINT fk_reviews_reviewee_id FOREIGN KEY (reviewee_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
ALTER TABLE reviews ADD CONSTRAINT fk_reviews_product_id FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL;
ALTER TABLE reviews ADD CONSTRAINT fk_reviews_order_id FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE SET NULL;
ALTER TABLE collaborations ADD CONSTRAINT fk_collaborations_proposer_id FOREIGN KEY (proposer_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
ALTER TABLE collaborations ADD CONSTRAINT fk_collaborations_partner_id FOREIGN KEY (partner_id) REFERENCES public.profiles(id) ON DELETE CASCADE;

-- =============================================
-- ROW LEVEL SECURITY
-- =============================================

-- Enable RLS on all tables
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE collab_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE markets ENABLE ROW LEVEL SECURITY;
ALTER TABLE market_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE collaborations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- =============================================
-- SECURITY POLICIES
-- =============================================

-- User roles policies
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own roles"
ON public.user_roles FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own roles"
ON public.user_roles FOR DELETE
USING (auth.uid() = user_id);

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Products policies
CREATE POLICY "Users can view active products" ON products FOR SELECT USING (is_active = true);
CREATE POLICY "Sellers can manage their products" ON products FOR ALL USING (auth.uid() = seller_id);

-- Orders policies
CREATE POLICY "Buyers can view their orders" ON orders FOR SELECT USING (auth.uid() = buyer_id);
CREATE POLICY "Sellers can view their orders" ON orders FOR SELECT USING (auth.uid() = seller_id);
CREATE POLICY "Sellers can update their orders" ON orders FOR UPDATE USING (auth.uid() = seller_id);
CREATE POLICY "Users can create orders for themselves"
ON public.orders
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = buyer_id AND
  EXISTS (
    SELECT 1 FROM public.products 
    WHERE id = product_id 
    AND is_active = true
  )
);

-- Collab scores policies
CREATE POLICY "Users can view collab scores" ON collab_scores FOR SELECT USING (true);
CREATE POLICY "Users can update their own collab score" ON collab_scores FOR UPDATE USING (auth.uid() = user_id);

-- Markets policies
CREATE POLICY "Users can view markets" ON markets FOR SELECT USING (true);
CREATE POLICY "Hosts can manage their markets" ON markets FOR ALL USING (auth.uid() = host_id);

-- Market participants policies
CREATE POLICY "Users can view market participants" ON market_participants FOR SELECT USING (true);
CREATE POLICY "Sellers can manage their applications" ON market_participants FOR ALL USING (auth.uid() = seller_id);

-- Reviews policies
CREATE POLICY "Users can view reviews" ON reviews FOR SELECT USING (true);
CREATE POLICY "Users can create reviews" ON reviews FOR INSERT WITH CHECK (auth.uid() = reviewer_id);

-- Collaborations policies
CREATE POLICY "Users can view collaborations" ON collaborations FOR SELECT USING (auth.uid() = proposer_id OR auth.uid() = partner_id);
CREATE POLICY "Users can create collaborations" ON collaborations FOR INSERT WITH CHECK (auth.uid() = proposer_id);
CREATE POLICY "Users can update their collaborations" ON collaborations FOR UPDATE USING (auth.uid() = proposer_id OR auth.uid() = partner_id);

-- Waitlist policies
CREATE POLICY "Anyone can join waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- =============================================
-- INDEXES
-- =============================================

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_products_seller ON products(seller_id);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_orders_seller ON orders(seller_id);
CREATE INDEX IF NOT EXISTS idx_orders_buyer ON orders(buyer_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_market_participants_seller ON market_participants(seller_id);
CREATE INDEX IF NOT EXISTS idx_reviews_reviewee ON reviews(reviewee_id);
CREATE INDEX idx_profiles_country ON public.profiles(country);
CREATE INDEX idx_profiles_region ON public.profiles(region);

-- =============================================
-- TRIGGERS
-- =============================================

-- Function to handle new user creation with automatic role assignment
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Insert profile
  INSERT INTO public.profiles (id, name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
    NEW.email
  );
  
  -- Automatically assign 'buyer' role to new users
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'buyer'::app_role);
  
  RETURN NEW;
END;
$function$;

-- Trigger to auto-create profile and assign role on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Updated_at triggers
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_collaborations_updated_at BEFORE UPDATE ON collaborations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- MIGRATION COMPLETE
-- =============================================
