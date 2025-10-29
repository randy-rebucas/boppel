import Link from 'next/link';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-brand-primary/20 mb-4">404</div>
            <div className="w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-16 h-16 text-brand-primary" />
            </div>
          </div>
          
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Page Not Found
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, 
            deleted, or you might have entered the wrong URL.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="btn-elegant text-lg px-8 py-4"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary text-lg px-8 py-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
          
          {/* Help Section */}
          <div className="card-sophisticated max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6 text-brand-primary mr-2" />
              <h3 className="text-lg font-semibold text-text-primary">Need Help?</h3>
            </div>
            <p className="text-text-secondary mb-6">
              If you're looking for something specific, try these popular pages:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/explore"
                className="p-4 border border-border-primary rounded-lg hover:bg-surface-secondary transition-colors text-left"
              >
                <h4 className="font-medium text-text-primary mb-1">Browse Products</h4>
                <p className="text-sm text-text-secondary">Discover unique handcrafted items</p>
              </Link>
              <Link
                href="/community/creators"
                className="p-4 border border-border-primary rounded-lg hover:bg-surface-secondary transition-colors text-left"
              >
                <h4 className="font-medium text-text-primary mb-1">Meet Artisans</h4>
                <p className="text-sm text-text-secondary">Connect with talented creators</p>
              </Link>
              <Link
                href="/how-it-works"
                className="p-4 border border-border-primary rounded-lg hover:bg-surface-secondary transition-colors text-left"
              >
                <h4 className="font-medium text-text-primary mb-1">How It Works</h4>
                <p className="text-sm text-text-secondary">Learn about our platform</p>
              </Link>
              <Link
                href="/contact"
                className="p-4 border border-border-primary rounded-lg hover:bg-surface-secondary transition-colors text-left"
              >
                <h4 className="font-medium text-text-primary mb-1">Contact Us</h4>
                <p className="text-sm text-text-secondary">Get in touch with our team</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
