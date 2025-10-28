-- =============================================
-- SUPABASE SCHEMA SETUP FOR BOPPEL MARKETPLACE
-- =============================================
-- This file contains the complete database schema setup for the Boppel marketplace
-- Run this in your Supabase SQL Editor to set up all tables, enums, and relationships

-- =============================================
-- 1. CREATE ENUMS
-- =============================================

-- App roles for user management
CREATE TYPE app_role AS ENUM ('buyer', 'seller', 'admin');

-- Product types for marketplace
CREATE TYPE product_type AS ENUM ('physical', 'digital', 'ticket');

-- Subscription tiers for sellers
CREATE TYPE subscription_tier AS ENUM ('starter', 'maker', 'pro_maker', 'collective');

-- Seller types for categorization
CREATE TYPE seller_type AS ENUM ('physical', 'digital', 'both');

-- Order status tracking
CREATE TYPE order_status AS ENUM ('pending', 'processing', 'shipped', 'delivered', 'cancelled');

-- Collaboration status
CREATE TYPE collaboration_status AS ENUM ('pending', 'accepted', 'active', 'completed', 'declined');

-- Application status for market participation
CREATE TYPE application_status AS ENUM ('pending', 'approved', 'rejected');

-- =============================================
-- 2. CREATE TABLES
-- =============================================

-- Profiles table (main user data)
CREATE TABLE profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT, -- For custom authentication if needed
    avatar_url TEXT,
    bio TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    badges TEXT[] DEFAULT '{}',
    seller_type seller_type,
    subscription_tier subscription_tier DEFAULT 'starter',
    country TEXT,
    region TEXT,
    city TEXT,
    show_city BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User roles for RBAC
CREATE TABLE user_roles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, role)
);

-- Products catalog
CREATE TABLE products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    seller_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    images TEXT[] DEFAULT '{}',
    category TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    stock_quantity INTEGER DEFAULT 0,
    product_type product_type DEFAULT 'physical',
    customisation_fields JSONB DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders management
CREATE TABLE orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    buyer_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    seller_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE SET NULL,
    quantity INTEGER DEFAULT 1,
    total_amount DECIMAL(10, 2) NOT NULL,
    status order_status DEFAULT 'pending',
    customisation_data JSONB,
    shipping_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews and ratings
CREATE TABLE reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    reviewer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    reviewee_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE SET NULL,
    order_id UUID REFERENCES orders(id) ON DELETE SET NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    verified_purchase BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Collaboration scoring system
