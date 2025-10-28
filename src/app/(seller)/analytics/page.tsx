'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingBag, 
  Eye, 
  Heart,
  Star,
  Users,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Award,
  Globe,
  Clock,
  Package,
  MessageCircle
} from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock analytics data
const analyticsData = {
  overview: {
    totalRevenue: 12540,
    revenueChange: 12.5,
    totalOrders: 234,
    ordersChange: 8.2,
    totalViews: 12890,
    viewsChange: 15.3,
    conversionRate: 3.2,
    conversionChange: -2.1,
    averageOrderValue: 53.6,
    aovChange: 4.2,
  },
  timeRange: '30d',
  topProducts: [
    {
      id: '1',
      name: 'Handcrafted Silver Ring',
      sales: 45,
      revenue: 4005,
      views: 1200,
      conversion: 3.75,
      rating: 4.9,
    },
    {
      id: '2',
      name: 'Ceramic Coffee Mug Set',
      sales: 32,
      revenue: 1440,
      views: 890,
      conversion: 3.6,
      rating: 4.8,
    },
    {
      id: '3',
      name: 'Wooden Cutting Board',
      sales: 28,
      revenue: 1540,
      views: 1100,
      conversion: 2.55,
      rating: 4.7,
    },
  ],
  revenueData: [
    { date: '2024-01-01', revenue: 320, orders: 6 },
    { date: '2024-01-02', revenue: 450, orders: 8 },
    { date: '2024-01-03', revenue: 280, orders: 5 },
    { date: '2024-01-04', revenue: 520, orders: 9 },
    { date: '2024-01-05', revenue: 380, orders: 7 },
    { date: '2024-01-06', revenue: 620, orders: 11 },
    { date: '2024-01-07', revenue: 480, orders: 8 },
  ],
  trafficSources: [
    { source: 'Direct', visitors: 45, percentage: 35 },
    { source: 'Search', visitors: 38, percentage: 30 },
    { source: 'Social', visitors: 25, percentage: 20 },
    { source: 'Referral', visitors: 20, percentage: 15 },
  ],
  customerInsights: {
    newCustomers: 67,
    returningCustomers: 33,
    averageSessionDuration: '4m 32s',
    bounceRate: 42.5,
    topCountries: [
      { country: 'United Kingdom', percentage: 45 },
      { country: 'United States', percentage: 25 },
      { country: 'Canada', percentage: 15 },
      { country: 'Australia', percentage: 10 },
      { country: 'Germany', percentage: 5 },
    ],
  },
};

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const periods = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: '1y', label: 'Last year' },
  ];

  const metrics = [
    { value: 'revenue', label: 'Revenue', icon: DollarSign, color: 'text-brand-primary' },
    { value: 'orders', label: 'Orders', icon: ShoppingBag, color: 'text-brand-secondary' },
    { value: 'views', label: 'Views', icon: Eye, color: 'text-status-info' },
    { value: 'conversion', label: 'Conversion', icon: Target, color: 'text-status-success' },
  ];

  const StatCard = ({ title, value, change, icon: Icon, color }: {
    title: string;
    value: string | number;
    change: number;
    icon: any;
    color: string;
  }) => (
    <div className="card-base">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color.replace('text-', 'bg-').replace('text-', 'bg-')}/10`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <div className={`flex items-center space-x-1 text-sm ${change >= 0 ? 'text-status-success' : 'text-status-error'}`}>
          {change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold text-text-primary mb-1">{value}</p>
        <p className="text-text-secondary">{title}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link
              href="/seller/dashboard"
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Analytics</h1>
              <p className="text-text-secondary">Track your business performance and growth</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="input-base w-auto"
            >
              {periods.map((period) => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </select>
            <button className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Revenue"
            value={`£${analyticsData.overview.totalRevenue.toLocaleString()}`}
            change={analyticsData.overview.revenueChange}
            icon={DollarSign}
            color="text-brand-primary"
          />
          <StatCard
            title="Total Orders"
            value={analyticsData.overview.totalOrders}
            change={analyticsData.overview.ordersChange}
            icon={ShoppingBag}
            color="text-brand-secondary"
          />
          <StatCard
            title="Product Views"
            value={analyticsData.overview.totalViews.toLocaleString()}
            change={analyticsData.overview.viewsChange}
            icon={Eye}
            color="text-status-info"
          />
          <StatCard
            title="Conversion Rate"
            value={`${analyticsData.overview.conversionRate}%`}
            change={analyticsData.overview.conversionChange}
            icon={Target}
            color="text-status-success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Revenue Chart */}
            <div className="card-base">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-text-primary">Revenue Trend</h3>
                <div className="flex items-center space-x-2">
                  {metrics.map((metric) => (
                    <button
                      key={metric.value}
                      onClick={() => setSelectedMetric(metric.value)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedMetric === metric.value
                          ? 'bg-brand-primary/10 text-brand-primary'
                          : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                      }`}
                    >
                      <metric.icon className="w-4 h-4" />
                      <span>{metric.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="h-80 bg-surface-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-text-tertiary mx-auto mb-4" />
                  <p className="text-text-secondary">Revenue chart would be displayed here</p>
                  <p className="text-sm text-text-tertiary">Integration with charting library needed</p>
                </div>
              </div>
            </div>

            {/* Top Products */}
            <div className="card-base">
              <h3 className="text-xl font-semibold text-text-primary mb-6">Top Performing Products</h3>
              
              <div className="space-y-4">
                {analyticsData.topProducts.map((product, index) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border border-border-primary rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-text-tertiary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">{product.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <span>{product.sales} sales</span>
                          <span>•</span>
                          <span>{product.views} views</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-brand-accent fill-current" />
                            <span>{product.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-text-primary">£{product.revenue.toLocaleString()}</p>
                      <p className="text-sm text-text-secondary">{product.conversion}% conversion</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Traffic Sources */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Traffic Sources</h3>
              
              <div className="space-y-4">
                {analyticsData.trafficSources.map((source, index) => (
                  <div key={source.source} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        index === 0 ? 'bg-brand-primary' :
                        index === 1 ? 'bg-brand-secondary' :
                        index === 2 ? 'bg-status-info' : 'bg-status-success'
                      }`}></div>
                      <span className="text-text-primary">{source.source}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-text-primary">{source.visitors}%</p>
                      <p className="text-sm text-text-secondary">{source.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Insights */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Customer Insights</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">New vs Returning</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-surface-secondary rounded-full">
                      <div 
                        className="h-2 bg-brand-primary rounded-full" 
                        style={{ width: `${analyticsData.customerInsights.newCustomers}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-text-primary">
                      {analyticsData.customerInsights.newCustomers}%
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Avg. Session</span>
                  <span className="font-medium text-text-primary">{analyticsData.customerInsights.averageSessionDuration}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Bounce Rate</span>
                  <span className="font-medium text-text-primary">{analyticsData.customerInsights.bounceRate}%</span>
                </div>
              </div>
            </div>

            {/* Top Countries */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Top Countries</h3>
              
              <div className="space-y-3">
                {analyticsData.customerInsights.topCountries.map((country, index) => (
                  <div key={country.country} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-4 h-4 text-text-tertiary" />
                      <span className="text-text-primary">{country.country}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-surface-secondary rounded-full">
                        <div 
                          className="h-2 bg-brand-primary rounded-full" 
                          style={{ width: `${country.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-text-primary">{country.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Activity className="w-4 h-4 mr-2" />
                  View Detailed Reports
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Target className="w-4 h-4 mr-2" />
                  Set Goals
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Customer Feedback
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Award className="w-4 h-4 mr-2" />
                  Performance Insights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
