'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Error Illustration */}
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-status-error/10 to-status-warning/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-16 h-16 text-status-error" />
            </div>
          </div>
          
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Something went wrong!
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            We're sorry, but something unexpected happened. Our team has been notified 
            and we're working to fix the issue.
          </p>
          
          {/* Error Details (Development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="card-base max-w-2xl mx-auto mb-8 text-left">
              <div className="flex items-center mb-4">
                <Bug className="w-5 h-5 text-status-error mr-2" />
                <h3 className="font-semibold text-text-primary">Error Details (Development)</h3>
              </div>
              <pre className="text-sm text-text-secondary bg-surface-secondary p-4 rounded-lg overflow-auto">
                {error.message}
                {error.digest && (
                  <>
                    {'\n\nDigest: '}
                    {error.digest}
                  </>
                )}
              </pre>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={reset}
              className="btn-elegant text-lg px-8 py-4"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </button>
            <Link
              href="/"
              className="btn-secondary text-lg px-8 py-4"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </div>
          
          {/* Help Section */}
          <div className="card-sophisticated max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              What can you do?
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-brand-primary">1</span>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Try refreshing the page</p>
                  <p className="text-sm text-text-secondary">Sometimes a simple refresh can resolve the issue</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-brand-primary">2</span>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Check your internet connection</p>
                  <p className="text-sm text-text-secondary">Make sure you have a stable internet connection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-brand-primary">3</span>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Contact support if the problem persists</p>
                  <p className="text-sm text-text-secondary">
                    <Link href="/contact" className="text-brand-primary hover:underline">
                      Get in touch with our support team
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
