'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ShoppingCart, Heart, ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileNav from './MobileNav';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  const primaryNavigation = [
    { name: 'Explore', href: '/explore', hasMegaMenu: true },
    { name: 'Makers', href: '/community/creators' },
    { name: 'Sell', href: '/auth/get-started' },
    { name: 'About', href: '/about' },
    { name: 'Help', href: '/help' },
  ];

  const secondaryNavigation = [
    { name: 'Creators', href: '/community/creators' },
    { name: 'New In', href: '/explore?filter=new' },
    { name: 'Fully Handmade', href: '/explore?filter=handmade' },
    { name: 'Personalised & Custom', href: '/explore?filter=custom' },
    { name: 'Prints & Reproductions', href: '/explore?filter=prints' },
    { name: 'Digital Downloads', href: '/explore?filter=digital' },
    { name: 'Vintage & Curated', href: '/explore?filter=vintage' },
    { name: 'Gifts', href: '/explore?filter=gifts' },
  ];

  const filterOptions = {
    byRecipient: [
      { name: 'For Her', href: '/explore?recipient=her' },
      { name: 'For Him', href: '/explore?recipient=him' },
      { name: 'For Kids', href: '/explore?recipient=kids' },
      { name: 'For Home', href: '/explore?recipient=home' },
    ],
    byOccasion: [
      { name: 'Birthday', href: '/explore?occasion=birthday' },
      { name: 'Wedding', href: '/explore?occasion=wedding' },
      { name: 'Anniversary', href: '/explore?occasion=anniversary' },
      { name: 'By Price', href: '/explore?sort=price' },
    ],
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-background-primary/95 backdrop-blur-md border-b border-border-primary shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-text-primary font-display hover:text-brand-primary transition-colors duration-300">
              BOPPEL ATELIER
            </Link>
          </div>

          {/* Primary Navigation - Centered */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {primaryNavigation.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`text-base font-medium transition-all duration-300 font-body flex items-center ${
                    isActive(item.href)
                      ? 'text-brand-primary border-b-2 border-brand-primary pb-1'
                      : 'text-text-primary hover:text-brand-primary hover:border-b-2 hover:border-brand-primary/50 pb-1'
                  }`}
                  onMouseEnter={() => item.hasMegaMenu && setIsMegaMenuOpen(true)}
                  onMouseLeave={() => item.hasMegaMenu && setIsMegaMenuOpen(false)}
                >
                  {item.name}
                  {item.hasMegaMenu && (
                    <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </Link>
                {item.hasMegaMenu && (
                  <MegaMenu 
                    isOpen={isMegaMenuOpen} 
                    onClose={() => setIsMegaMenuOpen(false)} 
                  />
                )}
              </div>
            ))}
          </div>

          {/* Utility Icons - Right side */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <button className="p-3 text-text-primary hover:text-brand-primary transition-all duration-300 hover:bg-brand-primary/10 rounded-xl">
              <Search className="w-6 h-6" />
            </button>
            <button className="p-3 text-text-primary hover:text-brand-primary transition-all duration-300 hover:bg-brand-primary/10 rounded-xl">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-3 text-text-primary hover:text-brand-primary transition-all duration-400 hover:bg-brand-primary/10 rounded-xl relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-brand-primary text-text-inverse text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-text-primary hover:text-brand-primary transition-all duration-400 hover:bg-brand-primary/10 rounded-xl"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation - Categories */}
        <div className="hidden lg:block border-t border-border-primary bg-gradient-to-r from-background-primary to-background-secondary">
          <div className="flex items-center justify-center space-x-10 py-6">
            {secondaryNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-text-primary hover:text-brand-primary transition-all duration-300 font-body hover:border-b hover:border-brand-primary/50 pb-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Filter Options */}
        <div className="hidden lg:block border-t border-border-primary bg-gradient-to-r from-background-secondary to-background-primary">
          <div className="flex items-center justify-center space-x-16 py-4">
            <div className="flex items-center space-x-8">
              <span className="text-sm text-text-tertiary font-medium font-body uppercase tracking-wider">BY RECIPIENT:</span>
              {filterOptions.byRecipient.map((option) => (
                <Link
                  key={option.name}
                  href={option.href}
                  className="text-sm text-text-tertiary hover:text-text-primary transition-all duration-300 font-body hover:border-b hover:border-brand-primary/50 pb-1"
                >
                  {option.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-8">
              <span className="text-sm text-text-tertiary font-medium font-body uppercase tracking-wider">BY OCCASION:</span>
              {filterOptions.byOccasion.map((option) => (
                <Link
                  key={option.name}
                  href={option.href}
                  className="text-sm text-text-tertiary hover:text-text-primary transition-all duration-300 font-body hover:border-b hover:border-brand-primary/50 pb-1"
                >
                  {option.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </nav>
  );
}
