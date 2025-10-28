import Link from 'next/link';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Award, 
  TrendingUp, 
  Heart,
  Star,
  Globe,
  Palette,
  Leaf,
  Shield,
  ArrowRight,
  Search,
  Filter,
  Image as ImageIcon
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const featuredCreators = [
  {
    id: '1',
    name: 'Sarah Johnson',
    username: '@sarahjewelry',
    avatar: '/placeholder-avatar-1.jpg',
    specialty: 'Handcrafted Silver Jewelry',
    location: 'Edinburgh, Scotland',
    rating: 4.9,
    reviewCount: 342,
    followers: 1250,
    verified: true,
    badges: ['Top Seller', 'Eco Warrior'],
  },
  {
    id: '2',
    name: 'Mike Chen',
    username: '@mikewoodcraft',
    avatar: '/placeholder-avatar-2.jpg',
    specialty: 'Sustainable Wood Products',
    location: 'Manchester, UK',
    rating: 4.8,
    reviewCount: 189,
    followers: 890,
    verified: true,
    badges: ['Sustainability Champion', 'Community Leader'],
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    username: '@emmapottery',
    avatar: '/placeholder-avatar-3.jpg',
    specialty: 'Ceramic Art & Pottery',
    location: 'Bristol, UK',
    rating: 4.9,
    reviewCount: 267,
    followers: 1560,
    verified: true,
    badges: ['Workshop Host', 'Mentor'],
  },
];

const upcomingEvents = [
  {
    id: '1',
    title: 'Pottery Workshop: Hand-building Techniques',
    host: 'Emma Rodriguez',
    date: '2024-02-15',
    time: '2:00 PM',
    location: 'Bristol Art Studio',
    price: '£45',
    attendees: 12,
    maxAttendees: 15,
    type: 'workshop',
  },
  {
    id: '2',
    title: 'Sustainability in Craft: Material Sourcing',
    host: 'Mike Chen',
    date: '2024-02-20',
    time: '7:00 PM',
    location: 'Online',
    price: 'Free',
    attendees: 45,
    maxAttendees: 100,
    type: 'webinar',
  },
  {
    id: '3',
    title: 'Jewelry Making: Silver Ring Crafting',
    host: 'Sarah Johnson',
    date: '2024-02-25',
    time: '10:00 AM',
    location: 'Edinburgh Craft Center',
    price: '£65',
    attendees: 8,
    maxAttendees: 10,
    type: 'workshop',
  },
];

const communityStats = [
  { label: 'Active Creators', value: '10,000+', icon: Users },
  { label: 'Monthly Workshops', value: '150+', icon: Calendar },
  { label: 'Community Messages', value: '50,000+', icon: MessageCircle },
  { label: 'Collaborations', value: '2,500+', icon: Heart },
];

const recentPosts = [
  {
    id: '1',
    author: 'Sarah Johnson',
    avatar: '/placeholder-avatar-1.jpg',
    content: 'Just finished this beautiful Celtic knot ring! The intricate details took me 6 hours to perfect. What do you think?',
    image: '/placeholder-ring.jpg',
    likes: 45,
    comments: 12,
    time: '2 hours ago',
  },
  {
    id: '2',
    author: 'Mike Chen',
    avatar: '/placeholder-avatar-2.jpg',
    content: 'Excited to announce our new sustainability workshop series! We\'ll be covering everything from material sourcing to waste reduction. Who\'s interested?',
    likes: 78,
    comments: 23,
    time: '5 hours ago',
  },
  {
    id: '3',
    author: 'Emma Rodriguez',
    avatar: '/placeholder-avatar-3.jpg',
    content: 'Behind the scenes of my latest pottery collection. Each piece tells a story of tradition and innovation. The glazing process is my favorite part!',
    image: '/placeholder-pottery.jpg',
    likes: 92,
    comments: 18,
    time: '1 day ago',
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Creator Community
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Connect with fellow artisans, share your journey, and grow together in our vibrant community of creative entrepreneurs.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <div key={index} className="card-base text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Creators */}
          <div className="lg:col-span-2">
            <div className="card-base">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary">Featured Creators</h2>
                <Link href="/community/creators" className="text-brand-primary hover:underline">
                  View all creators
                </Link>
              </div>
              
              <div className="space-y-6">
                {featuredCreators.map((creator) => (
                  <div key={creator.id} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-surface-secondary transition-colors">
                    <div className="w-16 h-16 bg-surface-secondary rounded-full flex items-center justify-center">
                      <span className="text-lg font-medium text-text-primary">
                        {creator.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-text-primary">{creator.name}</h3>
                        {creator.verified && (
                          <Shield className="w-4 h-4 text-brand-primary" />
                        )}
                      </div>
                      <p className="text-text-secondary text-sm mb-2">{creator.specialty}</p>
                      <div className="flex items-center space-x-4 text-sm text-text-tertiary">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-brand-accent fill-current" />
                          <span>{creator.rating}</span>
                          <span>({creator.reviewCount})</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{creator.followers} followers</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Globe className="w-4 h-4" />
                          <span>{creator.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        {creator.badges.map((badge, index) => (
                          <span
                            key={index}
                            className="bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="card-base">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-primary">Upcoming Events</h2>
                <Link href="/community/events" className="text-brand-primary hover:underline text-sm">
                  View all
                </Link>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border border-border-primary rounded-lg hover:bg-surface-secondary transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-text-primary text-sm">{event.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.type === 'workshop' 
                          ? 'bg-brand-primary/10 text-brand-primary'
                          : 'bg-brand-secondary/10 text-brand-secondary'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-2">by {event.host}</p>
                    <div className="space-y-1 text-xs text-text-tertiary">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Globe className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-text-primary">{event.price}</span>
                        <span>{event.attendees}/{event.maxAttendees} attendees</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Feed */}
        <div className="mt-12">
          <div className="card-base">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-primary">Community Feed</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-tertiary" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="input-base pl-10 w-64"
                  />
                </div>
                <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <div key={post.id} className="p-6 border border-border-primary rounded-lg">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-surface-secondary rounded-full flex items-center justify-center">
                      <span className="font-medium text-text-primary">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-text-primary">{post.author}</h3>
                        <span className="text-text-tertiary text-sm">•</span>
                        <span className="text-text-tertiary text-sm">{post.time}</span>
                      </div>
                      <p className="text-text-primary mb-3">{post.content}</p>
                      {post.image && (
                        <div className="aspect-video bg-surface-secondary rounded-lg mb-3 flex items-center justify-center">
                          <ImageIcon className="w-16 h-16 text-text-tertiary" />
                        </div>
                      )}
                      <div className="flex items-center space-x-6 text-sm text-text-tertiary">
                        <button className="flex items-center space-x-1 hover:text-brand-primary">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-brand-primary">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-brand-primary">
                          <ArrowRight className="w-4 h-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="card-base bg-gradient-brand">
            <h2 className="text-3xl font-bold text-text-inverse mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-text-inverse/90 mb-8 max-w-2xl mx-auto">
              Connect with fellow creators, share your work, and grow your creative business together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/sign-up"
                className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90 text-lg px-8 py-4"
              >
                Join Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/community/creators"
                className="btn-base border-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-text-primary text-lg px-8 py-4"
              >
                Browse Creators
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
