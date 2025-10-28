import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Palette, Users, Leaf, Shield, Star, Heart, ShoppingBag, TrendingUp, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-background-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-inverse mb-6 text-balance">
              Where Artisans
              <span className="block text-brand-accent">Thrive & Create</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-inverse/90 mb-8 max-w-3xl mx-auto text-pretty">
              Discover unique handcrafted treasures, connect with talented creators, and build a sustainable creative business on the world's most comprehensive artisan marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/explore"
                className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90 text-lg px-8 py-4"
              >
                Explore Marketplace
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              More Than a Marketplace
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Boppel is a complete ecosystem for creative entrepreneurs, offering tools, community, and opportunities beyond traditional e-commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-base text-center group hover:shadow-elevated transition-all duration-300">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/20 transition-colors">
                <Palette className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Creative Tools</h3>
              <p className="text-text-secondary">
                Comprehensive business management tools designed specifically for artisans and creators.
              </p>
            </div>

            <div className="card-base text-center group hover:shadow-elevated transition-all duration-300">
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-secondary/20 transition-colors">
                <Users className="w-8 h-8 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Vibrant Community</h3>
              <p className="text-text-secondary">
                Connect with fellow creators, share knowledge, and collaborate on exciting projects.
              </p>
            </div>

            <div className="card-base text-center group hover:shadow-elevated transition-all duration-300">
              <div className="w-16 h-16 bg-status-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-status-success/20 transition-colors">
                <Leaf className="w-8 h-8 text-status-success" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Sustainability Focus</h3>
              <p className="text-text-secondary">
                Craft swaps, CO₂ tracking, and eco-friendly practices for conscious creators.
              </p>
            </div>

            <div className="card-base text-center group hover:shadow-elevated transition-all duration-300">
              <div className="w-16 h-16 bg-status-info/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-status-info/20 transition-colors">
                <Shield className="w-8 h-8 text-status-info" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Trust & Safety</h3>
              <p className="text-text-secondary">
                Verified sellers, purchase protection, and transparent craftsmanship verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">10K+</div>
              <div className="text-text-secondary">Active Creators</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">50K+</div>
              <div className="text-text-secondary">Unique Products</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">100K+</div>
              <div className="text-text-secondary">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">£2M+</div>
              <div className="text-text-secondary">Creator Earnings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Discover Amazing Creations
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From handcrafted jewelry to unique home decor, find something special that speaks to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card-base group hover:shadow-elevated transition-all duration-300">
                <div className="aspect-square bg-surface-secondary rounded-lg mb-4 flex items-center justify-center">
                  <Palette className="w-16 h-16 text-text-tertiary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Featured Product {item}</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Beautiful handcrafted item with attention to detail and sustainable materials.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-brand-accent fill-current" />
                    <span className="text-sm text-text-secondary">4.9 (128 reviews)</span>
                  </div>
                  <span className="font-semibold text-text-primary">£45</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/explore"
              className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover text-lg px-8 py-4"
            >
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Creator Success Stories */}
      <section className="py-24 bg-surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Creator Success Stories
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              See how Boppel has helped artisans build thriving businesses and connect with customers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-base">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">Sarah's Jewelry Studio</h3>
                  <p className="text-text-secondary">Handcrafted Silver Jewelry</p>
                </div>
              </div>
              <blockquote className="text-text-secondary italic mb-4">
                "Boppel gave me the tools to turn my passion into a thriving business. The community support and business insights have been invaluable."
              </blockquote>
              <div className="flex items-center text-sm text-text-tertiary">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span>300% increase in sales in 6 months</span>
              </div>
            </div>

            <div className="card-base">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-8 h-8 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">Mike's Woodcraft</h3>
                  <p className="text-text-secondary">Sustainable Wood Products</p>
                </div>
              </div>
              <blockquote className="text-text-secondary italic mb-4">
                "The sustainability features and craft swap program helped me reduce waste and connect with like-minded creators."
              </blockquote>
              <div className="flex items-center text-sm text-text-tertiary">
                <Leaf className="w-4 h-4 mr-2" />
                <span>50% reduction in material waste</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-inverse mb-6">
            Ready to Start Your Creative Journey?
          </h2>
          <p className="text-xl text-text-inverse/90 mb-8">
            Join thousands of creators who are building successful businesses on Boppel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/get-started"
              className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90 text-lg px-8 py-4"
            >
              Get Started Free
            </Link>
            <Link
              href="/explore"
              className="btn-base border-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-text-primary text-lg px-8 py-4"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-primary border-t border-border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-text-inverse" />
                </div>
                <span className="text-xl font-bold text-text-primary">Boppel</span>
              </div>
              <p className="text-text-secondary">
                The comprehensive platform for artisan creators and conscious consumers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-4">Marketplace</h3>
              <ul className="space-y-2">
                <li><Link href="/explore" className="text-text-secondary hover:text-text-primary">Explore Products</Link></li>
                <li><Link href="/community" className="text-text-secondary hover:text-text-primary">Community</Link></li>
                <li><Link href="/sustainability" className="text-text-secondary hover:text-text-primary">Sustainability</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-4">For Creators</h3>
              <ul className="space-y-2">
                <li><Link href="/auth/get-started" className="text-text-secondary hover:text-text-primary">Start Selling</Link></li>
                <li><Link href="/seller/dashboard" className="text-text-secondary hover:text-text-primary">Seller Hub</Link></li>
                <li><Link href="/platform/keep-more" className="text-text-secondary hover:text-text-primary">Keep More Program</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/trust-and-safety" className="text-text-secondary hover:text-text-primary">Trust & Safety</Link></li>
                <li><Link href="/policies" className="text-text-secondary hover:text-text-primary">Policies</Link></li>
                <li><Link href="/contact" className="text-text-secondary hover:text-text-primary">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border-primary mt-8 pt-8 text-center text-text-secondary">
            <p>&copy; 2024 Boppel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
