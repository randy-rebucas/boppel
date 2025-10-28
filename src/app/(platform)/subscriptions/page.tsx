'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Check, 
  X, 
  Star, 
  Crown, 
  Zap, 
  Shield, 
  Users,
  BarChart3,
  Globe,
  Headphones,
  CreditCard,
  Calendar,
  Download,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const subscriptionPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'Perfect for new creators getting started',
    features: [
      'Up to 10 products',
      'Basic analytics',
      'Community access',
      'Standard support',
      'Basic SEO tools',
    ],
    limitations: [
      'Limited customization',
      'Basic reporting',
      'Standard processing fees',
    ],
    popular: false,
    current: true,
  },
  {
    id: 'maker',
    name: 'Maker',
    price: 9.99,
    period: 'month',
    description: 'For growing businesses and active creators',
    features: [
      'Unlimited products',
      'Advanced analytics',
      'Priority support',
      'Marketing tools',
      'Workshop hosting',
      'Custom branding',
      'Advanced SEO tools',
      'Inventory management',
    ],
    limitations: [
      'Standard processing fees',
      'Limited API access',
    ],
    popular: true,
    current: false,
  },
  {
    id: 'pro_maker',
    name: 'Pro Maker',
    price: 19.99,
    period: 'month',
    description: 'For established creators and businesses',
    features: [
      'Everything in Maker',
      'AI business insights',
      'Multi-marketplace sync',
      'Wholesale tools',
      'Dedicated support',
      'Advanced integrations',
      'Custom reports',
      'API access',
      'White-label options',
    ],
    limitations: [
      'Higher processing fees for some features',
    ],
    popular: false,
    current: false,
  },
  {
    id: 'collective',
    name: 'Collective',
    price: 49.99,
    period: 'month',
    description: 'For teams and large-scale operations',
    features: [
      'Everything in Pro Maker',
      'Team management',
      'Advanced collaboration tools',
      'Custom workflows',
      'Enterprise integrations',
      'Dedicated account manager',
      'Custom development',
      'Priority feature requests',
    ],
    limitations: [],
    popular: false,
    current: false,
  },
];

const currentUsage = {
  products: { used: 8, limit: 10, type: 'products' },
  storage: { used: 2.5, limit: 5, type: 'GB' },
  apiCalls: { used: 1250, limit: 5000, type: 'calls' },
  workshops: { used: 2, limit: 5, type: 'workshops' },
};

const billingHistory = [
  {
    id: '1',
    date: '2024-01-15',
    amount: 0,
    status: 'paid',
    description: 'Starter Plan - January 2024',
  },
  {
    id: '2',
    date: '2023-12-15',
    amount: 0,
    status: 'paid',
    description: 'Starter Plan - December 2023',
  },
  {
    id: '3',
    date: '2023-11-15',
    amount: 0,
    status: 'paid',
    description: 'Starter Plan - November 2023',
  },
];

