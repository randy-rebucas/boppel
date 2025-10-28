'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  Edit3, 
  Save, 
  X,
  Camera,
  CheckCircle,
  AlertCircle,
  Star,
  Heart,
  ShoppingBag,
  Palette,
  Settings,
  Bell,
  Lock,
  CreditCard,
  Globe
} from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock user data
const mockUser = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@email.com',
  phone: '+44 7700 900123',
  avatar: '/placeholder-avatar.jpg',
  bio: 'Passionate jewelry maker specializing in Celtic designs and sustainable materials.',
  location: 'Edinburgh, Scotland',
  joinDate: '2023-03-15',
  verified: true,
  roles: ['seller', 'buyer'],
  subscription: 'maker',
  stats: {
    productsSold: 45,
    totalEarnings: 3240,
    averageRating: 4.9,
    totalReviews: 128,
    followers: 1250,
    following: 89,
  },
  preferences: {
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    publicProfile: true,
    showLocation: true,
  },
  addresses: [
    {
      id: '1',
      type: 'Home',
      name: 'Sarah Johnson',
      address: '123 Royal Mile',
      city: 'Edinburgh',
      postcode: 'EH1 1RE',
      country: 'United Kingdom',
      isDefault: true,
    },
    {
      id: '2',
      type: 'Work',
      name: 'Sarah Johnson',
      address: '456 Princes Street',
      city: 'Edinburgh',
      postcode: 'EH2 2AN',
      country: 'United Kingdom',
      isDefault: false,
    },
  ],
  paymentMethods: [
    {
      id: '1',
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiryMonth: '12',
      expiryYear: '2025',
      isDefault: true,
    },
    {
      id: '2',
      type: 'card',
      last4: '5555',
      brand: 'Mastercard',
      expiryMonth: '08',
      expiryYear: '2026',
      isDefault: false,
    },
  ],
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.phone,
    bio: mockUser.bio,
    location: mockUser.location,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Handle profile update
    console.log('Profile updated:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: mockUser.name,
      email: mockUser.email,
      phone: mockUser.phone,
      bio: mockUser.bio,
      location: mockUser.location,
    });
    setIsEditing(false);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">My Profile</h1>
          <p className="text-text-secondary">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-base sticky top-24">
              {/* Profile Summary */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-surface-secondary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-2xl font-medium text-text-primary">
                    {mockUser.name.charAt(0)}
                  </span>
                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-brand-primary text-text-inverse rounded-full flex items-center justify-center">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold text-text-primary mb-1">{mockUser.name}</h2>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Shield className="w-4 h-4 text-brand-primary" />
                  <span className="text-sm text-brand-primary font-medium">Verified</span>
                </div>
                <p className="text-sm text-text-secondary">{mockUser.location}</p>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Products Sold</span>
                  <span className="font-semibold text-text-primary">{mockUser.stats.productsSold}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Total Earnings</span>
                  <span className="font-semibold text-text-primary">£{mockUser.stats.totalEarnings.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-brand-accent fill-current" />
                    <span className="font-semibold text-text-primary">{mockUser.stats.averageRating}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-brand-primary/10 text-brand-primary'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Profile Information */}
                <div className="card-base">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-text-primary">Profile Information</h3>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary"
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      {isEditing ? 'Cancel' : 'Edit'}
                    </button>
                  </div>

                  {isEditing ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="input-base"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input-base"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="input-base"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Location
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="input-base"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          rows={4}
                          className="input-base resize-none"
                          placeholder="Tell us about yourself..."
                        />
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={handleSave}
                          className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </button>
                        <button
                          onClick={handleCancel}
                          className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary"
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Full Name
                          </label>
                          <p className="text-text-primary">{mockUser.name}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Email Address
                          </label>
                          <p className="text-text-primary">{mockUser.email}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Phone Number
                          </label>
                          <p className="text-text-primary">{mockUser.phone}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-2">
                            Location
                          </label>
                          <p className="text-text-primary">{mockUser.location}</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          Bio
                        </label>
                        <p className="text-text-primary">{mockUser.bio}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Account Status */}
                <div className="card-base">
                  <h3 className="text-xl font-semibold text-text-primary mb-6">Account Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-status-success" />
                      <div>
                        <p className="font-medium text-text-primary">Email Verified</p>
                        <p className="text-sm text-text-secondary">Your email address is verified</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-status-success" />
                      <div>
                        <p className="font-medium text-text-primary">Phone Verified</p>
                        <p className="text-sm text-text-secondary">Your phone number is verified</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-brand-primary" />
                      <div>
                        <p className="font-medium text-text-primary">Identity Verified</p>
                        <p className="text-sm text-text-secondary">Your identity has been verified</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-6 h-6 text-brand-accent" />
                      <div>
                        <p className="font-medium text-text-primary">Premium Seller</p>
                        <p className="text-sm text-text-secondary">You have premium seller status</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="card-base">
                  <h3 className="text-xl font-semibold text-text-primary mb-6">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                      href="/seller/dashboard"
                      className="flex items-center space-x-3 p-4 border border-border-primary rounded-lg hover:bg-surface-secondary transition-colors"
                    >
                      <Palette className="w-6 h-6 text-brand-primary" />
                      <div>
                        <p className="font-medium text-text-primary">Seller Dashboard</p>
                        <p className="text-sm text-text-secondary">Manage your products</p>
                      </div>
                    </Link>
                    <Link
                      href="/seller/add-product"
                      className="flex items-center space-x-3 p-4 border border-border-primary rounded-lg hover:bg-surface-secondary transition-colors"
                    >
                      <ShoppingBag className="w-6 h-6 text-brand-primary" />
                      <div>
                        <p className="font-medium text-text-primary">Add Product</p>
                        <p className="text-sm text-text-secondary">List a new item</p>
                      </div>
                    </Link>
                    <Link
                      href="/community/community"
                      className="flex items-center space-x-3 p-4 border border-border-primary rounded-lg hover:bg-surface-secondary transition-colors"
                    >
                      <Heart className="w-6 h-6 text-brand-primary" />
                      <div>
                        <p className="font-medium text-text-primary">Community</p>
                        <p className="text-sm text-text-secondary">Connect with creators</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-8">
                <div className="card-base">
                  <h3 className="text-xl font-semibold text-text-primary mb-6">Privacy Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-text-primary">Public Profile</p>
                        <p className="text-sm text-text-secondary">Make your profile visible to other users</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={mockUser.preferences.publicProfile} />
                        <div className="w-11 h-6 bg-surface-secondary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-text-primary">Show Location</p>
                        <p className="text-sm text-text-secondary">Display your location on your profile</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={mockUser.preferences.showLocation} />
                        <div className="w-11 h-6 bg-surface-secondary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="card-base">
                  <h3 className="text-xl font-semibold text-text-primary mb-6">Account Security</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-text-primary">Password</p>
                        <p className="text-sm text-text-secondary">Last changed 3 months ago</p>
                      </div>
                      <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary">
                        Change Password
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-text-primary">Two-Factor Authentication</p>
                        <p className="text-sm text-text-secondary">Add an extra layer of security</p>
                      </div>
                      <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-text-primary">Saved Addresses</h3>
                  <button className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover">
                    Add Address
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockUser.addresses.map((address) => (
                    <div key={address.id} className="card-base">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-text-primary">{address.type}</h4>
                          <p className="text-sm text-text-secondary">{address.name}</p>
                        </div>
                        {address.isDefault && (
                          <span className="bg-brand-primary text-text-inverse px-2 py-1 rounded-full text-xs font-medium">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="space-y-1 text-sm text-text-secondary">
                        <p>{address.address}</p>
                        <p>{address.city}, {address.postcode}</p>
                        <p>{address.country}</p>
                      </div>
                      <div className="flex items-center space-x-2 mt-4">
                        <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-sm px-3 py-1">
                          Edit
                        </button>
                        <button className="btn-base border border-status-error text-status-error hover:bg-status-error/10 text-sm px-3 py-1">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payment Tab */}
            {activeTab === 'payment' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-text-primary">Payment Methods</h3>
                  <button className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover">
                    Add Payment Method
                  </button>
                </div>
                
                <div className="space-y-4">
                  {mockUser.paymentMethods.map((method) => (
                    <div key={method.id} className="card-base">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-8 bg-surface-secondary rounded flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-text-tertiary" />
                          </div>
                          <div>
                            <p className="font-medium text-text-primary">
                              {method.brand} •••• {method.last4}
                            </p>
                            <p className="text-sm text-text-secondary">
                              Expires {method.expiryMonth}/{method.expiryYear}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {method.isDefault && (
                            <span className="bg-brand-primary text-text-inverse px-2 py-1 rounded-full text-xs font-medium">
                              Default
                            </span>
                          )}
                          <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-sm px-3 py-1">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary">Notification Preferences</h3>
                
                <div className="card-base">
                  <h4 className="font-semibold text-text-primary mb-4">Email Notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-text-primary">Order Updates</p>
                        <p className="text-sm text-text-secondary">Get notified about order status changes</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-surface-secondary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-text-primary">New Messages</p>
                        <p className="text-sm text-text-secondary">Get notified about new messages from buyers</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-surface-secondary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-text-primary">Marketing Emails</p>
                        <p className="text-sm text-text-secondary">Receive updates about new features and promotions</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={mockUser.preferences.marketingEmails} />
                        <div className="w-11 h-6 bg-surface-secondary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="card-base">
                  <h4 className="font-semibold text-text-primary mb-4">SMS Notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-text-primary">Order Alerts</p>
                        <p className="text-sm text-text-secondary">Get SMS notifications for urgent order updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={mockUser.preferences.smsNotifications} />
                        <div className="w-11 h-6 bg-surface-secondary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
