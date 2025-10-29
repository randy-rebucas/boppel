import { CheckCircle, Search, Users, ShoppingCart, Heart } from 'lucide-react';

interface Step {
  step: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
}

interface HowItWorksProps {
  title?: string;
  description?: string;
  steps?: Step[];
  showCta?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

const defaultSteps: Step[] = [
  {
    step: 1,
    title: 'Create or Discover',
    description: 'Whether you\'re a creator looking to sell or a buyer seeking unique items, Boppel connects you with authentic handmade and digital creations.',
    icon: Search,
    details: [
      'Browse curated collections',
      'Search by category or artisan',
      'Filter by price and style',
      'Read detailed descriptions'
    ]
  },
  {
    step: 2,
    title: 'Quality Verified',
    description: 'Every creator and product is carefully vetted to ensure authenticity and quality. We maintain high standards for our community.',
    icon: Users,
    details: [
      'Verified artisan profiles',
      'Quality standards compliance',
      'Authentic product verification',
      'Community guidelines enforcement'
    ]
  },
  {
    step: 3,
    title: 'Support Creators',
    description: 'When you buy on Boppel, you\'re directly supporting the artist. No middlemen, no hidden fees - just fair compensation for creators.',
    icon: ShoppingCart,
    details: [
      'Direct payment to artisans',
      'No commission fees',
      'Secure transaction processing',
      'Purchase protection included'
    ]
  }
];

export default function HowItWorks({
  title = 'How Boppel Works',
  description = 'A simple, transparent process that connects authentic artisans with discerning collectors.',
  steps = defaultSteps,
  showCta = true,
  ctaText = 'Get Started',
  ctaHref = '/auth/get-started'
}: HowItWorksProps) {
  return (
    <section className="py-24 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
            {title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {step.description}
              </p>
              <ul className="space-y-2 text-left">
                {step.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-status-success mr-2 flex-shrink-0 mt-0.5" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {showCta && (
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={ctaHref}
                className="btn-primary"
              >
                {ctaText}
              </a>
              <a
                href="/community"
                className="btn-secondary"
              >
                Join the Community
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
