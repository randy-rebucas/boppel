'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Heart, ShoppingCart } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  {
    title: 'Jewelry & Accessories',
    href: '/explore?category=jewelry',
    items: [
      { name: 'Rings', href: '/explore?category=rings' },
      { name: 'Necklaces', href: '/explore?category=necklaces' },
      { name: 'Earrings', href: '/explore?category=earrings' },
      { name: 'Bracelets', href: '/explore?category=bracelets' },
      { name: 'Watches', href: '/explore?category=watches' },
    ]
  },
  {
    title: 'Home & Living',
    href: '/explore?category=home',
    items: [
      { name: 'Ceramics & Pottery', href: '/explore?category=ceramics' },
      { name: 'Textiles & Linens', href: '/explore?category=textiles' },
      { name: 'Wooden Items', href: '/explore?category=wooden' },
      { name: 'Candles & Fragrances', href: '/explore?category=candles' },
      { name: 'Wall Art', href: '/explore?category=wall-art' },
    ]
  },
  {
    title: 'Art & Prints',
    href: '/explore?category=art',
    items: [
      { name: 'Original Artwork', href: '/explore?category=original-art' },
      { name: 'Prints & Reproductions', href: '/explore?category=prints' },
      { name: 'Digital Downloads', href: '/explore?category=digital' },
      { name: 'Photography', href: '/explore?category=photography' },
      { name: 'Illustrations', href: '/explore?category=illustrations' },
    ]
  },
  {
    title: 'Clothing & Fashion',
    href: '/explore?category=clothing',
    items: [
      { name: 'Handmade Clothing', href: '/explore?category=clothing-handmade' },
      { name: 'Accessories', href: '/explore?category=fashion-accessories' },
      { name: 'Bags & Purses', href: '/explore?category=bags' },
      { name: 'Shoes', href: '/explore?category=shoes' },
      { name: 'Hats & Headwear', href: '/explore?category=hats' },
    ]
  },
  {
    title: 'Health & Beauty',
    href: '/explore?category=beauty',
    items: [
      { name: 'Skincare', href: '/explore?category=skincare' },
      { name: 'Soaps & Bath', href: '/explore?category=soaps' },
      { name: 'Cosmetics', href: '/explore?category=cosmetics' },
      { name: 'Hair Care', href: '/explore?category=hair-care' },
      { name: 'Aromatherapy', href: '/explore?category=aromatherapy' },
    ]
  },
  {
    title: 'Craft Supplies',
    href: '/explore?category=supplies',
    items: [
      { name: 'Fabric & Textiles', href: '/explore?category=fabric' },
      { name: 'Beads & Findings', href: '/explore?category=beads' },
      { name: 'Tools & Equipment', href: '/explore?category=tools' },
      { name: 'Yarn & Fiber', href: '/explore?category=yarn' },
      { name: 'Paper & Stationery', href: '/explore?category=paper' },
    ]
  }
];

const featuredArtisans = [
  {
    name: 'Sarah Chen',
    specialty: 'Ceramic Artist',
    image: '/placeholder-artisan-1.jpg',
    href: '/artisan/sarah-chen',
    rating: 4.9,
    products: 45
  },
  {
    name: 'Marcus Rodriguez',
    specialty: 'Leather Craftsman',
    image: '/placeholder-artisan-2.jpg',
    href: '/artisan/marcus-rodriguez',
    rating: 4.8,
    products: 32
  },
  {
    name: 'Elena Kowalski',
    specialty: 'Textile Designer',
    image: '/placeholder-artisan-3.jpg',
    href: '/artisan/elena-kowalski',
    rating: 4.7,
    products: 28
  }
];

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-background-primary border-t border-border-primary shadow-elevated z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <Link
                    href={category.href}
                    className="block text-lg font-semibold text-text-primary hover:text-brand-primary transition-colors"
                    onMouseEnter={() => setActiveCategory(category.title)}
                  >
                    {category.title}
                  </Link>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Artisans */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">Featured Artisans</h3>
            <div className="space-y-4">
              {featuredArtisans.map((artisan) => (
                <Link
                  key={artisan.name}
                  href={artisan.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-secondary transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-brand-primary">
                      {artisan.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-text-primary group-hover:text-brand-primary transition-colors">
                      {artisan.name}
                    </p>
                    <p className="text-sm text-text-secondary">{artisan.specialty}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-text-tertiary">{artisan.products} products</span>
                      <span className="text-xs text-text-tertiary">•</span>
                      <span className="text-xs text-text-tertiary">★ {artisan.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="pt-4 border-t border-border-secondary">
              <Link
                href="/community/creators"
                className="text-sm text-brand-primary hover:underline font-medium"
              >
                View all artisans →
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-border-secondary">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link
                href="/explore?filter=new"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                New Arrivals
              </Link>
              <Link
                href="/explore?filter=handmade"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Fully Handmade
              </Link>
              <Link
                href="/explore?filter=custom"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Personalized & Custom
              </Link>
              <Link
                href="/explore?filter=gifts"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Gift Ideas
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg transition-colors relative">
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 bg-brand-primary text-text-inverse text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
