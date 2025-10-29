'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  BarChart3,
  Settings,
  Shield,
  MessageSquare,
  Package,
  DollarSign,
  Eye,
  Star,
  ArrowRight
} from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock data for admin dashboard
const adminStats = {
  totalUsers: 1247,
  totalArtisans: 89,
  totalProducts: 2341,
  totalOrders: 456,
  totalRevenue: 45670,
  pendingVerifications: 12,
  activeDisputes: 3,
  systemHealth: 99.9,
};

const recentActivity = [
  {
    id: 1,
    type: 'user_registration',
    user: 'Sarah Chen',
    action: 'Registered as artisan',
    timestamp: '2 hours ago',
    status: 'pending'
  },
  {
    id: 2,
    type: 'product_upload',
    user: 'Marcus Rodriguez',
    action: 'Uploaded new product',
    timestamp: '4 hours ago',
    status: 'approved'
  },
  {
    id: 3,
    type: 'dispute',
    user: 'Emma Wilson',
    action: 'Opened dispute for order #1234',
    timestamp: '6 hours ago',
    status: 'open'
  },
  {
    id: 4,
    type: 'verification',
    user: 'James Smith',
    action: 'Completed artisan verification',
    timestamp: '1 day ago',
    status: 'completed'
  }
];

const topArtisans = [
  {
    id: 1,
    name: 'Sarah Chen',
    products: 45,
    sales: 234,
    revenue: 12450,
    rating: 4.9,
    status: 'verified'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    products: 32,
    sales: 189,
    revenue: 9870,
    rating: 4.8,
    status: 'verified'
  },
  {
    id: 3,
    name: 'Elena Kowalski',
    products: 28,
    sales: 156,
    revenue: 8230,
    rating: 4.7,
    status: 'pending'
  }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
      case 'completed':
      case 'approved':
        return 'text-status-success bg-status-success/10';
      case 'pending':
        return 'text-status-warning bg-status-warning/10';
      case 'open':
        return 'text-status-error bg-status-error/10';
      default:
        return 'text-text-secondary bg-surface-secondary';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_registration':
        return Users;
      case 'product_upload':
        return Package;
      case 'dispute':
        return AlertTriangle;
      case 'verification':
        return Shield;
      default:
        return CheckCircle;
    }
  };

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text-primary mb-2">Admin Dashboard</h1>
            <p className="text-text-secondary">Manage and monitor the Boppel platform</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </button>
            <button className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card-base">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Total Users</p>
                <p className="text-2xl font-bold text-text-primary">{adminStats.totalUsers.toLocaleString()}</p>
                <p className="text-sm text-status-success">+12.5% from last month</p>
              </div>
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-primary" />
              </div>
            </div>
          </div>

          <div className="card-base">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Verified Artisans</p>
                <p className="text-2xl font-bold text-text-primary">{adminStats.totalArtisans}</p>
                <p className="text-sm text-status-success">+8.2% from last month</p>
              </div>
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-brand-secondary" />
              </div>
            </div>
          </div>

          <div className="card-base">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Total Products</p>
                <p className="text-2xl font-bold text-text-primary">{adminStats.totalProducts.toLocaleString()}</p>
                <p className="text-sm text-status-success">+15.3% from last month</p>
              </div>
              <div className="w-12 h-12 bg-status-info/10 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-status-info" />
              </div>
            </div>
          </div>

          <div className="card-base">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-text-primary">£{adminStats.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-status-success">+22.1% from last month</p>
              </div>
              <div className="w-12 h-12 bg-status-success/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-status-success" />
              </div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card-base border-status-warning/20 bg-status-warning/5">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-5 h-5 text-status-warning mr-2" />
              <h3 className="font-semibold text-text-primary">Pending Verifications</h3>
            </div>
            <p className="text-2xl font-bold text-status-warning mb-2">{adminStats.pendingVerifications}</p>
            <p className="text-sm text-text-secondary">Artisan applications awaiting review</p>
          </div>

          <div className="card-base border-status-error/20 bg-status-error/5">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-5 h-5 text-status-error mr-2" />
              <h3 className="font-semibold text-text-primary">Active Disputes</h3>
            </div>
            <p className="text-2xl font-bold text-status-error mb-2">{adminStats.activeDisputes}</p>
            <p className="text-sm text-text-secondary">Disputes requiring attention</p>
          </div>

          <div className="card-base border-status-success/20 bg-status-success/5">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-5 h-5 text-status-success mr-2" />
              <h3 className="font-semibold text-text-primary">System Health</h3>
            </div>
            <p className="text-2xl font-bold text-status-success mb-2">{adminStats.systemHealth}%</p>
            <p className="text-sm text-text-secondary">Platform uptime and performance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="card-base">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">Recent Activity</h3>
              <Link href="/admin/activity" className="text-brand-primary hover:underline text-sm">
                View all
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity) => {
                const IconComponent = getActivityIcon(activity.type);
                return (
                  <div key={activity.id} className="flex items-center space-x-4 py-3 border-b border-border-secondary last:border-b-0">
                    <div className="w-10 h-10 bg-surface-secondary rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-text-primary">{activity.user}</p>
                      <p className="text-sm text-text-secondary">{activity.action}</p>
                      <p className="text-xs text-text-tertiary">{activity.timestamp}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Artisans */}
          <div className="card-base">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">Top Artisans</h3>
              <Link href="/admin/artisans" className="text-brand-primary hover:underline text-sm">
                View all
              </Link>
            </div>
            
            <div className="space-y-4">
              {topArtisans.map((artisan) => (
                <div key={artisan.id} className="flex items-center justify-between py-3 border-b border-border-secondary last:border-b-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-medium text-text-primary">{artisan.name}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(artisan.status)}`}>
                        {artisan.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span>{artisan.products} products</span>
                      <span>{artisan.sales} sales</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-brand-accent fill-current" />
                        <span>{artisan.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-text-primary">£{artisan.revenue.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="card-base">
            <h3 className="text-lg font-semibold text-text-primary mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/admin/verifications"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-surface-secondary transition-colors"
              >
                <Shield className="w-5 h-5 text-brand-primary" />
                <span className="text-text-primary">Review Verifications</span>
              </Link>
              <Link
                href="/admin/disputes"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-surface-secondary transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-brand-primary" />
                <span className="text-text-primary">Handle Disputes</span>
              </Link>
              <Link
                href="/admin/analytics"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-surface-secondary transition-colors"
              >
                <BarChart3 className="w-5 h-5 text-brand-primary" />
                <span className="text-text-primary">View Analytics</span>
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-surface-secondary transition-colors"
              >
                <Settings className="w-5 h-5 text-brand-primary" />
                <span className="text-text-primary">Platform Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
