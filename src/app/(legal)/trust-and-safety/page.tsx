import Link from 'next/link';
import { 
  Shield, 
  CheckCircle, 
  Lock, 
  Eye, 
  AlertTriangle,
  Users,
  Award,
  FileText,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Heart,
  Globe,
  Zap
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const trustFeatures = [
  {
    icon: Shield,
    title: 'Verified Sellers',
    description: 'All sellers undergo identity verification and quality checks before joining our platform.',
    color: 'text-brand-primary',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Your payment information is protected with bank-level 256-bit SSL encryption.',
    color: 'text-status-success',
  },
  {
    icon: CheckCircle,
    title: 'Purchase Protection',
    description: 'Full refund guarantee if your item doesn\'t arrive or doesn\'t match the description.',
    color: 'text-brand-secondary',
  },
  {
    icon: Eye,
    title: 'Transparent Reviews',
    description: 'Real reviews from verified buyers help you make informed purchasing decisions.',
    color: 'text-brand-accent',
  },
];

const safetyMeasures = [
  {
    title: 'Identity Verification',
    description: 'All sellers must provide government-issued ID and proof of address.',
    icon: Users,
  },
  {
    title: 'Quality Assurance',
    description: 'Products are reviewed for authenticity and quality before going live.',
    icon: Award,
  },
  {
    title: 'Secure Communication',
    description: 'All messages between buyers and sellers are encrypted and monitored.',
    icon: MessageCircle,
  },
  {
    title: 'Dispute Resolution',
    description: 'Our support team mediates any issues between buyers and sellers.',
    icon: AlertTriangle,
  },
];

const protectionPolicies = [
  {
    title: 'Money-Back Guarantee',
    description: 'Get a full refund if your item doesn\'t arrive or doesn\'t match the description.',
    coverage: '30 days',
  },
  {
    title: 'Shipping Protection',
    description: 'We track all shipments and provide insurance coverage for lost or damaged items.',
    coverage: 'Full value',
  },
  {
    title: 'Authenticity Guarantee',
    description: 'All handmade items are verified for authenticity and quality craftsmanship.',
    coverage: 'Lifetime',
  },
  {
    title: 'Seller Verification',
    description: 'Every seller is verified through multiple identity and quality checks.',
    coverage: 'Ongoing',
  },
];

const safetyTips = [
  {
    category: 'For Buyers',
    tips: [
      'Always read product descriptions carefully before purchasing',
      'Check seller ratings and reviews from other buyers',
      'Use our secure messaging system to communicate with sellers',
      'Keep records of all transactions and communications',
      'Report any suspicious activity immediately',
    ],
  },
  {
    category: 'For Sellers',
    tips: [
      'Provide clear, accurate product descriptions and photos',
      'Respond to buyer messages promptly and professionally',
      'Ship items within the promised timeframe',
      'Use tracking numbers for all shipments',
      'Maintain high quality standards in your work',
    ],
  },
];

export default function TrustAndSafetyPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Trust & Safety
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Your security and peace of mind are our top priorities. Learn about our comprehensive protection measures and safety features.
          </p>
        </div>

        {/* Trust Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Our Trust Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="card-base text-center group hover:shadow-elevated transition-all duration-300">
                <div className={`w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/20 transition-colors`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Safety Measures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyMeasures.map((measure, index) => (
              <div key={index} className="card-base">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <measure.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">{measure.title}</h3>
                    <p className="text-text-secondary">{measure.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Protection Policies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Protection Policies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protectionPolicies.map((policy, index) => (
              <div key={index} className="card-base">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary">{policy.title}</h3>
                  <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                    {policy.coverage}
                  </span>
                </div>
                <p className="text-text-secondary">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Safety Tips
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {safetyTips.map((section, index) => (
              <div key={index} className="card-base">
                <h3 className="text-xl font-semibold text-text-primary mb-6">{section.category}</h3>
                <ul className="space-y-4">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-status-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mb-16">
          <div className="card-base">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
              Community Guidelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Respect</h3>
                <p className="text-text-secondary">
                  Treat all community members with kindness and respect, regardless of differences.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Quality</h3>
                <p className="text-text-secondary">
                  Maintain high standards in your work and provide honest, accurate descriptions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-status-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-status-success" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Sustainability</h3>
                <p className="text-text-secondary">
                  Embrace eco-friendly practices and support sustainable crafting methods.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mb-16">
          <div className="card-base bg-gradient-brand">
            <h2 className="text-3xl font-bold text-text-inverse text-center mb-8">
              Need Help or Have Concerns?
            </h2>
            <p className="text-xl text-text-inverse/90 text-center mb-8 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or issues you may have.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-text-inverse/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-text-inverse" />
                </div>
                <h3 className="text-xl font-semibold text-text-inverse mb-2">Live Chat</h3>
                <p className="text-text-inverse/90 mb-4">Get instant help from our support team</p>
                <button className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90">
                  Start Chat
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-text-inverse/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-text-inverse" />
                </div>
                <h3 className="text-xl font-semibold text-text-inverse mb-2">Email Support</h3>
                <p className="text-text-inverse/90 mb-4">Send us a detailed message</p>
                <button className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90">
                  Send Email
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-text-inverse/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-text-inverse" />
                </div>
                <h3 className="text-xl font-semibold text-text-inverse mb-2">Phone Support</h3>
                <p className="text-text-inverse/90 mb-4">Call us for urgent matters</p>
                <button className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="text-center">
          <div className="card-base">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Legal Information</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/policies/terms" className="text-brand-primary hover:underline">
                Terms of Service
              </Link>
              <Link href="/policies/privacy" className="text-brand-primary hover:underline">
                Privacy Policy
              </Link>
              <Link href="/policies/refund" className="text-brand-primary hover:underline">
                Refund Policy
              </Link>
              <Link href="/policies/shipping" className="text-brand-primary hover:underline">
                Shipping Policy
              </Link>
              <Link href="/policies/seller" className="text-brand-primary hover:underline">
                Seller Agreement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
