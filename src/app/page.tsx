import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, ShoppingCart, Tag, Link as LinkIcon, Shield, Star, Sparkles, CheckCircle, Circle } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      {/* Hero Section - BOPPEL ATELIER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
        {/* Elegant gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-5xl">
            <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-6 font-body">
              BOPPEL ATELIER
            </h2>
            <h1 className="text-display-2xl text-text-primary mb-8 leading-tight">
              Where Craftsmanship Meets Elegance
            </h1>
            <p className="text-body-lg text-text-secondary mb-10 max-w-3xl leading-relaxed">
              A sophisticated marketplace celebrating authentic artisans and their exceptional creations. 
              No commissions, no copycats—just genuine makers and their masterpieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/auth/get-started"
                className="btn-elegant text-lg"
              >
                Join as Artisan
              </Link>
              <Link
                href="/explore"
                className="btn-secondary text-lg"
              >
                Discover Handcrafted Treasures
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Boppel Atelier Section */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              Why Choose Boppel Atelier
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Experience the difference of a marketplace built for discerning collectors and passionate artisans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="card-sophisticated text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Tag className="w-10 h-10 text-brand-primary" />
              </div>
              <h3 className="text-display-sm text-text-primary mb-6">Authentic Artisans Only</h3>
              <p className="text-body-md text-text-secondary leading-relaxed">
                Every creator is carefully vetted and verified. No mass-produced items or copycats—just genuine artisans crafting exceptional pieces with passion and skill.
              </p>
            </div>

            <div className="card-sophisticated text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <LinkIcon className="w-10 h-10 text-brand-secondary" />
              </div>
              <h3 className="text-display-sm text-text-primary mb-6">Direct from the Maker</h3>
              <p className="text-body-md text-text-secondary leading-relaxed">
                Connect directly with the artisans who create your treasures. No middlemen, no hidden markups—your purchase directly supports the artist's craft.
              </p>
            </div>

            <div className="card-sophisticated text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-accent/10 to-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-brand-accent" />
              </div>
              <h3 className="text-display-sm text-text-primary mb-6">Excellence Guaranteed</h3>
              <p className="text-body-md text-text-secondary leading-relaxed">
                Every piece is crafted with meticulous attention to detail and uncompromising quality standards. We stand behind the excellence of every creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built by Artisans Section */}
      <section className="py-24 bg-gradient-to-b from-background-secondary to-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              Built by Artisans, for Artisans
            </h2>
            <p className="text-body-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
              We understand the passion and dedication that goes into creating exceptional work. That's why we built Boppel Atelier to celebrate and support the artisanal community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-display-lg text-text-primary mb-8">Keep What You Create</h3>
              <p className="text-body-md text-text-secondary mb-8 leading-relaxed">
                On Boppel Atelier, you keep 100% of your earnings. No hidden fees, no surprise charges. What you create with your hands and heart, you keep. It's that simple.
              </p>
              <p className="text-body-md text-text-secondary mb-8 leading-relaxed">
                We believe in fair compensation for artisans and fair prices for collectors. Our platform is designed to support sustainable creative businesses and preserve traditional craftsmanship.
              </p>
              <div className="card-base bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 border-brand-primary/20 mb-10">
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  A typical sale on other platforms can lose between 10-20% in fees. On Boppel Atelier, that difference stays with you, supporting your craft and passion.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/platform/keep-more"
                  className="btn-elegant"
                >
                  Discover Our Philosophy
                </Link>
                <Link
                  href="/auth/get-started"
                  className="btn-secondary"
                >
                  Join the Atelier
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-soft">
                <Heart className="w-20 h-20 text-brand-primary" />
              </div>
              <p className="text-display-sm text-text-primary font-medium">Where passion meets purpose</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Boppel Works Section */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              How Boppel Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Create or Discover</h3>
              <p className="text-text-secondary leading-relaxed">
                Whether you're a creator looking to sell or a buyer seeking unique items, Boppel connects you with authentic handmade and digital creations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Quality Verified</h3>
              <p className="text-text-secondary leading-relaxed">
                Every creator and product is carefully vetted to ensure authenticity and quality. We maintain high standards for our community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Support Creators</h3>
              <p className="text-text-secondary leading-relaxed">
                When you buy on Boppel, you're directly supporting the artist. No middlemen, no hidden fees - just fair compensation for creators.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/platform/keep-more"
                className="btn-primary"
              >
                See How It Works
              </Link>
              <Link
                href="/community"
                className="btn-secondary"
              >
                Join the Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artisans Section */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-6 font-body">
              ARTISAN COLLECTIVE
            </h3>
            <h2 className="text-display-xl text-text-primary mb-6">
              Featured Artisans
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Discover exceptional craftspeople who bring artistry, intention, and mastery to every creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="card-sophisticated group hover:shadow-elevated transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-28 h-28 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full flex items-center justify-center">
                  <Circle className="w-14 h-14 text-brand-primary" />
                </div>
              </div>
              <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 font-body">
                CERAMICS & POTTERY
              </div>
              <h3 className="text-display-sm text-text-primary mb-4">Elena Stone</h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                Hand-thrown ceramics inspired by nature's organic forms, each piece a unique testament to traditional pottery techniques and contemporary design.
              </p>
            </div>

            <div className="card-sophisticated group hover:shadow-elevated transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-brand-secondary/10 via-brand-accent/10 to-brand-primary/10 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-28 h-28 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 rounded-full flex items-center justify-center">
                  <Circle className="w-14 h-14 text-brand-secondary" />
                </div>
              </div>
              <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 font-body">
                TEXTILES & WEAVING
              </div>
              <h3 className="text-display-sm text-text-primary mb-4">Maria Rodriguez</h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                Sustainable woven textiles using traditional techniques and eco-friendly materials, creating pieces that honor heritage while embracing modern sensibilities.
              </p>
            </div>

            <div className="card-sophisticated group hover:shadow-elevated transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-brand-accent/10 via-brand-primary/10 to-brand-secondary/10 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-28 h-28 bg-gradient-to-br from-brand-accent/20 to-brand-secondary/20 rounded-full flex items-center justify-center">
                  <Circle className="w-14 h-14 text-brand-accent" />
                </div>
              </div>
              <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 font-body">
                LEATHER CRAFT
              </div>
              <h3 className="text-display-sm text-text-primary mb-4">James Chen</h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                Handcrafted leather goods with meticulous attention to detail and timeless design principles, creating heirloom-quality pieces for the discerning collector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-b from-background-secondary to-background-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-sophisticated bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 border-brand-primary/20">
            <blockquote className="text-display-md text-text-primary italic leading-relaxed mb-8 font-display">
              "Boppel Atelier has transformed how I share my craft with the world. No more commission fees eating into my passion, and I love being part of a community that truly values authenticity and artistry."
            </blockquote>
            <p className="text-display-sm text-text-primary font-medium">— Sarah, Master Ceramicist</p>
          </div>
        </div>
      </section>

      {/* Closing Statement Section */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-sophisticated">
            <p className="text-display-sm text-text-primary leading-relaxed font-display">
              Where craftsmanship meets elegance. Where tradition meets innovation. Where every creation tells a story.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-primary border-t border-border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-text-primary mb-6 uppercase tracking-wider">BOPPEL</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-text-secondary hover:text-text-primary">Home</Link></li>
                <li><Link href="/platform/keep-more" className="text-text-secondary hover:text-text-primary">How It Works</Link></li>
                <li><Link href="/about" className="text-text-secondary hover:text-text-primary">About Boppel</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-primary mb-6 uppercase tracking-wider">EXPLORE</h3>
              <ul className="space-y-3">
                <li><Link href="/explore" className="text-text-secondary hover:text-text-primary">All Products</Link></li>
                <li><Link href="/community/creators" className="text-text-secondary hover:text-text-primary">Creators</Link></li>
                <li><Link href="/explore" className="text-text-secondary hover:text-text-primary">New In</Link></li>
                <li><Link href="/explore" className="text-text-secondary hover:text-text-primary">Fully Handmade</Link></li>
                <li><Link href="/explore" className="text-text-secondary hover:text-text-primary">Personalised & Custom</Link></li>
                <li><Link href="/explore" className="text-text-secondary hover:text-text-primary">Prints & Reproductions</Link></li>
                <li><Link href="/explore" className="text-text-secondary hover:text-text-primary">Digital Downloads</Link></li>
                <li><Link href="/explore" className="text-text-secondary hover:text-text-primary">Vintage & Curated</Link></li>
                <li><Link href="/explore" className="text-text-secondary hover:text-text-primary">Gifts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-primary mb-6 uppercase tracking-wider">FOR CREATORS & BUYERS</h3>
              <ul className="space-y-3">
                <li><Link href="/auth/get-started" className="text-text-secondary hover:text-text-primary">Start Selling</Link></li>
                <li><Link href="/seller/dashboard" className="text-text-secondary hover:text-text-primary">Creator Dashboard</Link></li>
                <li><Link href="/community" className="text-text-secondary hover:text-text-primary">Community</Link></li>
                <li><Link href="/shop/cart" className="text-text-secondary hover:text-text-primary">Shopping Cart</Link></li>
                <li><Link href="/shop/checkout" className="text-text-secondary hover:text-text-primary">Checkout</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-primary mb-6 uppercase tracking-wider">TRUST & TRANSPARENCY</h3>
              <ul className="space-y-3">
                <li><Link href="/trust-and-safety" className="text-text-secondary hover:text-text-primary">Trust & Safety</Link></li>
                <li><Link href="/policies" className="text-text-secondary hover:text-text-primary">Policies</Link></li>
                <li><Link href="/sustainability" className="text-text-secondary hover:text-text-primary">Sustainability</Link></li>
                <li><Link href="/contact" className="text-text-secondary hover:text-text-primary">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border-primary mt-12 pt-8 text-center">
            <p className="text-text-tertiary text-sm mb-2">&copy; Boppel 2025 – Built with love for creative lives.</p>
            <p className="text-text-tertiary text-sm">Boppel is an early-stage creative marketplace built on fairness, authenticity, and community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

