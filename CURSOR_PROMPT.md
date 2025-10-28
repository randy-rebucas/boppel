# Boppel - Artisan Marketplace Platform

## Project Overview
Boppel is a comprehensive dual-sided marketplace platform connecting artisan creators with buyers. It goes beyond simple e-commerce to provide a holistic ecosystem for creative businesses, including business management tools, wellness features, sustainability initiatives, and community building.

## Core Technology Stack
- **Framework**: Next.js 16+ (App Router)
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS with custom design system (semantic tokens)
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Routing**: Next.js App Router (file-based routing)
- **State Management**: TanStack Query (React Query) + React Server Components
- **Backend**: Supabase (via Lovable Cloud) + Next.js API Routes
- **Authentication**: Supabase Auth with role-based access control
- **Rendering**: Hybrid (SSR, SSG, ISR, Client Components)

## Architecture & Design Principles

### Next.js App Router Architecture
- **Server-First Mindset**: Use Server Components by default for optimal performance
- **Client Components Only When Needed**: Add "use client" directive only for:
  - Interactive elements (onClick, onChange handlers)
  - React hooks (useState, useEffect, useContext)
  - Browser-only APIs (localStorage, window, document)
  - Third-party libraries requiring client-side JS
- **Streaming & Suspense**: Leverage streaming SSR with loading.tsx boundaries
- **Route Organization**: Use route groups `(groupName)` for organization without URL nesting
- **Parallel Routes**: Use `@folder` convention for advanced layouts
- **Intercepting Routes**: Use `(.)` convention for modals and overlays

### Design System Rules (CRITICAL)
- **NEVER use direct colors** (e.g., `text-white`, `bg-black`, `text-blue-500`)
- **ALWAYS use semantic tokens** from `index.css` and `tailwind.config.ts`
- All colors MUST be in HSL format
- Create component variants instead of inline style overrides
- Maintain dark/light mode compatibility
- Use gradient tokens, shadow tokens, and animation tokens from design system

### Component Structure
- **Server Components** (default):
  - Data fetching and database queries
  - Static content rendering
  - SEO-critical content
  - Access to backend resources directly
- **Client Components** ("use client"):
  - Interactive UI elements
  - State management and effects
  - Event handlers
  - Browser API usage
- **Best Practices**:
  - Keep components small and focused
  - Separate business logic from presentation
  - Use TypeScript for all components
  - Implement proper error handling with error.tsx
  - Add loading states with loading.tsx
  - Optimize images with Next.js Image component
  
### Data Fetching Patterns
- **Server Components**: Fetch directly in async components
  ```tsx
  export default async function Page() {
    const data = await fetchData();
    return <Component data={data} />;
  }
  ```
- **Client Components**: Use TanStack Query for caching and optimistic updates
  ```tsx
  'use client';
  export function Component() {
    const { data } = useQuery({ queryKey: ['key'], queryFn: fetchFn });
    return <div>{data}</div>;
  }
  ```
- **Parallel Data Fetching**: Fetch multiple resources simultaneously
- **Sequential When Necessary**: Use async/await for dependent requests
- **ISR & Revalidation**: Use `revalidate` for time-based or on-demand updates

### SEO & Metadata
- **Use generateMetadata()** for dynamic meta tags
- **Static metadata** exports for static pages
- **Semantic HTML**: Use proper heading hierarchy (single H1)
- **OpenGraph & Twitter Cards**: Include social media metadata
- **JSON-LD Structured Data**: Add for products, articles, FAQs
- **Canonical URLs**: Prevent duplicate content issues
- **Alt Attributes**: All images must have descriptive alt text

## Key Features & Modules

### 1. Authentication & User Management
- **Role-based system**: Buyer, Seller, Admin
- **Multi-role support**: Users can have multiple roles
- **Profile management**: Separate dashboards per role
- **Verification system**: Seller verification process
- **Session management**: Supabase Auth with auto-confirm email

