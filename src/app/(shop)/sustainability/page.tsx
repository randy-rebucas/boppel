import Link from 'next/link';
import { 
  Leaf, 
  Recycle, 
  TreePine, 
  Zap, 
  Globe, 
  Heart,
  TrendingUp,
  Award,
  Users,
  Package,
  ArrowRight,
  Search,
  Filter,
  Plus,
  Star
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const sustainabilityStats = [
  { label: 'CO₂ Saved', value: '2,450 kg', icon: Leaf, color: 'text-status-success' },
  { label: 'Materials Swapped', value: '1,200+', icon: Recycle, color: 'text-brand-primary' },
  { label: 'Waste Reduced', value: '85%', icon: TreePine, color: 'text-brand-secondary' },
  { label: 'Energy Saved', value: '15,000 kWh', icon: Zap, color: 'text-brand-accent' },
];

const craftSwaps = [
  {
    id: '1',
    title: 'Premium Silver Wire Collection',
    description: 'High-quality sterling silver wire in various gauges. Perfect for jewelry making and wire wrapping projects.',
    image: '/placeholder-silver-wire.jpg',
    category: 'Jewelry Supplies',
    condition: 'Excellent',
    ecoScore: 95,
    co2Saved: 2.3,
    owner: 'Sarah Johnson',
    location: 'Edinburgh, Scotland',
    distance: '2.5 miles',
    available: true,
  },
  {
    id: '2',
    title: 'Ceramic Glazes & Underglazes',
    description: 'Professional-grade ceramic glazes in various colors. Great for pottery and ceramic art projects.',
    image: '/placeholder-glazes.jpg',
    category: 'Ceramic Supplies',
    condition: 'Good',
    ecoScore: 88,
    co2Saved: 1.8,
    owner: 'Mike Chen',
    location: 'Manchester, UK',
    distance: '15.2 miles',
    available: true,
  },
  {
    id: '3',
    title: 'Woodworking Tools Set',
    description: 'Complete set of hand tools for woodworking. Includes chisels, planes, and measuring tools.',
    image: '/placeholder-tools.jpg',
    category: 'Woodworking Tools',
    condition: 'Very Good',
    ecoScore: 92,
    co2Saved: 4.1,
    owner: 'Emma Rodriguez',
    location: 'Bristol, UK',
    distance: '8.7 miles',
    available: false,
  },
  {
    id: '4',
    title: 'Fabric Scraps Collection',
    description: 'Assorted fabric scraps in various colors and textures. Perfect for quilting and textile art.',
    image: '/placeholder-fabric.jpg',
    category: 'Textile Supplies',
    condition: 'Good',
    ecoScore: 85,
    co2Saved: 1.2,
    owner: 'Lisa Thompson',
    location: 'Glasgow, Scotland',
    distance: '45.3 miles',
    available: true,
  },
];

const sustainabilityFeatures = [
  {
    icon: Recycle,
    title: 'Craft Swaps',
    description: 'Exchange materials with fellow creators to reduce waste and give new life to unused supplies.',
    color: 'text-status-success',
  },
  {
    icon: Leaf,
    title: 'CO₂ Tracking',
    description: 'Monitor your environmental impact with detailed carbon footprint tracking for every transaction.',
    color: 'text-brand-primary',
  },
  {
    icon: TreePine,
    title: 'Eco Score System',
    description: 'Get sustainability ratings for products and sellers based on environmental practices.',
    color: 'text-brand-secondary',
  },
  {
    icon: Globe,
    title: 'Local Sourcing',
    description: 'Prioritize local materials and suppliers to reduce transportation emissions.',
    color: 'text-brand-accent',
  },
];

const topEcoSellers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    specialty: 'Sustainable Jewelry',
    ecoScore: 98,
    co2Saved: 245,
    badge: 'Eco Champion',
    avatar: '/placeholder-avatar-1.jpg',
  },
  {
    id: '2',
    name: 'Mike Chen',
    specialty: 'Recycled Wood Products',
    ecoScore: 96,
    co2Saved: 189,
    badge: 'Waste Warrior',
    avatar: '/placeholder-avatar-2.jpg',
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    specialty: 'Upcycled Ceramics',
    ecoScore: 94,
    co2Saved: 156,
    badge: 'Green Innovator',
    avatar: '/placeholder-avatar-3.jpg',
  },
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Sustainable Crafting
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join our mission to make crafting more sustainable. Swap materials, track your impact, and create a greener future together.
          </p>
        </div>

        {/* Sustainability Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {sustainabilityStats.map((stat, index) => (
            <div key={index} className="card-base text-center">
              <div className="w-12 h-12 bg-status-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Sustainability Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Our Sustainability Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="card-base text-center group hover:shadow-elevated transition-all duration-300">
                <div className={`w-16 h-16 bg-status-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-status-success/20 transition-colors`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Craft Swaps Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-2">Craft Swaps</h2>
              <p className="text-text-secondary">Exchange materials with fellow creators and reduce waste</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-tertiary" />
                <input
                  type="text"
                  placeholder="Search materials..."
                  className="input-base pl-10 w-64"
                />
              </div>
              <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              <button className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover">
                <Plus className="w-4 h-4 mr-2" />
                List Material
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {craftSwaps.map((swap) => (
              <div key={swap.id} className="card-base group hover:shadow-elevated transition-all duration-300">
                <div className="aspect-square bg-surface-secondary rounded-lg mb-4 flex items-center justify-center relative">
                  <Package className="w-16 h-16 text-text-tertiary" />
                  {!swap.available && (
                    <div className="absolute inset-0 bg-background-overlay rounded-lg flex items-center justify-center">
                      <span className="bg-status-error text-text-inverse px-3 py-1 rounded-full text-sm font-medium">
                        Unavailable
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-text-primary line-clamp-2">{swap.title}</h3>
                    <div className="flex items-center space-x-1 bg-status-success/10 px-2 py-1 rounded-full">
                      <Leaf className="w-3 h-3 text-status-success" />
                      <span className="text-xs font-medium text-status-success">{swap.ecoScore}</span>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm line-clamp-2">{swap.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-tertiary bg-surface-secondary px-2 py-1 rounded-full">
                      {swap.category}
                    </span>
                    <span className="text-text-tertiary">{swap.condition}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4 text-brand-primary" />
                      <span className="text-text-secondary">{swap.co2Saved}kg CO₂ saved</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-text-tertiary" />
                      <span className="text-text-secondary">{swap.distance}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <p className="text-sm font-medium text-text-primary">{swap.owner}</p>
                      <p className="text-xs text-text-tertiary">{swap.location}</p>
                    </div>
                    <button 
                      disabled={!swap.available}
                      className={`btn-base text-sm px-4 py-2 ${
                        swap.available
                          ? 'bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover'
                          : 'bg-surface-secondary text-text-tertiary cursor-not-allowed'
                      }`}
                    >
                      {swap.available ? 'Request Swap' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Eco Sellers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Top Eco Sellers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topEcoSellers.map((seller) => (
              <div key={seller.id} className="card-base text-center group hover:shadow-elevated transition-all duration-300">
                <div className="w-20 h-20 bg-surface-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-medium text-text-primary">
                    {seller.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{seller.name}</h3>
                <p className="text-text-secondary mb-4">{seller.specialty}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Eco Score</span>
                    <div className="flex items-center space-x-1">
                      <Leaf className="w-4 h-4 text-status-success" />
                      <span className="font-semibold text-status-success">{seller.ecoScore}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">CO₂ Saved</span>
                    <span className="font-semibold text-text-primary">{seller.co2Saved}kg</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                    {seller.badge}
                  </span>
                  <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-base bg-gradient-brand">
            <h2 className="text-3xl font-bold text-text-inverse mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-text-inverse/90 mb-8 max-w-2xl mx-auto">
              Join our community of eco-conscious creators and start making sustainable choices today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/sign-up"
                className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90 text-lg px-8 py-4"
              >
                Join the Movement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/sustainability/swaps"
                className="btn-base border-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-text-primary text-lg px-8 py-4"
              >
                Browse Swaps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
