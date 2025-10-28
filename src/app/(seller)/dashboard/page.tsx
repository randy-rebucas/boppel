'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  ShoppingBag, 
  Eye, 
  Heart, 
  DollarSign, 
  Users, 
  Package, 
  Star,
  Plus,
  Settings,
  BarChart3,
  MessageSquare,
  Bell,
  Search,
  Filter,
  MoreHorizontal
} from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock data for dashboard
const dashboardStats = {
  totalRevenue: 12540,
  totalOrders: 234,
  totalViews: 12890,
  totalFavorites: 456,
  conversionRate: 3.2,
  averageOrderValue: 53.6,
};

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'Emma Wilson',
    product: 'Handcrafted Silver Ring',
    amount: 89,
    status: 'shipped',
    date: '2024-01-15',
  },
  {
    id: 'ORD-002',
    customer: 'James Smith',
    product: 'Ceramic Coffee Mug Set',
    amount: 45,
    status: 'processing',
    date: '2024-01-14',
  },
  {
    id: 'ORD-003',
    customer: 'Sophie Brown',
    product: 'Wooden Cutting Board',
    amount: 55,
    status: 'delivered',
    date: '2024-01-13',
  },
];

const topProducts = [
  {
    id: '1',
    name: 'Handcrafted Silver Ring',
    sales: 45,
    revenue: 4005,
    views: 1200,
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Ceramic Coffee Mug Set',
    sales: 32,
    revenue: 1440,
    views: 890,
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Wooden Cutting Board',
    sales: 28,
    revenue: 1540,
    views: 1100,
    rating: 4.7,
  },
];

const recentReviews = [
  {
    id: '1',
    customer: 'Emma Wilson',
    product: 'Handcrafted Silver Ring',
    rating: 5,
    comment: 'Absolutely beautiful! The craftsmanship is incredible.',
    date: '2 days ago',
  },
  {
    id: '2',
    customer: 'James Smith',
    product: 'Ceramic Coffee Mug Set',
    rating: 4,
    comment: 'Great quality mugs, love the unique glaze patterns.',
    date: '1 week ago',
  },
];

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-status-success bg-status-success/10';
      case 'shipped':
        return 'text-status-info bg-status-info/10';
      case 'processing':
        return 'text-status-warning bg-status-warning/10';
      default:
        return 'text-text-secondary bg-surface-secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text-primary mb-2">Seller Dashboard</h1>
            <p className="text-text-secondary">Welcome back! Here's what's happening with your business.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </button>
            <Link
              href="/seller/add-product"
              className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card-base">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-text-primary">£{dashboardStats.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-status-success">+12.5% from last month</p>
              </div>
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-brand-primary" />
              </div>
            </div>
          </div>

          <div className="card-base">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-text-primary">{dashboardStats.totalOrders}</p>
                <p className="text-sm text-status-success">+8.2% from last month</p>
              </div>
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-brand-secondary" />
              </div>
            </div>
          </div>

          <div className="card-base">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Product Views</p>
                <p className="text-2xl font-bold text-text-primary">{dashboardStats.totalViews.toLocaleString()}</p>
                <p className="text-sm text-status-success">+15.3% from last month</p>
              </div>
              <div className="w-12 h-12 bg-status-info/10 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-status-info" />
              </div>
            </div>
          </div>

          <div className="card-base">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Favorites</p>
                <p className="text-2xl font-bold text-text-primary">{dashboardStats.totalFavorites}</p>
                <p className="text-sm text-status-success">+22.1% from last month</p>
              </div>
              <div className="w-12 h-12 bg-status-error/10 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-status-error" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="card-base">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-text-primary">Recent Orders</h3>
                <Link href="/seller/orders" className="text-brand-primary hover:underline text-sm">
                  View all
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-4 border-b border-border-secondary last:border-b-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="font-medium text-text-primary">{order.customer}</p>
                          <p className="text-sm text-text-secondary">{order.product}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-text-primary">£{order.amount}</p>
                      <p className="text-sm text-text-secondary">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/seller/add-product"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-secondary transition-colors"
                >
                  <Plus className="w-5 h-5 text-brand-primary" />
                  <span className="text-text-primary">Add New Product</span>
                </Link>
                <Link
                  href="/seller/analytics"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-secondary transition-colors"
                >
                  <BarChart3 className="w-5 h-5 text-brand-primary" />
                  <span className="text-text-primary">View Analytics</span>
                </Link>
                <Link
                  href="/seller/messages"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-secondary transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-brand-primary" />
                  <span className="text-text-primary">Customer Messages</span>
                </Link>
                <Link
                  href="/seller/settings"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-secondary transition-colors"
                >
                  <Settings className="w-5 h-5 text-brand-primary" />
                  <span className="text-text-primary">Account Settings</span>
                </Link>
              </div>
            </div>

            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Top Products</h3>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-text-primary text-sm">{product.name}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Star className="w-3 h-3 text-brand-accent fill-current" />
                        <span className="text-xs text-text-secondary">{product.rating}</span>
                        <span className="text-xs text-text-secondary">•</span>
                        <span className="text-xs text-text-secondary">{product.sales} sales</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-text-primary text-sm">£{product.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="mt-8">
          <div className="card-base">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">Recent Reviews</h3>
              <Link href="/seller/reviews" className="text-brand-primary hover:underline text-sm">
                View all
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentReviews.map((review) => (
                <div key={review.id} className="flex items-start space-x-4 py-4 border-b border-border-secondary last:border-b-0">
                  <div className="w-10 h-10 bg-surface-secondary rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-text-primary">
                      {review.customer.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-text-primary">{review.customer}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating ? 'text-brand-accent fill-current' : 'text-text-tertiary'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-text-secondary">{review.date}</span>
                    </div>
                    <p className="text-sm text-text-secondary mb-1">{review.product}</p>
                    <p className="text-text-primary">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
