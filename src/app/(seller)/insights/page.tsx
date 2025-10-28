'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Brain, 
  TrendingUp, 
  Target, 
  Lightbulb, 
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Star,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Award,
  Calendar,
  Download,
  RefreshCw,
  Settings
} from 'lucide-react';
import Navigation from '@/components/Navigation';

// Mock AI insights data
const aiInsights = {
  performance: {
    score: 87,
    trend: 'up',
    change: 12,
    recommendations: 5,
  },
  revenue: {
    current: 3240,
    projected: 4100,
    growth: 26.5,
    confidence: 85,
  },
  opportunities: [
    {
      id: '1',
      title: 'Optimize Product Descriptions',
      description: 'Your Celtic ring could benefit from more detailed descriptions. Add materials, dimensions, and care instructions.',
      impact: 'High',
      effort: 'Low',
      potentialIncrease: '15-25%',
      category: 'SEO',
    },
    {
      id: '2',
      title: 'Expand to New Categories',
      description: 'Based on your jewelry success, consider adding earrings and bracelets to your collection.',
      impact: 'High',
      effort: 'Medium',
      potentialIncrease: '30-40%',
      category: 'Product Strategy',
    },
    {
      id: '3',
      title: 'Improve Product Photography',
      description: 'Higher quality images could increase conversion rates. Consider professional photography for top products.',
      impact: 'Medium',
      effort: 'Medium',
      potentialIncrease: '10-20%',
      category: 'Visuals',
    },
    {
      id: '4',
      title: 'Engage More on Social Media',
      description: 'Increase your social media presence to drive more traffic to your products.',
      impact: 'Medium',
      effort: 'High',
      potentialIncrease: '20-30%',
      category: 'Marketing',
    },
  ],
  marketTrends: [
    {
      category: 'Jewelry',
      trend: 'Celtic designs are trending up 45% this quarter',
      opportunity: 'High demand for authentic Celtic pieces',
      action: 'Consider creating more Celtic-inspired designs',
    },
    {
      category: 'Sustainability',
      trend: 'Eco-friendly products see 60% higher engagement',
      opportunity: 'Highlight your sustainable practices',
      action: 'Add sustainability badges to your products',
    },
    {
      category: 'Pricing',
      trend: 'Handmade jewelry prices increased 12% this month',
      opportunity: 'You could increase prices by 8-10%',
      action: 'Review and adjust your pricing strategy',
    },
  ],
  customerInsights: {
    demographics: {
      ageGroups: [
        { range: '25-34', percentage: 35 },
        { range: '35-44', percentage: 28 },
        { range: '45-54', percentage: 22 },
        { range: '55+', percentage: 15 },
      ],
      topCountries: [
        { country: 'United Kingdom', percentage: 45 },
        { country: 'United States', percentage: 25 },
        { country: 'Canada', percentage: 15 },
        { country: 'Australia', percentage: 10 },
        { country: 'Germany', percentage: 5 },
      ],
    },
    behavior: {
      peakHours: '7-9 PM',
      peakDays: 'Friday-Sunday',
      averageSessionDuration: '4m 32s',
      bounceRate: 42.5,
      returnCustomerRate: 23.5,
    },
    preferences: {
      favoriteColors: ['Silver', 'Gold', 'Rose Gold'],
      popularSizes: ['US 7', 'US 8', 'US 6'],
      seasonalTrends: ['Holiday gifts peak in December', 'Wedding season drives spring sales'],
    },
  },
  competitorAnalysis: {
    marketPosition: 'Top 15%',
    strengths: [
      'High customer satisfaction (4.9/5)',
      'Unique Celtic designs',
      'Fast shipping times',
      'Excellent product quality',
    ],
    weaknesses: [
      'Limited product variety',
      'Lower social media presence',
      'Fewer customer reviews',
      'Limited international shipping',
    ],
    recommendations: [
      'Focus on your unique Celtic designs as a differentiator',
      'Increase social media engagement',
      'Encourage more customer reviews',
      'Consider expanding shipping options',
    ],
  },
};

