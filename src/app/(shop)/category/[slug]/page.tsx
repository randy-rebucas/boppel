import { Suspense } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Heart, 
  ShoppingCart,
  Search,
  SortAsc,
  SortDesc
} from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock category data
const categoryData = {
  'jewelry-accessories': {
    name: 'Jewelry & Accessories',
    description: 'Discover unique handcrafted jewelry and accessories from talented artisans around the world.',
    image: '/placeholder-jewelry.jpg',
    productCount: 1247,
    subcategories: ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Brooches', 'Hair Accessories'],
  },
  'home-living': {
    name: 'Home & Living',
    description: 'Transform your space with beautiful handmade home decor and functional art pieces.',
    image: '/placeholder-home.jpg',
    productCount: 892,
    subcategories: ['Ceramics', 'Textiles', 'Woodwork', 'Lighting', 'Wall Art', 'Kitchenware'],
  },
  'art-prints': {
    name: 'Art & Prints',
    description: 'Original artwork and high-quality prints from emerging and established artists.',
    image: '/placeholder-art.jpg',
    productCount: 634,
    subcategories: ['Paintings', 'Digital Art', 'Photography', 'Illustrations', 'Prints', 'Sculptures'],
  },
  'clothing-fashion': {
    name: 'Clothing & Fashion',
    description: 'Unique fashion pieces and accessories made with love and attention to detail.',
    image: '/placeholder-fashion.jpg',
    productCount: 456,
    subcategories: ['Tops', 'Dresses', 'Accessories', 'Bags', 'Scarves', 'Hats'],
  },
};

// Mock products for the category
const mockProducts = [
  {
    id: '1',
    title: 'Handcrafted Silver Ring with Celtic Knot Design',
    description: 'Beautiful sterling silver ring featuring an intricate Celtic knot design.',
    price: 89,
    originalPrice: 120,
    image: '/placeholder-ring.jpg',
    seller: 'Sarah\'s Jewelry Studio',
    rating: 4.9,
    reviewCount: 128,
    inStock: true,
    badges: ['Best Seller', 'Eco Friendly'],
  },
  {
    id: '2',
    title: 'Ceramic Coffee Mug Set',
    description: 'Set of 2 hand-thrown ceramic mugs with unique glaze patterns.',
    price: 45,
    image: '/placeholder-mug.jpg',
    seller: 'Pottery by Mike',
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    badges: ['Handmade'],
  },
  {
    id: '3',
    title: 'Wooden Cutting Board',
    description: 'Eco-friendly bamboo cutting board with juice groove.',
    price: 55,
    image: '/placeholder-board.jpg',
    seller: 'Sustainable Woodcraft',
    rating: 4.6,
    reviewCount: 156,
    inStock: false,
    badges: ['Sustainable'],
  },
  {
    id: '4',
    title: 'Handwoven Scarf',
    description: 'Luxurious handwoven scarf made from sustainable materials.',
    price: 75,
    image: '/placeholder-scarf.jpg',
    seller: 'Weave & Wonder',
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    badges: ['Premium'],
  },
  {
    id: '5',
    title: 'Digital Art Print Collection',
    description: 'High-resolution digital art prints perfect for home decor.',
    price: 25,
    image: '/placeholder-art.jpg',
    seller: 'Digital Dreams Studio',
    rating: 4.7,
    reviewCount: 43,
    inStock: true,
    badges: ['Digital'],
  },
  {
    id: '6',
    title: 'Handmade Soap Set',
    description: 'Natural handmade soaps with essential oils and organic ingredients.',
    price: 32,
    image: '/placeholder-soap.jpg',
    seller: 'Natural Essentials Co.',
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    badges: ['Natural'],
  },
];

function ProductCard({ product }: { product: typeof mockProducts[0] }) {
  return (
    <div className="card-base group hover:shadow-elevated transition-all duration-300">
      <div className="aspect-square bg-surface-secondary rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
        <div className="w-16 h-16 text-text-tertiary">
          <ShoppingCart className="w-full h-full" />
        </div>
        {product.originalPrice && (
          <div className="absolute top-2 left-2 bg-status-error text-text-inverse px-2 py-1 rounded-full text-xs font-medium">
            Save £{product.originalPrice - product.price}
          </div>
        )}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-surface-primary/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-surface-primary">
            <Heart className="w-4 h-4 text-text-secondary hover:text-status-error" />
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-text-primary line-clamp-2">{product.title}</h3>
          <div className="text-right">
            <span className="text-lg font-bold text-text-primary">£{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-text-tertiary line-through ml-2">£{product.originalPrice}</span>
            )}
          </div>
        </div>
        
        <p className="text-text-secondary text-sm line-clamp-2">{product.description}</p>
        
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-brand-accent fill-current" />
          <span className="text-sm text-text-secondary">{product.rating} ({product.reviewCount})</span>
        </div>
        
        <p className="text-sm text-text-tertiary">by {product.seller}</p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-1">
            {product.badges.map((badge, index) => (
              <span
                key={index}
                className="text-xs text-brand-primary bg-brand-primary/10 px-2 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
          <button 
            disabled={!product.inStock}
            className={`btn-base text-sm px-4 py-2 ${
              product.inStock
                ? 'bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover'
                : 'bg-surface-secondary text-text-tertiary cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryData[params.slug as keyof typeof categoryData];
  
  if (!category) {
    return (
      <div className="min-h-screen bg-background-primary">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-text-primary mb-4">Category Not Found</h1>
            <p className="text-text-secondary mb-8">The category you're looking for doesn't exist.</p>
            <Link
              href="/explore"
              className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-8">
          <Link href="/explore" className="hover:text-text-primary">Products</Link>
          <span>/</span>
          <span className="text-text-primary">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link
              href="/explore"
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">{category.name}</h1>
              <p className="text-xl text-text-secondary">{category.description}</p>
            </div>
          </div>

          {/* Category Stats */}
          <div className="flex items-center space-x-6 text-sm text-text-secondary">
            <span>{category.productCount} products</span>
            <span>•</span>
            <span>Free shipping on orders over £50</span>
            <span>•</span>
            <span>30-day returns</span>
          </div>
        </div>

        {/* Subcategories */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Shop by Subcategory</h2>
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map((subcategory) => (
              <button
                key={subcategory}
                className="px-4 py-2 border border-border-primary rounded-full text-sm text-text-secondary hover:text-text-primary hover:border-border-accent transition-colors"
              >
                {subcategory}
              </button>
            ))}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <input
                type="text"
                placeholder={`Search in ${category.name}...`}
                className="input-base pl-10 pr-4 py-3 text-lg"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg">
                  <Grid className="w-5 h-5" />
                </button>
                <button className="p-2 text-text-primary bg-surface-secondary rounded-lg">
                  <List className="w-5 h-5" />
                </button>
              </div>
              <select className="input-base w-auto">
                <option>Sort by: Featured</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
  );
}
