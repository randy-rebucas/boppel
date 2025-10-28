import { Suspense } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock data for demonstration
const mockProducts = [
  {
    id: '1',
    title: 'Handcrafted Silver Ring',
    description: 'Beautiful sterling silver ring with intricate Celtic knot design',
    price: 89,
    images: ['/placeholder-ring.jpg'],
    category: 'Jewelry & Accessories',
    rating: 4.9,
    reviewCount: 128,
    seller: 'Sarah\'s Jewelry Studio',
    isActive: true,
    stock_quantity: 5,
    product_type: 'physical' as const,
  },
  {
    id: '2',
    title: 'Ceramic Coffee Mug Set',
    description: 'Set of 2 hand-thrown ceramic mugs with unique glaze patterns',
    price: 45,
    images: ['/placeholder-mug.jpg'],
    category: 'Home & Living',
    rating: 4.8,
    reviewCount: 67,
    seller: 'Pottery by Mike',
    isActive: true,
    stock_quantity: 12,
    product_type: 'physical' as const,
  },
  {
    id: '3',
    title: 'Digital Art Print Collection',
    description: 'High-resolution digital art prints perfect for home decor',
    price: 25,
    images: ['/placeholder-art.jpg'],
    category: 'Art & Prints',
    rating: 4.7,
    reviewCount: 43,
    seller: 'Digital Dreams Studio',
    isActive: true,
    stock_quantity: null,
    product_type: 'digital' as const,
  },
  {
    id: '4',
    title: 'Handwoven Scarf',
    description: 'Luxurious handwoven scarf made from sustainable materials',
    price: 75,
    images: ['/placeholder-scarf.jpg'],
    category: 'Clothing & Fashion',
    rating: 4.9,
    reviewCount: 89,
    seller: 'Weave & Wonder',
    isActive: true,
    stock_quantity: 8,
    product_type: 'physical' as const,
  },
  {
    id: '5',
    title: 'Wooden Cutting Board',
    description: 'Eco-friendly bamboo cutting board with juice groove',
    price: 55,
    images: ['/placeholder-board.jpg'],
    category: 'Home & Living',
    rating: 4.6,
    reviewCount: 156,
    seller: 'Sustainable Woodcraft',
    isActive: true,
    stock_quantity: 15,
    product_type: 'physical' as const,
  },
  {
    id: '6',
    title: 'Handmade Soap Set',
    description: 'Natural handmade soaps with essential oils and organic ingredients',
    price: 32,
    images: ['/placeholder-soap.jpg'],
    category: 'Health & Beauty',
    rating: 4.8,
    reviewCount: 234,
    seller: 'Natural Essentials Co.',
    isActive: true,
    stock_quantity: 20,
    product_type: 'physical' as const,
  },
];

const categories = [
  'All Categories',
  'Jewelry & Accessories',
  'Home & Living',
  'Art & Prints',
  'Clothing & Fashion',
  'Craft Supplies',
  'Digital Products',
  'Health & Beauty',
  'Workshops & Events',
];

function ProductCard({ product }: { product: typeof mockProducts[0] }) {
  return (
    <div className="card-base group hover:shadow-elevated transition-all duration-300">
      <div className="aspect-square bg-surface-secondary rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
        <div className="w-16 h-16 text-text-tertiary">
          <ShoppingCart className="w-full h-full" />
        </div>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-surface-primary/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-surface-primary">
            <Heart className="w-4 h-4 text-text-secondary hover:text-status-error" />
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-text-primary line-clamp-2">{product.title}</h3>
          <span className="text-lg font-bold text-text-primary">£{product.price}</span>
        </div>
        
        <p className="text-text-secondary text-sm line-clamp-2">{product.description}</p>
        
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-brand-accent fill-current" />
          <span className="text-sm text-text-secondary">{product.rating} ({product.reviewCount})</span>
        </div>
        
        <p className="text-sm text-text-tertiary">by {product.seller}</p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-text-tertiary bg-surface-secondary px-2 py-1 rounded-full">
            {product.category}
          </span>
          <button className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover text-sm px-4 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function FiltersSidebar() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-text-primary mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                className="text-brand-primary focus:ring-brand-primary"
                defaultChecked={category === 'All Categories'}
              />
              <span className="text-sm text-text-secondary hover:text-text-primary">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-text-primary mb-4">Price Range</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-text-secondary mb-1">Min Price</label>
            <input
              type="number"
              placeholder="£0"
              className="input-base"
            />
          </div>
          <div>
            <label className="block text-sm text-text-secondary mb-1">Max Price</label>
            <input
              type="number"
              placeholder="£500"
              className="input-base"
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-text-primary mb-4">Product Type</h3>
        <div className="space-y-2">
          {['Physical', 'Digital', 'Tickets'].map((type) => (
            <label key={type} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="text-brand-primary focus:ring-brand-primary"
              />
              <span className="text-sm text-text-secondary hover:text-text-primary">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-text-primary mb-4">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="text-brand-primary focus:ring-brand-primary"
              />
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating ? 'text-brand-accent fill-current' : 'text-text-tertiary'
                    }`}
                  />
                ))}
                <span className="text-sm text-text-secondary">& up</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Explore Products
          </h1>
          <p className="text-xl text-text-secondary">
            Discover unique handcrafted items from talented artisans around the world.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <input
                type="text"
                placeholder="Search for products, sellers, or categories..."
                className="input-base pl-10 pr-4 py-3 text-lg"
              />
            </div>
            <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary px-6">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FiltersSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-text-secondary">
                  {mockProducts.length} products found
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg">
                    <Grid className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-text-primary bg-surface-secondary rounded-lg">
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <select className="input-base w-auto">
                <option>Sort by: Featured</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Newest</option>
              </select>
            </div>

            {/* Products Grid */}
            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card-base animate-pulse">
                    <div className="aspect-square bg-surface-secondary rounded-lg mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-surface-secondary rounded w-3/4"></div>
                      <div className="h-3 bg-surface-secondary rounded w-full"></div>
                      <div className="h-3 bg-surface-secondary rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            }>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Suspense>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover px-8 py-3">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
