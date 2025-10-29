import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';

const features = [
  {
    icon: Shield,
    title: 'No Commission Fees',
    description: 'Keep 100% of your earnings. No hidden fees or surprise charges.',
  },
  {
    icon: Users,
    title: 'Verified Artisans Only',
    description: 'Every creator is carefully vetted to ensure authenticity and quality.',
  },
  {
    icon: TrendingUp,
    title: 'Built for Growth',
    description: 'Tools and features designed specifically for creative businesses.',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Ceramic Artist',
    content: 'Boppel has transformed how I share my craft. The community and tools are incredible.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Leather Craftsman',
    content: 'Finally, a platform that truly supports artisans. The no-commission policy is a game-changer.',
    rating: 5,
  },
  {
    name: 'Elena Kowalski',
    role: 'Textile Designer',
    content: 'The quality of buyers and the support system here is unmatched.',
    rating: 5,
  },
];

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Join the Waitlist
            </div>
            
            <h1 className="text-display-2xl text-text-primary mb-8 leading-tight">
              The Future of Artisan Marketplaces
            </h1>
            
            <p className="text-body-lg text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
              Be among the first to experience Boppel Atelier - where authentic artisans 
              connect with discerning collectors. No commissions, no copycats, just genuine craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/auth/get-started"
                className="btn-elegant text-lg px-8 py-4"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/explore"
                className="btn-secondary text-lg px-8 py-4"
              >
                Explore Early Access
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-text-tertiary">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-status-success" />
                Free to join
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-status-success" />
                No commitment
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-status-success" />
                Early access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              Why Join Boppel Atelier?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Experience the difference of a marketplace built specifically for artisans and collectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="card-sophisticated text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-display-sm text-text-primary mb-6">{feature.title}</h3>
                <p className="text-body-md text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-background-secondary to-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              What Early Users Are Saying
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Join a community of passionate artisans who are already building their dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-sophisticated">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-text-secondary italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-tertiary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-display-xl text-text-inverse mb-6">
            Ready to Be Part of Something Special?
          </h2>
          <p className="text-body-lg text-text-inverse/90 mb-10 max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience the future of artisan marketplaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/auth/get-started"
              className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90 text-lg px-8 py-4"
            >
              Join the Waitlist Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/about"
              className="btn-base border-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-text-primary text-lg px-8 py-4"
            >
              Learn More About Boppel
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
              Where every creation tells a story.
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
