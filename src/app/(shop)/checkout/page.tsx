'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CreditCard, 
  MapPin, 
  User, 
  Lock, 
  Check,
  Shield,
  Truck,
  RotateCcw,
  Eye,
  EyeOff
} from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock order data
const mockOrder = {
  items: [
    {
      id: '1',
      title: 'Handcrafted Silver Ring with Celtic Knot Design',
      price: 89,
      quantity: 1,
      seller: 'Sarah\'s Jewelry Studio',
    },
    {
      id: '2',
      title: 'Ceramic Coffee Mug Set',
      price: 45,
      quantity: 2,
      seller: 'Pottery by Mike',
    },
  ],
  subtotal: 179,
  shipping: 0,
  discount: 17.9,
  total: 161.1,
};

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
    
    // Billing Information
    sameAsShipping: true,
    billingFirstName: '',
    billingLastName: '',
    billingAddress: '',
    billingCity: '',
    billingPostcode: '',
    billingCountry: 'United Kingdom',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Additional Options
    saveInfo: false,
    newsletter: false,
  });

  const [showCvv, setShowCvv] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order submitted:', formData);
  };

  const steps = [
    { number: 1, title: 'Shipping', icon: MapPin },
    { number: 2, title: 'Payment', icon: CreditCard },
    { number: 3, title: 'Review', icon: Check },
  ];

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            href="/cart"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Checkout</h1>
            <p className="text-text-secondary">Complete your order securely</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number
                    ? 'border-brand-primary bg-brand-primary text-text-inverse'
                    : 'border-border-primary text-text-secondary'
                }`}>
                  {currentStep > step.number ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-brand-primary' : 'text-text-secondary'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-brand-primary' : 'bg-border-primary'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div className="card-base">
                  <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Shipping Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="input-base"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="input-base"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="input-base"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="input-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-text-primary mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="input-base"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-text-primary mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="input-base"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="postcode" className="block text-sm font-medium text-text-primary mb-2">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          id="postcode"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleInputChange}
                          className="input-base"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-text-primary mb-2">
                          Country *
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="input-base"
                          required
                        >
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <div className="card-base">
                  <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payment Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-text-primary mb-2">
                        Card Number *
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="input-base pl-10"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-text-primary mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="input-base"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-text-primary mb-2">
                          CVV *
                        </label>
                        <div className="relative">
                          <input
                            type={showCvv ? 'text' : 'password'}
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="input-base pr-10"
                            placeholder="123"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowCvv(!showCvv)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-tertiary hover:text-text-secondary"
                          >
                            {showCvv ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-text-primary mb-2">
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="input-base"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="saveInfo"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleInputChange}
                        className="text-brand-primary focus:ring-brand-primary"
                      />
                      <label htmlFor="saveInfo" className="text-sm text-text-secondary">
                        Save payment information for future purchases
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Review Order */}
              {currentStep === 3 && (
                <div className="card-base">
                  <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Review Your Order
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Order Items */}
                    <div>
                      <h3 className="font-semibold text-text-primary mb-4">Order Items</h3>
                      <div className="space-y-4">
                        {mockOrder.items.map((item) => (
                          <div key={item.id} className="flex items-center justify-between py-4 border-b border-border-secondary last:border-b-0">
                            <div>
                              <h4 className="font-medium text-text-primary">{item.title}</h4>
                              <p className="text-sm text-text-secondary">by {item.seller}</p>
                              <p className="text-sm text-text-tertiary">Qty: {item.quantity}</p>
                            </div>
                            <span className="font-semibold text-text-primary">£{(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div>
                      <h3 className="font-semibold text-text-primary mb-4">Shipping Address</h3>
                      <div className="bg-surface-secondary p-4 rounded-lg">
                        <p className="text-text-primary">
                          {formData.firstName} {formData.lastName}
                        </p>
                        <p className="text-text-secondary">{formData.address}</p>
                        <p className="text-text-secondary">
                          {formData.city}, {formData.postcode}
                        </p>
                        <p className="text-text-secondary">{formData.country}</p>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="font-semibold text-text-primary mb-4">Payment Method</h3>
                      <div className="bg-surface-secondary p-4 rounded-lg">
                        <p className="text-text-primary">**** **** **** {formData.cardNumber.slice(-4)}</p>
                        <p className="text-text-secondary">{formData.cardName}</p>
                        <p className="text-text-secondary">Expires {formData.expiryDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-border-primary">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Place Order
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-base sticky top-24">
              <h2 className="text-lg font-semibold text-text-primary mb-6">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {mockOrder.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-text-tertiary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-text-primary text-sm">{item.title}</h4>
                      <p className="text-xs text-text-secondary">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-text-primary text-sm">£{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="text-text-primary">£{mockOrder.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Shipping</span>
                  <span className="text-text-primary">
                    {mockOrder.shipping === 0 ? 'Free' : `£${mockOrder.shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-status-success">
                  <span>Discount</span>
                  <span>-£{mockOrder.discount.toFixed(2)}</span>
                </div>
                <div className="border-t border-border-primary pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-text-primary">Total</span>
                    <span className="text-text-primary">£{mockOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="space-y-3 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure 256-bit SSL encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4" />
                  <span>Free shipping on orders over £50</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