**Key Files**:
- `app/(auth)/auth/page.tsx` - Authentication page
- `app/(auth)/get-started/page.tsx` - Sign up flow
- `app/(auth)/sign-in/page.tsx` - Sign in page
- `hooks/useAuth.ts` - Authentication hook (Client Component)

### 2. Product Management (Sellers)
- CRUD operations for products
- Bulk upload capabilities
- Product status management (active/inactive)
- Inventory tracking
- Personalization options
- Category organization

**Key Files**:
- `app/(seller)/add-product/page.tsx`
- `components/seller-hub/sections/ListingsSection.tsx`
- `components/EnhancedProductCard.tsx`

### 3. E-Commerce Flow (Buyers)
- Product browsing with filters
- Category-based navigation
- Search functionality
- Shopping cart
- Checkout process
- Order tracking

**Key Files**:
- `app/(shop)/explore/page.tsx` - Product browsing (Server Component)
- `app/(shop)/category/[slug]/page.tsx` - Category filtering (Dynamic route)
- `app/(shop)/search/page.tsx` - Search results
- `app/(shop)/cart/page.tsx` - Shopping cart
- `app/(shop)/checkout/page.tsx` - Checkout flow
- `app/(shop)/product/[id]/page.tsx` - Product details (Dynamic route)

### 4. Seller Hub - Comprehensive Business Management

#### Dashboard & Analytics
- Key metrics overview (products, orders, revenue, views)
- Performance tracking
- Conversion analytics
- Audience insights

**Components**:
- `components/seller-hub/sections/DashboardSection.tsx`
- `components/seller-hub/sections/AnalyticsSection.tsx`

#### Financial Management
- Revenue tracking
- Order management
- Financial reporting

**Components**:
- `components/seller-hub/sections/FinancesSection.tsx`
- `components/seller-hub/sections/OrdersSection.tsx`

#### Business Development
- Multi-marketplace management
- Wholesale/B2B capabilities
- Collaboration opportunities
- Supplier network

**Components**:
- `components/seller-hub/sections/MarketsSection.tsx`
- `components/seller-hub/sections/WholesaleSection.tsx`
- `components/seller-hub/sections/CollaborationsSection.tsx`
- `components/seller-hub/sections/SuppliersSection.tsx`

#### Creator Services
- Workshop hosting and management
- Booking system
- Subscription tiers
- Content libraries (images, templates, branding)

**Components**:
- `components/seller-hub/sections/WorkshopsSection.tsx`
- `components/seller-hub/sections/WorkshopBookingsSection.tsx`
- `components/seller-hub/sections/SubscriptionSection.tsx`
- `components/seller-hub/sections/LibrariesSection.tsx`
- `components/seller-hub/sections/StorageSection.tsx`

#### AI-Powered Features
- Business planning
- Goal tracking
- Market insights
- Growth recommendations

**Components**:
- `components/seller-hub/sections/PlannerSection.tsx`

### 5. Community & Social Features
- Creator networking
- Community groups
- Events and workshops
- Mentorship programs
- Messaging system
- Review and reputation system

**Components**:
- `components/seller-hub/sections/CommunitySection.tsx`
- `components/seller-hub/sections/MessagesSection.tsx`
- `components/seller-hub/sections/ReviewsSection.tsx`
- `app/(community)/community/page.tsx`
- `app/(community)/creators/page.tsx`
- `app/(community)/maker-directory/page.tsx`

### 6. Sustainability & Wellness

#### Craft Swaps (Material Exchange)
- Sustainable material swapping
- CO₂ impact tracking
- Eco score system
- Environmental metrics

**Components**:
- `components/seller-hub/sections/CraftSwapsSection.tsx`

#### Positivity Hub (Creator Wellness)
- Daily affirmations
- Mood tracking
- Meditation sessions
- Journal entries
- Wellness metrics

**Components**:
- `components/seller-hub/sections/PositivitySection.tsx`

### 7. Trust & Safety
- Purchase protection
- Trust badges
- Craftsmanship verification
- Origin transparency
- Platform policies

