'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Heart, 
  ArrowLeft,
  ArrowRight,
  Shield,
  Truck,
  CreditCard,
  Tag
} from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock cart data
const mockCartItems = [
  {
    id: '1',
    product: {
      id: '1',
      title: 'Handcrafted Silver Ring with Celtic Knot Design',
      price: 89,
      image: '/placeholder-ring.jpg',
      seller: 'Sarah\'s Jewelry Studio',
      inStock: true,
    },
    quantity: 1,
    size: 'US 7',
  },
  {
    id: '2',
    product: {
      id: '2',
      title: 'Ceramic Coffee Mug Set',
      price: 45,
      image: '/placeholder-mug.jpg',
      seller: 'Pottery by Mike',
      inStock: true,
    },
    quantity: 2,
    size: 'Set of 2',
  },
  {
    id: '3',
    product: {
      id: '3',
      title: 'Wooden Cutting Board',
      price: 55,
      image: '/placeholder-board.jpg',
      seller: 'Sustainable Woodcraft',
      inStock: false,
    },
    quantity: 1,
    size: 'Large',
  },
];

const promoCode = 'WELCOME10';

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const moveToWishlist = (itemId: string) => {
    // Move item to wishlist logic
    removeItem(itemId);
  };

  const applyPromoCode = () => {
    if (promoCodeInput === promoCode) {
      setAppliedPromo(promoCode);
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const inStockItems = cartItems.filter(item => item.product.inStock);
  const outOfStockItems = cartItems.filter(item => !item.product.inStock);

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            href="/explore"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Shopping Cart</h1>
            <p className="text-text-secondary">{cartItems.length} items in your cart</p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <ShoppingCart className="w-24 h-24 text-text-tertiary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-text-primary mb-4">Your cart is empty</h2>
            <p className="text-text-secondary mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link
              href="/explore"
              className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover text-lg px-8 py-4"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* In Stock Items */}
              {inStockItems.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-text-primary mb-4">Ready to Ship</h2>
                  <div className="space-y-4">
                    {inStockItems.map((item) => (
                      <div key={item.id} className="card-base">
                        <div className="flex items-center space-x-4">
                          <div className="w-20 h-20 bg-surface-secondary rounded-lg flex items-center justify-center">
                            <ShoppingCart className="w-8 h-8 text-text-tertiary" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-semibold text-text-primary mb-1">{item.product.title}</h3>
                            <p className="text-sm text-text-secondary mb-2">by {item.product.seller}</p>
                            <p className="text-sm text-text-tertiary">Size: {item.size}</p>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 border border-border-primary rounded hover:bg-surface-secondary"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-12 text-center font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 border border-border-primary rounded hover:bg-surface-secondary"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <div className="text-right">
                              <p className="font-semibold text-text-primary">£{(item.product.price * item.quantity).toFixed(2)}</p>
                              <p className="text-sm text-text-tertiary">£{item.product.price} each</p>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => moveToWishlist(item.id)}
                                className="p-2 text-text-secondary hover:text-status-error hover:bg-surface-secondary rounded-lg"
                              >
                                <Heart className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-2 text-text-secondary hover:text-status-error hover:bg-surface-secondary rounded-lg"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Out of Stock Items */}
              {outOfStockItems.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-text-primary mb-4">Currently Unavailable</h2>
                  <div className="space-y-4">
                    {outOfStockItems.map((item) => (
                      <div key={item.id} className="card-base opacity-60">
                        <div className="flex items-center space-x-4">
                          <div className="w-20 h-20 bg-surface-secondary rounded-lg flex items-center justify-center">
                            <ShoppingCart className="w-8 h-8 text-text-tertiary" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-semibold text-text-primary mb-1">{item.product.title}</h3>
                            <p className="text-sm text-text-secondary mb-2">by {item.product.seller}</p>
                            <p className="text-sm text-status-error font-medium">Out of Stock</p>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => moveToWishlist(item.id)}
                              className="p-2 text-text-secondary hover:text-status-error hover:bg-surface-secondary rounded-lg"
                            >
                              <Heart className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-text-secondary hover:text-status-error hover:bg-surface-secondary rounded-lg"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card-base sticky top-24">
                <h2 className="text-lg font-semibold text-text-primary mb-6">Order Summary</h2>
                
                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-text-primary mb-2">Promo Code</label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCodeInput}
                      onChange={(e) => setPromoCodeInput(e.target.value)}
                      placeholder="Enter code"
                      className="input-base flex-1"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <p className="text-sm text-status-success mt-2 flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      Promo code applied! 10% off
                    </p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="text-text-primary">£{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Shipping</span>
                    <span className="text-text-primary">
                      {shipping === 0 ? 'Free' : `£${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  {appliedPromo && (
                    <div className="flex justify-between text-status-success">
                      <span>Discount ({appliedPromo})</span>
                      <span>-£{discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-border-primary pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-text-primary">Total</span>
                      <span className="text-text-primary">£{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="w-full btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover text-lg py-4 mb-4"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>

                {/* Trust Signals */}
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure checkout with 256-bit SSL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4" />
                    <span>Free shipping on orders over £50</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4" />
                    <span>30-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
