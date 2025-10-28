import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Palette, Users, Leaf, Shield, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';

const features = [
  {
    icon: Palette,
    title: 'Creative Tools',
    description: 'Comprehensive business management tools designed for artisans',
  },
  {
    icon: Users,
    title: 'Vibrant Community',
    description: 'Connect with fellow creators and share knowledge',
  },
  {
    icon: Leaf,
    title: 'Sustainability Focus',
    description: 'Craft swaps and eco-friendly practices',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'Verified sellers and purchase protection',
  },
];

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for new creators',
    features: [
      'Up to 10 products',
      'Basic analytics',
      'Community access',
      'Standard support',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Maker',
    price: '£9.99',
    period: '/month',
    description: 'For growing businesses',
    features: [
      'Unlimited products',
      'Advanced analytics',
      'Priority support',
      'Marketing tools',
      'Workshop hosting',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Pro Maker',
    price: '£19.99',
    period: '/month',
    description: 'For established creators',
    features: [
      'Everything in Maker',
      'AI business insights',
      'Multi-marketplace sync',
      'Wholesale tools',
      'Dedicated support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-text-inverse mb-6 text-balance">
            Start Your Creative
            <span className="block text-brand-accent">Business Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-inverse/90 mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of creators who are building successful businesses on Boppel. 
            Choose your plan and start selling today.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Boppel provides all the tools, community, and support you need to turn your creative passion into a thriving business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-base text-center group hover:shadow-elevated transition-all duration-300">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Start free and upgrade as you grow. All plans include our core marketplace features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-base relative ${
                  plan.popular ? 'ring-2 ring-brand-primary shadow-elevated' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-primary text-text-inverse px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                    {plan.period && (
                      <span className="text-text-secondary ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-text-secondary">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-status-success flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/auth/sign-up"
                  className={`block w-full text-center btn-base ${
                    plan.popular
                      ? 'bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover'
                      : 'border border-border-primary text-text-primary hover:bg-surface-secondary'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Join Successful Creators
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              See how Boppel has helped artisans build thriving businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-base">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">Sarah's Jewelry Studio</h3>
                  <p className="text-text-secondary">Handcrafted Silver Jewelry</p>
                </div>
              </div>
              <blockquote className="text-text-secondary italic mb-4">
                "I started with the free plan and upgraded to Maker as my business grew. 
                The tools and community support have been incredible. I've increased my sales by 300% in just 6 months!"
              </blockquote>
              <div className="text-sm text-text-tertiary">
                <strong>Sarah M.</strong> - Maker Plan User
              </div>
            </div>

            <div className="card-base">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <Palette className="w-8 h-8 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">Mike's Woodcraft</h3>
                  <p className="text-text-secondary">Sustainable Wood Products</p>
                </div>
              </div>
              <blockquote className="text-text-secondary italic mb-4">
                "The Pro Maker plan gave me access to AI insights that helped me optimize my product listings. 
                The multi-marketplace sync feature saves me hours every week."
              </blockquote>
              <div className="text-sm text-text-tertiary">
                <strong>Mike R.</strong> - Pro Maker Plan User
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-inverse mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-inverse/90 mb-8">
            Join thousands of creators who are building successful businesses on Boppel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/sign-up"
              className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90 text-lg px-8 py-4"
            >
              Start Free Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/explore"
              className="btn-base border-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-text-primary text-lg px-8 py-4"
            >
              Browse Products First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
