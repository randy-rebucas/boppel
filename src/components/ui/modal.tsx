'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-7xl',
};

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  showCloseButton = true,
  className,
}: ModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background-overlay backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        className={cn(
          'relative w-full bg-background-primary rounded-xl shadow-elevated border border-border-primary',
          sizeClasses[size],
          className
        )}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-border-primary">
            <div>
              {title && (
                <h2 className="text-xl font-semibold text-text-primary">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-sm text-text-secondary mt-1">
                  {description}
                </p>
              )}
            </div>
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-2 text-text-tertiary hover:text-text-primary hover:bg-surface-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

// Specialized Modal Components
export function UpgradeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Upgrade Your Plan"
      description="Unlock more features and grow your business"
      size="lg"
    >
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Ready to take your business to the next level?
          </h3>
          <p className="text-text-secondary">
            Upgrade to our Maker plan and unlock unlimited products, advanced analytics, and priority support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border-primary rounded-lg">
            <h4 className="font-semibold text-text-primary mb-2">Current Plan</h4>
            <p className="text-2xl font-bold text-text-primary mb-1">Free</p>
            <p className="text-sm text-text-secondary">Up to 10 products</p>
          </div>
          <div className="p-4 border-2 border-brand-primary rounded-lg bg-brand-primary/5">
            <h4 className="font-semibold text-text-primary mb-2">Maker Plan</h4>
            <p className="text-2xl font-bold text-brand-primary mb-1">£9.99<span className="text-sm font-normal">/month</span></p>
            <p className="text-sm text-text-secondary">Unlimited products + more</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover flex-1">
            Upgrade Now
          </button>
          <button
            onClick={onClose}
            className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary flex-1"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </Modal>
  );
}

export function SubscriptionBanner({ 
  isVisible, 
  onDismiss 
}: { 
  isVisible: boolean; 
  onDismiss: () => void; 
}) {
  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-text-inverse p-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-text-inverse/20 rounded-full flex items-center justify-center">
            <span className="text-sm">🎉</span>
          </div>
          <div>
            <p className="font-semibold">Special Offer: 50% off your first month!</p>
            <p className="text-sm opacity-90">Upgrade to Maker plan and save big.</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="btn-base bg-text-inverse text-brand-primary hover:bg-text-inverse/90 px-4 py-2 text-sm">
            Upgrade Now
          </button>
          <button
            onClick={onDismiss}
            className="p-2 hover:bg-text-inverse/10 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function SellerTipsPanel({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  const tips = [
    {
      title: "Optimize Your Product Photos",
      description: "Use natural lighting and multiple angles to showcase your products better.",
      icon: "📸"
    },
    {
      title: "Write Compelling Descriptions",
      description: "Tell the story behind your products and highlight what makes them unique.",
      icon: "✍️"
    },
    {
      title: "Set Competitive Prices",
      description: "Research similar products and price competitively while maintaining your margins.",
      icon: "💰"
    },
    {
      title: "Engage with Customers",
      description: "Respond to messages quickly and build relationships with your buyers.",
      icon: "💬"
    }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Seller Tips"
      description="Boost your sales with these proven strategies"
      size="lg"
    >
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 border border-border-primary rounded-lg">
            <div className="text-2xl">{tip.icon}</div>
            <div>
              <h4 className="font-semibold text-text-primary mb-1">{tip.title}</h4>
              <p className="text-sm text-text-secondary">{tip.description}</p>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-border-primary">
          <button
            onClick={onClose}
            className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover w-full"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </Modal>
  );
}