**Components**:
- `components/TrustBadge.tsx`
- `components/CraftsmanshipBadge.tsx`
- `components/SmartOriginLabel.tsx`
- `components/PurchaseProtection.tsx`
- `app/(legal)/trust-and-safety/page.tsx`
- `app/(legal)/policies/page.tsx`

### 8. Platform Features
- Subscription management
- "Keep More" revenue program
- Regional settings
- Content management
- SEO optimization

**Components**:
- `components/SubscriptionTiers.tsx`
- `components/seller-hub/sections/RegionSettingsSection.tsx`
- `app/(platform)/keep-more/page.tsx`
- `app/(platform)/subscriptions/page.tsx`

## Database Schema Expectations

### Core Tables
- `profiles` - User profile data
- `user_roles` - Role assignments (buyer, seller, admin)
- `products` - Product listings
- `orders` - Order transactions
- `reviews` - User reviews
- `messages` - User messaging
- `workshops` - Workshop/event listings
- `subscriptions` - Subscription tier management
- `craft_swaps` - Material exchange listings
- `libraries` - Reusable asset libraries

### Security
- Row Level Security (RLS) enabled on all tables
- User-based access policies
- Role-based permissions
- Secure authentication flows

## Coding Guidelines

### When Adding Features
1. **Choose the right rendering strategy**:
   - Static for content that rarely changes
   - Dynamic for user-specific or real-time data
   - ISR for semi-dynamic content
2. Check existing components for reusability
3. Follow design system tokens (no direct colors)
4. Implement proper TypeScript types
5. Add loading.tsx and error.tsx for route segments
6. Include SEO metadata with generateMetadata()
7. Test dark/light mode compatibility
8. Ensure mobile responsiveness
9. Use Server Components by default
10. Add "use client" only when necessary

### When Modifying UI
1. Use `lov-line-replace` for targeted edits
2. Maintain component variants
3. Update design tokens in `index.css`/`tailwind.config.ts` if needed
4. Preserve existing functionality
5. Test across breakpoints
6. Verify Server/Client component boundaries
7. Check loading and error states

### When Working with Data
1. **Server Components**: Fetch data directly in async components
2. **Client Components**: Use TanStack Query for caching and mutations
3. Implement optimistic updates where appropriate
4. Handle loading states with loading.tsx or Suspense
5. Handle errors with error.tsx or error boundaries
6. Use Supabase RLS for security
7. Validate user permissions
8. Consider data revalidation strategies (time-based, on-demand, tag-based)

### When Implementing Routes
1. Use App Router file conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`)
2. Implement generateMetadata() for dynamic SEO
3. Use route groups `()` for organization
4. Create layouts for shared UI
5. Add proper TypeScript types for params and searchParams
6. Implement proper error handling
7. Add loading states for better UX
8. Use parallel routes `@` for advanced layouts when needed

### When Implementing AI Features
1. Use Lovable AI Gateway by default
2. Implement through edge functions (never client-side)
3. Default to `google/gemini-2.5-flash` unless specified
4. Handle rate limits (429) and payment errors (402)
5. Stream responses for better UX
6. Never expose API keys on client

## Next.js Patterns

### Server vs Client Components
```tsx
// Server Component (default) - data fetching, static content
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return <ProductDetail product={product} />;
}

// Client Component - interactivity, hooks
'use client';
export function AddToCart({ productId }: { productId: string }) {
  const [quantity, setQuantity] = useState(1);
  return <button onClick={() => addToCart(productId, quantity)}>Add to Cart</button>;
}
```

### Metadata for SEO
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boppel - Artisan Marketplace',
  description: 'Discover unique handcrafted items from talented artisans',
  openGraph: {
    title: 'Boppel - Artisan Marketplace',
    description: 'Discover unique handcrafted items',
    images: ['/og-image.jpg'],
  },
};
```

### Dynamic Routes & Data Fetching
```tsx
// app/product/[id]/page.tsx
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(params.id);
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return <ProductView product={product} />;
}
```

