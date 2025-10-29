import Link from 'next/link';
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  CheckCircle, 
  Users, 
  Shield, 
  Star,
  ArrowRight,
  Palette,
  TrendingUp,
  MessageSquare,
  CreditCard
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const steps = [
  {
    step: 1,
    title: 'Discover & Explore',
    description: 'Browse our curated collection of authentic handcrafted items from verified artisans worldwide.',
    icon: Search,
    details: [
      'Search by category, style, or artisan',
      'Filter by price, location, or materials',
      'Read detailed product descriptions',
      'View high-quality photos and videos'
    ]
  },
  {
    step: 2,
    title: 'Connect with Artisans',
    description: 'Learn about the makers behind each piece and their creative process.',
    icon: Users,
    details: [
      'Read artisan profiles and stories',
      'View their workshop and process',
      'See customer reviews and ratings',
      'Message creators directly'
    ]
  },
  {
    step: 3,
    title: 'Make Your Purchase',
    description: 'Buy with confidence knowing every transaction supports the artist directly.',
    icon: ShoppingCart,
    details: [
      'Secure payment processing',
      'No hidden fees or commissions',
      'Direct support to artisans',
      'Purchase protection included'
    ]
  },
  {
    step: 4,
    title: 'Enjoy Your Purchase',
    description: 'Receive your handcrafted item and become part of the artisan community.',
    icon: Heart,
    details: [
      'Carefully packaged items',
      'Tracking and delivery updates',
      'Leave reviews and feedback',
      'Join the community discussions'
    ]
  }
];

const features = [
  {
    icon: Shield,
    title: 'Verified Artisans',
    description: 'Every creator is carefully vetted to ensure authenticity and quality standards.',
  },
  {
    icon: Star,
    title: 'No Commission Fees',
    description: 'Artisans keep 100% of their earnings. No hidden fees or surprise charges.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Communication',
    description: 'Connect directly with artisans to discuss custom work or ask questions.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Safe and secure payment processing with full purchase protection.',
  },
];

const benefits = [
  {
    title: 'For Buyers',
    icon: ShoppingCart,
    items: [
      'Discover unique, handcrafted items',
      'Support artisans directly',
      'Get custom and personalized pieces',
      'Join a community of like-minded collectors',
      'Enjoy purchase protection and guarantees'
    ]
  },
  {
    title: 'For Artisans',
    icon: Palette,
    items: [
      'Keep 100% of your earnings',
      'Access to business tools and analytics',
      'Connect with a global audience',
      'Join workshops and community events',
      'Build your brand and reputation'
    ]
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-display-2xl text-text-primary mb-8 leading-tight">
              How Boppel Works
            </h1>
            <p className="text-body-lg text-text-secondary mb-10 leading-relaxed">
              A simple, transparent process that connects authentic artisans with discerning collectors. 
              No middlemen, no hidden fees, just genuine craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/explore"
                className="btn-elegant text-lg px-8 py-4"
              >
                Start Exploring
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/auth/get-started"
                className="btn-secondary text-lg px-8 py-4"
              >
                Become an Artisan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              The Boppel Experience
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              From discovery to delivery, here's how our marketplace works for both buyers and artisans.
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.step} className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="card-sophisticated">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mr-6">
                        <step.icon className="w-8 h-8 text-brand-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-brand-primary uppercase tracking-wider mb-2">
                          Step {step.step}
                        </div>
                        <h3 className="text-display-lg text-text-primary">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-body-md text-text-secondary mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-status-success mr-3 flex-shrink-0" />
                          <span className="text-text-secondary">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <step.icon className="w-24 h-24 text-brand-primary mx-auto mb-4" />
                      <p className="text-text-secondary">Visual representation coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background-secondary to-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              What Makes Boppel Different
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              We've built Boppel specifically for the artisan community, with features that support both creators and collectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-sophisticated text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-display-sm text-text-primary mb-4">{feature.title}</h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              Benefits for Everyone
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Whether you're a collector looking for unique pieces or an artisan wanting to share your craft, Boppel has something for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-sophisticated">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mr-6">
                    <benefit.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-display-lg text-text-primary">{benefit.title}</h3>
                </div>
                <ul className="space-y-4">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-status-success mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-display-xl text-text-inverse mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-body-lg text-text-inverse/90 mb-10 max-w-2xl mx-auto">
            Join thousands of artisans and collectors who are already part of the Boppel community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/explore"
              className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90 text-lg px-8 py-4"
            >
              Start Shopping
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/auth/get-started"
              className="btn-base border-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-text-primary text-lg px-8 py-4"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-primary border-t border-border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4 font-display">
              BOPPEL ATELIER
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Where craftsmanship meets elegance. Where tradition meets innovation.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-text-tertiary">
              <Link href="/about" className="hover:text-text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">
                Contact
              </Link>
              <Link href="/policies" className="hover:text-text-primary transition-colors">
                Policies
              </Link>
            </div>
          </div>
          <div className="border-t border-border-primary mt-12 pt-8 text-center">
            <p className="text-text-tertiary text-sm">
              &copy; Boppel 2025 – Built with love for creative lives.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
