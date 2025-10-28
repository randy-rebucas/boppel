# Supabase Database Setup for Boppel Marketplace

This guide will help you set up the complete database schema for the Boppel marketplace application in Supabase.

## Overview

The Boppel marketplace includes:
- **User Management**: Multi-role system (buyer/seller/admin) with profiles and authentication
- **Product Catalog**: Support for physical, digital, and ticket products with customization
- **Order Management**: Complete order lifecycle with status tracking
- **Review System**: Product and seller reviews with rating system
- **Collaboration System**: Seller collaboration with scoring and ranking
- **Market Events**: Event hosting and participation management
- **Subscription Tiers**: Different service levels for sellers

## Quick Setup

1. **Open Supabase Dashboard** → Go to your project → **SQL Editor**
2. **Copy and paste** the entire contents of `supabase-schema.sql`
3. **Click "Run"** to execute the schema
4. **Verify** all tables are created successfully

## Database Schema Details

### Tables Created

| Table | Purpose | Key Features |
|-------|---------|--------------|
| `profiles` | User profiles | Authentication, seller types, subscription tiers |
| `user_roles` | Role management | RBAC system for buyers/sellers/admins |
| `products` | Product catalog | Physical/digital/ticket products with customization |
| `orders` | Order management | Complete order lifecycle with status tracking |
| `reviews` | Review system | Product and seller reviews with ratings |
| `collab_scores` | Collaboration scoring | Points, rankings, and badges system |
| `markets` | Event management | Market/event hosting and management |
| `market_participants` | Event participation | Application and participation tracking |
| `collaborations` | Seller collaboration | Partnership and collaboration management |
| `waitlist` | Beta access | Waitlist for early access |

### Enums Created

- `app_role`: buyer, seller, admin
- `product_type`: physical, digital, ticket
- `subscription_tier`: starter, maker, pro_maker, collective
- `seller_type`: physical, digital, both
- `order_status`: pending, processing, shipped, delivered, cancelled
- `collaboration_status`: pending, accepted, active, completed, declined
- `application_status`: pending, approved, rejected

### Key Features Implemented

#### 1. **Authentication Integration**
- Automatic profile creation on user signup
- Default buyer role assignment
- Secure user data management

#### 2. **Performance Optimization**
- Strategic indexes on frequently queried columns
- Optimized for marketplace queries (products, orders, reviews)
- Efficient relationship lookups

#### 3. **Data Integrity**
- Foreign key constraints
- Check constraints for data validation
- Automatic timestamp updates
- Cascade deletes for data consistency

#### 4. **Security (Row Level Security)**
- Users can only access their own data
- Public read access for products and reviews
- Admin override capabilities
- Secure collaboration and order management

#### 5. **Advanced Features**
- Automatic collaboration score calculation
- Average rating computation
- Real-time data updates via triggers
- JSON support for flexible data storage

## Post-Setup Verification

After running the schema, verify these key components:

### 1. Check Tables
```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
```

### 2. Check Enums
```sql
SELECT typname FROM pg_type WHERE typtype = 'e' ORDER BY typname;
```

### 3. Check Indexes
```sql
SELECT indexname, tablename FROM pg_indexes 
WHERE schemaname = 'public' 
ORDER BY tablename, indexname;
```

### 4. Check RLS Policies
```sql
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE schemaname = 'public' 
ORDER BY tablename, policyname;
```

## Environment Variables

Make sure your `.env.local` has these variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Testing the Setup

1. **Test Authentication**: Try signing up a new user
2. **Test Profile Creation**: Verify profile is created automatically
3. **Test Product Creation**: Create a test product as a seller
4. **Test Order Flow**: Place an order and track status
5. **Test Reviews**: Add reviews and verify score calculation

## Common Issues & Solutions

### Issue: "Permission denied" errors
**Solution**: Check that RLS policies are properly set up and user has correct roles

### Issue: Foreign key constraint errors
**Solution**: Ensure all referenced records exist before creating dependent records

### Issue: Enum type errors
**Solution**: Verify all enum values match exactly (case-sensitive)

### Issue: Trigger not firing
**Solution**: Check that functions are created with SECURITY DEFINER

## Next Steps

1. **Update your TypeScript types** to match the database schema
2. **Implement API routes** for each table's CRUD operations
3. **Set up real-time subscriptions** for live updates
4. **Configure email templates** for order notifications
5. **Set up file storage** for product images and avatars

## Maintenance

- **Regular backups**: Supabase handles this automatically
- **Monitor performance**: Use Supabase dashboard analytics
- **Update indexes**: Add more as your data grows
- **Review RLS policies**: Adjust as your security requirements evolve

---

The database is now ready for your Boppel marketplace application! 🚀