CREATE TABLE collab_scores (
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE PRIMARY KEY,
    total_points INTEGER DEFAULT 0,
    current_rank INTEGER,
    completed_collabs INTEGER DEFAULT 0,
    co_hosted_events INTEGER DEFAULT 0,
    created_bundles INTEGER DEFAULT 0,
    positive_reviews INTEGER DEFAULT 0,
    average_rating DECIMAL(3, 2) DEFAULT 0,
    badges_earned TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Markets/Events
CREATE TABLE markets (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    host_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    event_type TEXT,
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    location TEXT,
    max_participants INTEGER,
    participation_fee DECIMAL(10, 2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Market participants
CREATE TABLE market_participants (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    market_id UUID REFERENCES markets(id) ON DELETE CASCADE,
    seller_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    application_status application_status DEFAULT 'pending',
    stall_number TEXT,
    application_data JSONB,
    applied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(market_id, seller_id)
);

-- Collaborations between sellers
CREATE TABLE collaborations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    proposer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    partner_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    collaboration_type TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    status collaboration_status DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Waitlist for beta access
CREATE TABLE waitlist (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    user_type TEXT NOT NULL,
    wants_beta BOOLEAN DEFAULT FALSE,
    uk_location TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- 3. CREATE INDEXES FOR PERFORMANCE
-- =============================================

-- Profiles indexes
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_profiles_seller_type ON profiles(seller_type);
CREATE INDEX idx_profiles_subscription_tier ON profiles(subscription_tier);
CREATE INDEX idx_profiles_created_at ON profiles(created_at);

-- User roles indexes
CREATE INDEX idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX idx_user_roles_role ON user_roles(role);

-- Products indexes
CREATE INDEX idx_products_seller_id ON products(seller_id);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_product_type ON products(product_type);
CREATE INDEX idx_products_is_active ON products(is_active);
CREATE INDEX idx_products_created_at ON products(created_at);
CREATE INDEX idx_products_price ON products(price);

-- Orders indexes
CREATE INDEX idx_orders_buyer_id ON orders(buyer_id);
CREATE INDEX idx_orders_seller_id ON orders(seller_id);
CREATE INDEX idx_orders_product_id ON orders(product_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);

-- Reviews indexes
CREATE INDEX idx_reviews_reviewer_id ON reviews(reviewer_id);
CREATE INDEX idx_reviews_reviewee_id ON reviews(reviewee_id);
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_reviews_order_id ON reviews(order_id);
CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE INDEX idx_reviews_created_at ON reviews(created_at);

-- Markets indexes
CREATE INDEX idx_markets_host_id ON markets(host_id);
CREATE INDEX idx_markets_start_date ON markets(start_date);
CREATE INDEX idx_markets_end_date ON markets(end_date);
CREATE INDEX idx_markets_event_type ON markets(event_type);
CREATE INDEX idx_markets_created_at ON markets(created_at);

-- Market participants indexes
CREATE INDEX idx_market_participants_market_id ON market_participants(market_id);
CREATE INDEX idx_market_participants_seller_id ON market_participants(seller_id);
CREATE INDEX idx_market_participants_status ON market_participants(application_status);

-- Collaborations indexes
CREATE INDEX idx_collaborations_proposer_id ON collaborations(proposer_id);
CREATE INDEX idx_collaborations_partner_id ON collaborations(partner_id);
CREATE INDEX idx_collaborations_status ON collaborations(status);
CREATE INDEX idx_collaborations_created_at ON collaborations(created_at);

-- Waitlist indexes
CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_user_type ON waitlist(user_type);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);

-- =============================================
-- 4. CREATE FUNCTIONS AND TRIGGERS
-- =============================================

-- Function to handle new user signup
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
  
  -- Add default buyer role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'buyer');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_collab_scores_updated_at
  BEFORE UPDATE ON collab_scores
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_collaborations_updated_at
  BEFORE UPDATE ON collaborations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to calculate average rating
CREATE OR REPLACE FUNCTION public.calculate_average_rating(user_id_param UUID)
RETURNS DECIMAL AS $$
DECLARE
  avg_rating DECIMAL;
BEGIN
  SELECT COALESCE(AVG(rating), 0) INTO avg_rating
  FROM reviews
  WHERE reviewee_id = user_id_param;
  
  UPDATE collab_scores
  SET average_rating = avg_rating
  WHERE user_id = user_id_param;
  
  RETURN avg_rating;
END;
$$ LANGUAGE plpgsql;

-- Function to update collaboration scores
CREATE OR REPLACE FUNCTION public.update_collab_scores()
RETURNS TRIGGER AS $$
BEGIN
  -- Update or insert collab_scores record
  INSERT INTO collab_scores (user_id, total_points, completed_collabs, positive_reviews, average_rating)
  VALUES (NEW.reviewee_id, 0, 0, 0, 0)
  ON CONFLICT (user_id) DO NOTHING;
  
  -- Update positive reviews count
  UPDATE collab_scores
  SET positive_reviews = (
    SELECT COUNT(*)
    FROM reviews
    WHERE reviewee_id = NEW.reviewee_id AND rating >= 4
  )
  WHERE user_id = NEW.reviewee_id;
  
  -- Update average rating
  PERFORM public.calculate_average_rating(NEW.reviewee_id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update scores when review is added
CREATE TRIGGER update_scores_on_review
  AFTER INSERT ON reviews
  FOR EACH ROW EXECUTE FUNCTION public.update_collab_scores();

-- =============================================
-- 5. ROW LEVEL SECURITY POLICIES
-- =============================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE collab_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE markets ENABLE ROW LEVEL SECURITY;
ALTER TABLE market_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE collaborations ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Public profiles can be viewed by everyone
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

-- User roles policies
CREATE POLICY "Users can view own roles" ON user_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles" ON user_roles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Products policies
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (is_active = true);

CREATE POLICY "Sellers can manage own products" ON products
  FOR ALL USING (auth.uid() = seller_id);

CREATE POLICY "Admins can manage all products" ON products
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Orders policies
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (auth.uid() = buyer_id OR auth.uid() = seller_id);

CREATE POLICY "Users can create orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = buyer_id);

CREATE POLICY "Sellers can update own orders" ON orders
  FOR UPDATE USING (auth.uid() = seller_id);

-- Reviews policies
CREATE POLICY "Reviews are viewable by everyone" ON reviews
  FOR SELECT USING (true);

CREATE POLICY "Users can create reviews" ON reviews
  FOR INSERT WITH CHECK (auth.uid() = reviewer_id);

CREATE POLICY "Users can update own reviews" ON reviews
  FOR UPDATE USING (auth.uid() = reviewer_id);

-- Collab scores policies
CREATE POLICY "Scores are viewable by everyone" ON collab_scores
  FOR SELECT USING (true);

CREATE POLICY "Users can view own scores" ON collab_scores
  FOR SELECT USING (auth.uid() = user_id);

-- Markets policies
CREATE POLICY "Markets are viewable by everyone" ON markets
  FOR SELECT USING (true);

CREATE POLICY "Hosts can manage own markets" ON markets
  FOR ALL USING (auth.uid() = host_id);

-- Market participants policies
CREATE POLICY "Participants can view own applications" ON market_participants
  FOR SELECT USING (auth.uid() = seller_id);

CREATE POLICY "Sellers can apply to markets" ON market_participants
  FOR INSERT WITH CHECK (auth.uid() = seller_id);

CREATE POLICY "Hosts can manage market participants" ON market_participants
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM markets
      WHERE id = market_id AND host_id = auth.uid()
    )
  );

-- Collaborations policies
CREATE POLICY "Users can view own collaborations" ON collaborations
  FOR SELECT USING (auth.uid() = proposer_id OR auth.uid() = partner_id);

CREATE POLICY "Users can create collaborations" ON collaborations
  FOR INSERT WITH CHECK (auth.uid() = proposer_id);

CREATE POLICY "Partners can update collaborations" ON collaborations
  FOR UPDATE USING (auth.uid() = partner_id);

-- Waitlist policies (public for signup)
CREATE POLICY "Waitlist is publicly readable" ON waitlist
  FOR SELECT USING (true);

CREATE POLICY "Anyone can join waitlist" ON waitlist
  FOR INSERT WITH CHECK (true);

-- =============================================
-- 6. GRANT PERMISSIONS
-- =============================================

-- Grant necessary permissions to authenticated users
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated;

-- Grant permissions to anon users for public data
GRANT USAGE ON SCHEMA public TO anon;
GRANT SELECT ON profiles TO anon;
GRANT SELECT ON products TO anon;
GRANT SELECT ON reviews TO anon;
GRANT SELECT ON collab_scores TO anon;
GRANT SELECT ON markets TO anon;
GRANT SELECT ON collaborations TO anon;
GRANT SELECT, INSERT ON waitlist TO anon;

-- =============================================
-- 7. SAMPLE DATA (OPTIONAL)
-- =============================================

-- Insert sample subscription tiers and roles if needed
-- This is optional and can be removed for production

-- =============================================
-- SCHEMA SETUP COMPLETE
-- =============================================

-- The database schema is now ready for the Boppel marketplace application
-- All tables, relationships, indexes, and security policies are in place
