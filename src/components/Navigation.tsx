'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ShoppingCart, User, Heart, Palette, Users, Leaf, Shield } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Explore', href: '/explore', icon: Search },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Sustainability', href: '/sustainability', icon: Leaf },
    { name: 'Trust & Safety', href: '/trust-and-safety', icon: Shield },
  ];

  const categories = [
    { name: 'Jewelry & Accessories', href: '/category/jewelry-accessories' },
    { name: 'Home & Living', href: '/category/home-living' },
    { name: 'Art & Prints', href: '/category/art-prints' },
    { name: 'Clothing & Fashion', href: '/category/clothing-fashion' },
    { name: 'Craft Supplies', href: '/category/craft-supplies' },
    { name: 'Digital Products', href: '/category/digital-products' },
    { name: 'Workshops & Events', href: '/category/workshops-events' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-surface-primary/95 backdrop-blur-sm border-b border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-text-inverse" />
              </div>
              <span className="text-xl font-bold text-text-primary">Boppel</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-brand-primary bg-brand-primary/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-brand-primary text-text-inverse text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <Link
              href="/auth/sign-in"
              className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover"
            >
              Sign In
            </Link>
            <Link
              href="/auth/sign-up"
              className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface-primary border-t border-border-primary">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-brand-primary bg-brand-primary/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-border-primary">
                <Link
                  href="/auth/sign-in"
                  className="block w-full btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="block w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mega Menu for Categories */}
      {isMegaMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface-elevated border-b border-border-primary shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group p-4 rounded-lg hover:bg-surface-secondary transition-colors"
                >
                  <h3 className="font-medium text-text-primary group-hover:text-brand-primary transition-colors">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
