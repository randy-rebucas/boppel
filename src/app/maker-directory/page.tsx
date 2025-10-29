import { Suspense } from 'react';
import Link from 'next/link';
import { Search, Filter, Star, MapPin, Calendar, Award, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock data for maker directory
const makers = [
  {
    id: '1',
    name: 'Sarah Chen',
    specialty: 'Ceramic Artist',
    location: 'San Francisco, CA',
    experience: '8 years',
    rating: 4.9,
    reviewCount: 234,
    products: 45,
    joinedDate: '2023-01-15',
    verified: true,
    featured: true,
    description: 'Hand-thrown ceramics inspired by nature\'s organic forms, each piece a unique testament to traditional pottery techniques and contemporary design.',
    image: '/placeholder-maker-1.jpg',
    categories: ['Ceramics', 'Pottery', 'Home Decor'],
    socialLinks: {
      instagram: '@sarahceramics',
      website: 'sarahceramics.com'
    }
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    specialty: 'Leather Craftsman',
    location: 'Austin, TX',
    experience: '12 years',
    rating: 4.8,
    reviewCount: 189,
    products: 32,
    joinedDate: '2022-11-08',
    verified: true,
    featured: false,
    description: 'Handcrafted leather goods with meticulous attention to detail and timeless design principles, creating heirloom-quality pieces for the discerning collector.',
    image: '/placeholder-maker-2.jpg',
    categories: ['Leather', 'Accessories', 'Bags'],
    socialLinks: {
      instagram: '@marcusleather',
      website: 'marcusleather.com'
    }
  },
  {
    id: '3',
    name: 'Elena Kowalski',
    specialty: 'Textile Designer',
    location: 'Portland, OR',
    experience: '6 years',
    rating: 4.7,
    reviewCount: 156,
    products: 28,
    joinedDate: '2023-03-22',
    verified: true,
    featured: true,
    description: 'Sustainable woven textiles using traditional techniques and eco-friendly materials, creating pieces that honor heritage while embracing modern sensibilities.',
    image: '/placeholder-maker-3.jpg',
    categories: ['Textiles', 'Weaving', 'Fashion'],
    socialLinks: {
      instagram: '@elenatextiles',
      website: 'elenatextiles.com'
    }
  },
  {
    id: '4',
    name: 'James Smith',
    specialty: 'Woodworker',
    location: 'Denver, CO',
    experience: '15 years',
    rating: 4.9,
    reviewCount: 312,
    products: 67,
    joinedDate: '2022-08-14',
    verified: true,
    featured: false,
    description: 'Master woodworker specializing in sustainable furniture and home accessories, combining traditional techniques with modern design sensibilities.',
    image: '/placeholder-maker-4.jpg',
    categories: ['Woodworking', 'Furniture', 'Home Decor'],
    socialLinks: {
      instagram: '@jamessmithwood',
      website: 'jamessmithwood.com'
    }
  },
  {
    id: '5',
    name: 'Maria Garcia',
    specialty: 'Jewelry Designer',
    location: 'Miami, FL',
    experience: '10 years',
    rating: 4.8,
    reviewCount: 198,
    products: 41,
    joinedDate: '2023-02-10',
    verified: true,
    featured: true,
    description: 'Contemporary jewelry designer creating unique pieces that blend traditional metalsmithing with modern aesthetics, using ethically sourced materials.',
    image: '/placeholder-maker-5.jpg',
    categories: ['Jewelry', 'Accessories', 'Metalsmithing'],
    socialLinks: {
      instagram: '@mariagarciajewelry',
      website: 'mariagarciajewelry.com'
    }
  },
  {
    id: '6',
    name: 'David Kim',
    specialty: 'Glass Artist',
    location: 'Seattle, WA',
    experience: '7 years',
    rating: 4.6,
    reviewCount: 143,
    products: 23,
    joinedDate: '2023-05-18',
    verified: true,
    featured: false,
    description: 'Blown glass artist creating functional and decorative pieces that showcase the beauty and versatility of glass as a medium.',
    image: '/placeholder-maker-6.jpg',
    categories: ['Glass', 'Art', 'Home Decor'],
    socialLinks: {
      instagram: '@davidglassart',
      website: 'davidglassart.com'
    }
  }
];

const categories = [
  'All Categories',
  'Ceramics & Pottery',
  'Leather & Accessories',
  'Textiles & Weaving',
  'Woodworking',
  'Jewelry & Metalsmithing',
  'Glass & Art',
  'Fashion & Clothing',
  'Home & Living',
  'Digital Art'
];

const locations = [
  'All Locations',
  'San Francisco, CA',
  'Austin, TX',
  'Portland, OR',
  'Denver, CO',
  'Miami, FL',
  'Seattle, WA',
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL'
];

function MakerCard({ maker }: { maker: typeof makers[0] }) {
  return (
    <div className="card-sophisticated group hover:shadow-elevated transition-all duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
          {maker.image ? (
            <img
              src={maker.image}
              alt={maker.name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="text-lg font-medium text-brand-primary">
              {maker.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
              {maker.name}
            </h3>
            {maker.verified && (
              <div className="w-5 h-5 bg-status-success rounded-full flex items-center justify-center">
                <Award className="w-3 h-3 text-text-inverse" />
              </div>
            )}
            {maker.featured && (
              <span className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full">
                Featured
              </span>
            )}
          </div>
          <p className="text-text-secondary font-medium mb-1">{maker.specialty}</p>
          <div className="flex items-center text-sm text-text-tertiary mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {maker.location}
          </div>
          <div className="flex items-center space-x-4 text-sm text-text-tertiary">
            <span>{maker.experience} experience</span>
            <span>•</span>
            <span>{maker.products} products</span>
          </div>
        </div>
      </div>
      
      <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
        {maker.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {maker.categories.map((category) => (
          <span
            key={category}
            className="px-2 py-1 bg-surface-secondary text-text-secondary text-xs rounded-full"
          >
            {category}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-brand-accent fill-current" />
          <span className="text-sm font-medium text-text-primary">{maker.rating}</span>
          <span className="text-sm text-text-tertiary">({maker.reviewCount})</span>
        </div>
        <Link
          href={`/artisan/${maker.id}`}
          className="text-sm text-brand-primary hover:underline font-medium"
        >
          View Profile →
        </Link>
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
        <h3 className="font-semibold text-text-primary mb-4">Location</h3>
        <div className="space-y-2">
          {locations.map((location) => (
            <label key={location} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="location"
                value={location}
                className="text-brand-primary focus:ring-brand-primary"
                defaultChecked={location === 'All Locations'}
              />
              <span className="text-sm text-text-secondary hover:text-text-primary">
                {location}
              </span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-text-primary mb-4">Experience Level</h3>
        <div className="space-y-2">
          {['All Levels', '1-3 years', '4-7 years', '8-12 years', '12+ years'].map((level) => (
            <label key={level} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="text-brand-primary focus:ring-brand-primary"
              />
              <span className="text-sm text-text-secondary hover:text-text-primary">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-text-primary mb-4">Special Features</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="text-brand-primary focus:ring-brand-primary"
            />
            <span className="text-sm text-text-secondary hover:text-text-primary">
              Verified Artisans
            </span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="text-brand-primary focus:ring-brand-primary"
            />
            <span className="text-sm text-text-secondary hover:text-text-primary">
              Featured Makers
            </span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="text-brand-primary focus:ring-brand-primary"
            />
            <span className="text-sm text-text-secondary hover:text-text-primary">
              Taking Commissions
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default function MakerDirectoryPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Maker Directory
          </h1>
          <p className="text-xl text-text-secondary">
            Discover talented artisans and connect with the creators behind your favorite pieces.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <input
                type="text"
                placeholder="Search for makers, specialties, or locations..."
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
                  {makers.length} makers found
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-text-primary bg-surface-secondary rounded-lg">
                    <Users className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg">
                    <Calendar className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <select className="input-base w-auto">
                <option>Sort by: Featured</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Experience</option>
                <option>Sort by: Newest</option>
                <option>Sort by: Location</option>
              </select>
            </div>

            {/* Makers Grid */}
            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="card-base animate-pulse">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 bg-surface-secondary rounded-full"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-surface-secondary rounded w-3/4"></div>
                        <div className="h-3 bg-surface-secondary rounded w-1/2"></div>
                        <div className="h-3 bg-surface-secondary rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-surface-secondary rounded w-full"></div>
                      <div className="h-3 bg-surface-secondary rounded w-5/6"></div>
                      <div className="h-3 bg-surface-secondary rounded w-4/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            }>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {makers.map((maker) => (
                  <MakerCard key={maker.id} maker={maker} />
                ))}
              </div>
            </Suspense>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover px-8 py-3">
                Load More Makers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