export default function SubscriptionsPage() {
  const [selectedPlan, setSelectedPlan] = useState('maker');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleUpgrade = (planId: string) => {
    setSelectedPlan(planId);
    // Handle upgrade logic
    console.log('Upgrading to plan:', planId);
  };

  const getUsagePercentage = (used: number, limit: number) => {
    return Math.min((used / limit) * 100, 100);
  };

  const getUsageColor = (percentage: number) => {
    if (percentage >= 90) return 'text-status-error';
    if (percentage >= 75) return 'text-status-warning';
    return 'text-status-success';
  };

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            href="/seller/dashboard"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Subscriptions</h1>
            <p className="text-text-secondary">Manage your subscription and billing</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Plan & Usage */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Plan */}
            <div className="card-base">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-primary">Current Plan</h2>
                <span className="bg-brand-primary text-text-inverse px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </span>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Star className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">Starter Plan</h3>
                  <p className="text-text-secondary">Free forever</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">What's included:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-status-success" />
                      <span>Up to 10 products</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-status-success" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-status-success" />
                      <span>Community access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-status-success" />
                      <span>Standard support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Limitations:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <X className="w-4 h-4 text-text-tertiary" />
                      <span>Limited customization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <X className="w-4 h-4 text-text-tertiary" />
                      <span>Basic reporting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <X className="w-4 h-4 text-text-tertiary" />
                      <span>Standard processing fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="card-base">
              <h2 className="text-xl font-semibold text-text-primary mb-6">Usage This Month</h2>
              
              <div className="space-y-6">
                {Object.entries(currentUsage).map(([key, usage]) => {
                  const percentage = getUsagePercentage(usage.used, usage.limit);
                  return (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-text-primary capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className={`text-sm font-medium ${getUsageColor(percentage)}`}>
                          {usage.used} / {usage.limit} {usage.type}
                        </span>
                      </div>
                      <div className="w-full bg-surface-secondary rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            percentage >= 90 ? 'bg-status-error' :
                            percentage >= 75 ? 'bg-status-warning' : 'bg-status-success'
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Available Plans */}
            <div className="card-base">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-primary">Available Plans</h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      billingCycle === 'monthly'
                        ? 'bg-brand-primary text-text-inverse'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      billingCycle === 'yearly'
                        ? 'bg-brand-primary text-text-inverse'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                    }`}
                  >
                    Yearly (Save 20%)
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subscriptionPlans.slice(1).map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-6 border-2 rounded-lg transition-all ${
                      plan.popular
                        ? 'border-brand-primary bg-brand-primary/5'
                        : 'border-border-primary hover:border-border-accent'
                    }`}
                  >
                    {plan.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="bg-brand-primary text-text-inverse px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        {plan.id === 'maker' && <Zap className="w-6 h-6 text-brand-primary" />}
                        {plan.id === 'pro_maker' && <Crown className="w-6 h-6 text-brand-primary" />}
                        {plan.id === 'collective' && <Users className="w-6 h-6 text-brand-primary" />}
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-3xl font-bold text-text-primary">£{plan.price}</span>
                        <span className="text-text-secondary ml-1">/{plan.period}</span>
                      </div>
                      <p className="text-text-secondary text-sm">{plan.description}</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {plan.features.slice(0, 5).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-status-success flex-shrink-0" />
                          <span className="text-sm text-text-primary">{feature}</span>
                        </div>
                      ))}
                      {plan.features.length > 5 && (
                        <p className="text-sm text-text-tertiary">
                          +{plan.features.length - 5} more features
                        </p>
                      )}
                    </div>
                    
                    <button
                      onClick={() => handleUpgrade(plan.id)}
                      className={`w-full btn-base ${
                        plan.popular
                          ? 'bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover'
                          : 'border border-border-primary text-text-primary hover:bg-surface-secondary'
                      }`}
                    >
                      {plan.current ? 'Current Plan' : 'Upgrade'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Billing Information */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Billing Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-text-secondary">Next billing date</p>
                  <p className="font-medium text-text-primary">Never (Free plan)</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Payment method</p>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4 text-text-tertiary" />
                    <span className="text-text-primary">•••• 4242</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Billing address</p>
                  <p className="text-text-primary">123 Royal Mile, Edinburgh, EH1 1RE</p>
                </div>
              </div>
            </div>

            {/* Billing History */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Billing History</h3>
              
              <div className="space-y-3">
                {billingHistory.map((bill) => (
                  <div key={bill.id} className="flex items-center justify-between py-2 border-b border-border-secondary last:border-b-0">
                    <div>
                      <p className="font-medium text-text-primary text-sm">{bill.description}</p>
                      <p className="text-xs text-text-tertiary">{bill.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-text-primary">£{bill.amount.toFixed(2)}</p>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-status-success" />
                        <span className="text-xs text-status-success">Paid</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-sm">
                <Download className="w-4 h-4 mr-2" />
                Download All Invoices
              </button>
            </div>

            {/* Quick Actions */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Update Payment Method
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Calendar className="w-4 h-4 mr-2" />
                  Change Billing Cycle
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Headphones className="w-4 h-4 mr-2" />
                  Contact Support
                </button>
                <button className="w-full btn-base border border-status-error text-status-error hover:bg-status-error/10 text-left">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
