'use client';

import { Suspense, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart, Share2, ShoppingCart, Plus, Minus, Truck, Shield, RotateCcw, MessageCircle, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock product data
const mockProduct = {
  id: '1',
  title: 'Handcrafted Silver Ring with Celtic Knot Design',
  description: 'Beautiful sterling silver ring featuring an intricate Celtic knot design. This stunning piece is handcrafted by skilled artisans using traditional techniques passed down through generations. The ring is made from 925 sterling silver and features a unique Celtic knot pattern that symbolizes eternity and interconnectedness.',
  price: 89,
  originalPrice: 120,
  images: [
    '/placeholder-ring-1.jpg',
    '/placeholder-ring-2.jpg',
    '/placeholder-ring-3.jpg',
    '/placeholder-ring-4.jpg',
  ],
  category: 'Jewelry & Accessories',
  rating: 4.9,
  reviewCount: 128,
  seller: {
    id: 'seller-1',
    name: 'Sarah\'s Jewelry Studio',
    avatar: '/placeholder-avatar.jpg',
    rating: 4.8,
    reviewCount: 342,
    location: 'Edinburgh, Scotland',
    verified: true,
  },
  isActive: true,
  stock_quantity: 5,
  product_type: 'physical' as const,
  specifications: {
    material: '925 Sterling Silver',
    size: 'Adjustable (US 6-9)',
    weight: '8.5g',
    finish: 'Polished',
    care: 'Store in dry place, clean with silver polish',
  },
  shipping: {
    free: true,
    estimated: '3-5 business days',
    locations: 'UK, EU, US, Canada',
  },
  returnPolicy: '30-day return policy',
  tags: ['handcrafted', 'celtic', 'silver', 'jewelry', 'unique'],
};

const relatedProducts = [
  {
    id: '2',
    title: 'Matching Celtic Earrings',
    price: 65,
    image: '/placeholder-earrings.jpg',
    rating: 4.7,
  },
  {
    id: '3',
    title: 'Celtic Knot Bracelet',
    price: 75,
    image: '/placeholder-bracelet.jpg',
    rating: 4.8,
  },
  {
    id: '4',
    title: 'Silver Pendant Necklace',
    price: 95,
    image: '/placeholder-necklace.jpg',
    rating: 4.9,
  },
];

const reviews = [
  {
    id: '1',
    user: 'Emma W.',
    rating: 5,
    date: '2 days ago',
    comment: 'Absolutely beautiful ring! The craftsmanship is incredible and it arrived much faster than expected. Sarah was very responsive to my questions.',
    verified: true,
  },
  {
    id: '2',
    user: 'James M.',
    rating: 5,
    date: '1 week ago',
    comment: 'Perfect gift for my wife. The Celtic design is stunning and the quality is excellent. Highly recommend this seller!',
    verified: true,
  },
  {
    id: '3',
    user: 'Sophie K.',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Lovely ring, very well made. The sizing was perfect and it looks exactly like the photos. Will definitely order again.',
    verified: false,
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('US 7');

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-8">
          <Link href="/explore" className="hover:text-text-primary">Products</Link>
          <span>/</span>
          <Link href={`/category/${mockProduct.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-text-primary">
            {mockProduct.category}
          </Link>
          <span>/</span>
          <span className="text-text-primary">{mockProduct.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-surface-secondary rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 text-text-tertiary">
                  <ShoppingCart className="w-full h-full" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-surface-secondary rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-brand-primary' : ''
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-text-tertiary" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-2">{mockProduct.title}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-brand-accent fill-current" />
                  <span className="font-semibold text-text-primary">{mockProduct.rating}</span>
                  <span className="text-text-secondary">({mockProduct.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-text-secondary hover:text-status-error hover:bg-surface-secondary rounded-lg">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-text-primary">£{mockProduct.price}</span>
              {mockProduct.originalPrice && (
                <>
                  <span className="text-xl text-text-tertiary line-through">£{mockProduct.originalPrice}</span>
                  <span className="bg-status-success text-text-inverse px-2 py-1 rounded-full text-sm font-medium">
                    Save £{mockProduct.originalPrice - mockProduct.price}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed">{mockProduct.description}</p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Size</label>
              <div className="flex space-x-2">
                {['US 6', 'US 7', 'US 8', 'US 9'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-brand-primary bg-brand-primary/10 text-brand-primary'
                        : 'border-border-primary text-text-secondary hover:border-border-accent'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Quantity</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-border-primary rounded-lg hover:bg-surface-secondary"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(mockProduct.stock_quantity || 10, quantity + 1))}
                  className="p-2 border border-border-primary rounded-lg hover:bg-surface-secondary"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <button className="w-full btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover text-lg py-4">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - £{(mockProduct.price * quantity).toFixed(2)}
              </button>
              <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-lg py-4">
                Buy Now
              </button>
            </div>

            {/* Shipping & Returns */}
            <div className="space-y-3 pt-6 border-t border-border-primary">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Truck className="w-4 h-4" />
                <span>Free shipping on orders over £50</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Shield className="w-4 h-4" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <RotateCcw className="w-4 h-4" />
                <span>Handcrafted with care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-border-primary">
            <nav className="flex space-x-8">
              {['Description', 'Specifications', 'Reviews', 'Shipping'].map((tab) => (
                <button
                  key={tab}
                  className="py-4 px-1 border-b-2 border-transparent text-text-secondary hover:text-text-primary hover:border-border-accent font-medium"
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {/* Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(mockProduct.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-border-secondary">
                  <span className="font-medium text-text-primary capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-text-secondary">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8">Customer Reviews</h3>
          
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="card-base">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-surface-secondary rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-text-primary">
                        {review.user.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-text-primary">{review.user}</span>
                        {review.verified && (
                          <span className="bg-status-success text-text-inverse px-2 py-1 rounded-full text-xs">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-brand-accent fill-current' : 'text-text-tertiary'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-text-secondary ml-2">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8">Related Products</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="card-base group hover:shadow-elevated transition-all duration-300">
                <div className="aspect-square bg-surface-secondary rounded-lg mb-4 flex items-center justify-center">
                  <ShoppingCart className="w-16 h-16 text-text-tertiary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                  {product.title}
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-brand-accent fill-current" />
                    <span className="text-sm text-text-secondary">{product.rating}</span>
                  </div>
                  <span className="font-semibold text-text-primary">£{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
