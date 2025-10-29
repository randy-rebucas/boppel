'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Settings,
  LogOut,
  ChevronRight,
  Home,
  Users,
  Palette,
  HelpCircle,
  Star
} from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationSections = [
  {
    title: 'Shop',
    items: [
      { name: 'Explore All', href: '/explore', icon: Search },
      { name: 'New Arrivals', href: '/explore?filter=new', icon: Star },
      { name: 'Handmade Items', href: '/explore?filter=handmade', icon: Palette },
      { name: 'Custom Orders', href: '/explore?filter=custom', icon: Settings },
    ]
  },
  {
    title: 'Community',
    items: [
      { name: 'Artisans', href: '/community/creators', icon: Users },
      { name: 'Maker Directory', href: '/maker-directory', icon: User },
      { name: 'Messages', href: '/messages', icon: Heart },
    ]
  },
  {
    title: 'Sell',
    items: [
      { name: 'Start Selling', href: '/auth/get-started', icon: Palette },
      { name: 'Seller Dashboard', href: '/seller/dashboard', icon: Settings },
      { name: 'Add Product', href: '/seller/add-product', icon: Plus },
    ]
  },
  {
    title: 'Learn',
    items: [
      { name: 'How It Works', href: '/how-it-works', icon: HelpCircle },
      { name: 'Trust & Safety', href: '/trust-and-safety', icon: Shield },
      { name: 'Sustainability', href: '/sustainability', icon: Leaf },
    ]
  }
];

const quickActions = [
  { name: 'Search', href: '/search', icon: Search },
  { name: 'Wishlist', href: '/wishlist', icon: Heart },
  { name: 'Cart', href: '/cart', icon: ShoppingCart },
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background-overlay backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Navigation Panel */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background-primary shadow-elevated border-l border-border-primary">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border-primary">
          <h2 className="text-lg font-semibold text-text-primary">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-text-tertiary hover:text-text-primary hover:bg-surface-secondary rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-b border-border-primary">
          <div className="flex space-x-2">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className="flex-1 flex items-center justify-center space-x-2 p-3 bg-surface-secondary rounded-lg hover:bg-surface-tertiary transition-colors"
                onClick={onClose}
              >
                <action.icon className="w-4 h-4 text-text-secondary" />
                <span className="text-sm font-medium text-text-primary">{action.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto">
          {navigationSections.map((section) => (
            <div key={section.title} className="border-b border-border-secondary last:border-b-0">
              <button
                onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-secondary transition-colors"
              >
                <span className="font-medium text-text-primary">{section.title}</span>
                <ChevronRight
                  className={`w-4 h-4 text-text-tertiary transition-transform ${
                    activeSection === section.title ? 'rotate-90' : ''
                  }`}
                />
              </button>
              
              {activeSection === section.title && (
                <div className="bg-surface-secondary/50">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-surface-secondary transition-colors ${
                        isActive(item.href) ? 'bg-brand-primary/10 text-brand-primary' : 'text-text-secondary'
                      }`}
                      onClick={onClose}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* User Section */}
        <div className="p-4 border-t border-border-primary">
          <div className="space-y-2">
            <Link
              href="/profile"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-secondary transition-colors"
              onClick={onClose}
            >
              <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-brand-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">My Account</p>
                <p className="text-xs text-text-tertiary">View profile & settings</p>
              </div>
            </Link>
            
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-secondary transition-colors text-left">
              <LogOut className="w-4 h-4 text-text-tertiary" />
              <span className="text-sm text-text-secondary">Sign Out</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border-primary">
          <div className="text-center">
            <p className="text-xs text-text-tertiary mb-2">
              &copy; 2025 Boppel Atelier
            </p>
            <div className="flex justify-center space-x-4 text-xs">
              <Link href="/about" className="text-text-tertiary hover:text-text-primary">
                About
              </Link>
              <Link href="/contact" className="text-text-tertiary hover:text-text-primary">
                Contact
              </Link>
              <Link href="/policies" className="text-text-tertiary hover:text-text-primary">
                Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