export default function InsightsPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [isGenerating, setIsGenerating] = useState(false);

  const timeframes = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
    { value: '1y', label: 'Last year' },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-status-success bg-status-success/10';
      case 'Medium': return 'text-status-warning bg-status-warning/10';
      case 'Low': return 'text-text-tertiary bg-surface-secondary';
      default: return 'text-text-tertiary bg-surface-secondary';
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case 'Low': return 'text-status-success bg-status-success/10';
      case 'Medium': return 'text-status-warning bg-status-warning/10';
      case 'High': return 'text-status-error bg-status-error/10';
      default: return 'text-text-tertiary bg-surface-secondary';
    }
  };

  const handleGenerateInsights = () => {
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

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
              <h1 className="text-3xl font-bold text-text-primary flex items-center">
                <Brain className="w-8 h-8 mr-3 text-brand-primary" />
                AI Business Insights
              </h1>
              <p className="text-text-secondary">AI-powered recommendations to grow your business</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="input-base w-auto"
            >
              {timeframes.map((timeframe) => (
                <option key={timeframe.value} value={timeframe.value}>
                  {timeframe.label}
                </option>
              ))}
            </select>
            <button
              onClick={handleGenerateInsights}
              disabled={isGenerating}
              className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Generate Insights
                </>
              )}
            </button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card-base">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-brand-primary" />
              </div>
              <div className="flex items-center space-x-1 text-sm text-status-success">
                <TrendingUp className="w-4 h-4" />
                <span>+{aiInsights.performance.change}%</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary mb-1">{aiInsights.performance.score}</p>
              <p className="text-text-secondary">AI Performance Score</p>
            </div>
          </div>

          <div className="card-base">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-brand-secondary" />
              </div>
              <div className="flex items-center space-x-1 text-sm text-status-success">
                <TrendingUp className="w-4 h-4" />
                <span>+{aiInsights.revenue.growth}%</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary mb-1">£{aiInsights.revenue.current.toLocaleString()}</p>
              <p className="text-text-secondary">Current Revenue</p>
            </div>
          </div>

          <div className="card-base">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-status-success/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-status-success" />
              </div>
              <div className="flex items-center space-x-1 text-sm text-status-success">
                <CheckCircle className="w-4 h-4" />
                <span>{aiInsights.performance.recommendations}</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary mb-1">{aiInsights.performance.recommendations}</p>
              <p className="text-text-secondary">Active Recommendations</p>
            </div>
          </div>

          <div className="card-base">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="flex items-center space-x-1 text-sm text-status-info">
                <Clock className="w-4 h-4" />
                <span>{aiInsights.revenue.confidence}%</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary mb-1">{aiInsights.revenue.confidence}%</p>
              <p className="text-text-secondary">Prediction Confidence</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Growth Opportunities */}
            <div className="card-base">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-primary">Growth Opportunities</h2>
                <span className="bg-brand-primary text-text-inverse px-3 py-1 rounded-full text-sm font-medium">
                  {aiInsights.opportunities.length} recommendations
                </span>
              </div>
              
              <div className="space-y-4">
                {aiInsights.opportunities.map((opportunity) => (
                  <div key={opportunity.id} className="p-4 border border-border-primary rounded-lg hover:bg-surface-secondary transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-text-primary">{opportunity.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(opportunity.impact)}`}>
                          {opportunity.impact} Impact
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEffortColor(opportunity.effort)}`}>
                          {opportunity.effort} Effort
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-3">{opportunity.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-text-tertiary">Category: {opportunity.category}</span>
                        <span className="text-status-success font-medium">
                          Potential: +{opportunity.potentialIncrease}
                        </span>
                      </div>
                      <button className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover text-sm px-4 py-2">
                        Implement
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Trends */}
            <div className="card-base">
              <h2 className="text-xl font-semibold text-text-primary mb-6">Market Trends & Insights</h2>
              
              <div className="space-y-4">
                {aiInsights.marketTrends.map((trend, index) => (
                  <div key={index} className="p-4 bg-surface-secondary rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-brand-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-text-primary mb-1">{trend.category}</h3>
                        <p className="text-text-secondary text-sm mb-2">{trend.trend}</p>
                        <div className="space-y-1">
                          <p className="text-sm text-status-success">
                            <strong>Opportunity:</strong> {trend.opportunity}
                          </p>
                          <p className="text-sm text-brand-primary">
                            <strong>Action:</strong> {trend.action}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Revenue Projection */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Revenue Projection</h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-text-primary mb-2">
                    £{aiInsights.revenue.projected.toLocaleString()}
                  </div>
                  <p className="text-text-secondary">Projected next month</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Current</span>
                    <span className="font-medium text-text-primary">£{aiInsights.revenue.current.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Growth</span>
                    <span className="font-medium text-status-success">+{aiInsights.revenue.growth}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Confidence</span>
                    <span className="font-medium text-text-primary">{aiInsights.revenue.confidence}%</span>
                  </div>
                </div>
                
                <div className="w-full bg-surface-secondary rounded-full h-2">
                  <div
                    className="bg-brand-primary h-2 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Customer Insights */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Customer Insights</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Top Age Groups</h4>
                  <div className="space-y-2">
                    {aiInsights.customerInsights.demographics.ageGroups.map((group, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-text-secondary">{group.range}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-surface-secondary rounded-full">
                            <div
                              className="h-2 bg-brand-primary rounded-full"
                              style={{ width: `${group.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-text-primary">{group.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Peak Activity</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Peak Hours</span>
                      <span className="text-text-primary">{aiInsights.customerInsights.behavior.peakHours}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Peak Days</span>
                      <span className="text-text-primary">{aiInsights.customerInsights.behavior.peakDays}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Return Rate</span>
                      <span className="text-text-primary">{aiInsights.customerInsights.behavior.returnCustomerRate}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitor Analysis */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Competitor Analysis</h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-primary mb-2">{aiInsights.competitorAnalysis.marketPosition}</div>
                  <p className="text-text-secondary">Market Position</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Your Strengths</h4>
                  <ul className="space-y-1">
                    {aiInsights.competitorAnalysis.strengths.map((strength, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-status-success flex-shrink-0" />
                        <span className="text-text-secondary">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Areas to Improve</h4>
                  <ul className="space-y-1">
                    {aiInsights.competitorAnalysis.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <AlertCircle className="w-3 h-3 text-status-warning flex-shrink-0" />
                        <span className="text-text-secondary">{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Download className="w-4 h-4 mr-2" />
                  Export Insights Report
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure AI Settings
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Insights Updates
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Award className="w-4 h-4 mr-2" />
                  View Performance Badges
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
