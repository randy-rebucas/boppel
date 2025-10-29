import Link from 'next/link';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  features?: string[];
  showWaitlist?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  features = [],
  showWaitlist = false
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-5xl">
          {subtitle && (
            <h2 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-6 font-body">
              {subtitle}
            </h2>
          )}
          
          {showWaitlist && (
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Join the Waitlist
            </div>
          )}
          
          <h1 className="text-display-2xl text-text-primary mb-8 leading-tight">
            {title}
          </h1>
          
          <p className="text-body-lg text-text-secondary mb-10 max-w-3xl leading-relaxed">
            {description}
          </p>
          
          {features.length > 0 && (
            <div className="flex flex-wrap items-center gap-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-text-tertiary">
                  <CheckCircle className="w-4 h-4 mr-2 text-status-success" />
                  {feature}
                </div>
              ))}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href={primaryCta.href}
              className="btn-elegant text-lg"
            >
              {primaryCta.text}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="btn-secondary text-lg"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