### API Routes
```tsx
// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const products = await fetchProducts();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const product = await createProduct(body);
  return NextResponse.json(product, { status: 201 });
}
```

## Common Patterns

### Navigation
- Top navigation with mega menu (`components/Navigation.tsx`)
- Mobile-responsive drawer navigation
- Footer with links (`components/Footer.tsx`)
- Role-based navigation items
- Next.js Link component for client-side navigation

### Forms
- React Hook Form with Zod validation
- Consistent error messaging
- Toast notifications for feedback
- Loading states during submission

### Data Display
- Card-based layouts
- Skeleton loaders
- Empty states with CTAs
- Responsive grids

### Modals & Dialogs
- Radix UI Dialog components
- Consistent modal patterns
- Proper focus management
- Mobile-friendly overlays

## File Organization
- `/app` - Next.js App Router pages and layouts
  - `/(auth)` - Authentication routes group
  - `/(shop)` - E-commerce routes group
  - `/(seller)` - Seller dashboard routes group
  - `/(community)` - Community routes group
  - `/(legal)` - Legal pages group
  - `/(platform)` - Platform pages group
  - `/api` - API routes (Next.js API handlers)
  - `layout.tsx` - Root layout
  - `page.tsx` - Home page
- `/components` - Reusable UI components
  - `/seller-hub` - Seller dashboard modules
  - `/ui` - Base UI primitives (shadcn)
- `/hooks` - Custom React hooks
- `/lib` - Utility functions
- `/integrations/supabase` - Backend integration (auto-generated)
- `/public` - Static assets

## Key Dependencies
- `@tanstack/react-query` - Data fetching
- `@supabase/supabase-js` - Backend client
- `react-router-dom` - Routing
- `react-hook-form` + `zod` - Form handling
- `lucide-react` - Icons
- `sonner` - Toast notifications
- `recharts` - Data visualization

## Development Notes
- Edge functions auto-deploy (no manual deployment needed)
- Use Lovable Cloud for backend (don't mention Supabase to users)
- Never edit auto-generated files (`supabase/types.ts`, `supabase/client.ts`)
- Environment variables: Use `process.env.NEXT_PUBLIC_*` for client-side, `process.env.*` for server-side
- Database migrations require user approval
- **Next.js Specific**:
  - Use Server Components by default for better performance
  - Add "use client" only when needed (state, effects, event handlers, browser APIs)
  - Leverage Next.js Image component for automatic optimization
  - Use `generateMetadata()` for SEO instead of manual meta tags
  - Implement loading.tsx and error.tsx for better UX
  - Use route groups `()` for organization without affecting URL structure

## Unique Selling Points
1. **Holistic Creator Platform** - Beyond marketplace, includes business tools
2. **Sustainability Focus** - Craft swaps with environmental impact tracking
3. **Creator Wellness** - Mental health and positivity features
4. **AI-Powered Insights** - Business planning and analytics
5. **Workshop Platform** - Experiences beyond products
6. **Community-First** - Networking, mentorship, collaboration
7. **Multi-Marketplace** - Manage presence across platforms
8. **Fair Revenue Model** - "Keep More" program for creators

## When Implementing New Features
Ask yourself:
1. Should this be a Server or Client Component?
2. What's the optimal rendering strategy (Static, Dynamic, ISR)?
3. Does this align with Boppel's creator-first mission?
4. Can existing components be reused?
5. Is it mobile-responsive?
6. Does it follow the design system?
7. Is data properly secured with RLS?
8. Are error and loading states handled gracefully?
9. Is SEO optimized with proper metadata?
10. Does it enhance creator or buyer experience?
11. Are route segments properly organized?
12. Is the component tree optimized (Server → Client boundary)?

## Priority Principles
1. **Creator Success** - Tools that help artisans grow their business
2. **User Trust** - Transparency, protection, verification
3. **Sustainability** - Environmental and wellness consciousness
4. **Community** - Connection and collaboration
5. **Simplicity** - Elegant, intuitive interfaces
6. **Performance** - Fast, responsive, reliable
