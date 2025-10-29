import Link from 'next/link';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  CreditCard, 
  MessageSquare,
  Star,
  Lock,
  Eye,
  FileText,
  ArrowRight
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const safetyFeatures = [
  {
    icon: Shield,
    title: 'Verified Artisans',
    description: 'Every creator undergoes a thorough verification process including identity verification, portfolio review, and quality assessment.',
    details: [
      'Government ID verification',
      'Portfolio and work samples review',
      'Reference checks from previous customers',
      'Quality standards compliance check'
    ]
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'All transactions are processed through secure, encrypted payment systems with full purchase protection.',
    details: [
      'PCI DSS compliant payment processing',
      'Encrypted data transmission',
      'Fraud detection and prevention',
      'Chargeback protection for buyers'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Dispute Resolution',
    description: 'Our dedicated support team helps resolve any issues between buyers and sellers fairly and quickly.',
    details: [
      '24/7 customer support',
      'Fair dispute resolution process',
      'Mediation services when needed',
      'Clear refund and return policies'
    ]
  },
  {
    icon: Eye,
    title: 'Transparent Reviews',
    description: 'Honest feedback system ensures quality and helps build trust within our community.',
    details: [
      'Verified purchase reviews only',
      'No fake or manipulated reviews',
      'Detailed rating system',
      'Response system for sellers'
    ]
  }
];

const policies = [
  {
    title: 'Buyer Protection',
    icon: Shield,
    items: [
      'Full refund if item doesn\'t match description',
      'Protection against non-delivery',
      'Coverage for damaged items in transit',
      'Dispute resolution within 48 hours'
    ]
  },
  {
    title: 'Seller Protection',
    icon: Users,
    items: [
      'Payment protection against chargebacks',
      'Clear terms of service',
      'Support for custom work disputes',
      'Intellectual property protection'
    ]
  },
  {
    title: 'Community Guidelines',
    icon: FileText,
    items: [
      'Respectful communication standards',
      'No harassment or discrimination',
      'Authentic product representations',
      'Environmental responsibility'
    ]
  }
];

const securityMeasures = [
  {
    title: 'Data Protection',
    description: 'Your personal information is protected with industry-standard encryption and security measures.',
    icon: Lock
  },
  {
    title: 'Secure Transactions',
    description: 'All payments are processed through secure, encrypted channels with fraud protection.',
    icon: CreditCard
  },
  {
    title: 'Privacy First',
    description: 'We never share your personal information with third parties without your explicit consent.',
    icon: Eye
  }
];

export default function TrustAndSafetyPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-status-success/10 text-status-success text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Trust & Safety
            </div>
            
            <h1 className="text-display-2xl text-text-primary mb-8 leading-tight">
              Your Safety is Our Priority
            </h1>
            
            <p className="text-body-lg text-text-secondary mb-10 leading-relaxed">
              At Boppel, we've built comprehensive safety measures to ensure every transaction 
              is secure, every artisan is verified, and every buyer is protected.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/explore"
                className="btn-elegant text-lg px-8 py-4"
              >
                Shop with Confidence
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-lg px-8 py-4"
              >
                Report an Issue
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              Comprehensive Safety Measures
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              We've implemented multiple layers of protection to ensure a safe and trustworthy marketplace experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="card-sophisticated">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-display-lg text-text-primary mb-4">{feature.title}</h3>
                    <p className="text-body-md text-text-secondary leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-status-success mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-24 bg-gradient-to-b from-background-secondary to-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              Clear Policies for Everyone
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Transparent policies that protect both buyers and sellers while maintaining a fair marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="card-sophisticated text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <policy.icon className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-display-sm text-text-primary mb-6">{policy.title}</h3>
                <ul className="space-y-3 text-left">
                  {policy.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-status-success mr-3 flex-shrink-0 mt-1" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              Your Data is Secure
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              We use industry-leading security measures to protect your personal information and transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="card-sophisticated text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <measure.icon className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-display-sm text-text-primary mb-4">{measure.title}</h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {measure.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-24 bg-gradient-to-b from-background-secondary to-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              Trust Indicators
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Look for these indicators to ensure you're dealing with verified, trustworthy artisans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-sophisticated text-center">
              <div className="w-16 h-16 bg-status-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-status-success" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Verified Badge</h3>
              <p className="text-sm text-text-secondary">Identity and quality verified</p>
            </div>

            <div className="card-sophisticated text-center">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">High Ratings</h3>
              <p className="text-sm text-text-secondary">4.5+ star average rating</p>
            </div>

            <div className="card-sophisticated text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Active Community</h3>
              <p className="text-sm text-text-secondary">Regular engagement and updates</p>
            </div>

            <div className="card-sophisticated text-center">
              <div className="w-16 h-16 bg-status-info/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-status-info" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Responsive</h3>
              <p className="text-sm text-text-secondary">Quick response to messages</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-display-xl text-text-inverse mb-6">
            Questions About Safety?
          </h2>
          <p className="text-body-lg text-text-inverse/90 mb-10 max-w-2xl mx-auto">
            Our support team is here to help with any safety concerns or questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90 text-lg px-8 py-4"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/policies"
              className="btn-base border-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-text-primary text-lg px-8 py-4"
            >
              Read Full Policies
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-primary border-t border-border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4 font-display">
              BOPPEL ATELIER
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Where craftsmanship meets elegance. Where tradition meets innovation.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-text-tertiary">
              <Link href="/about" className="hover:text-text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-text-primary transition-colors">
                Contact
              </Link>
              <Link href="/policies" className="hover:text-text-primary transition-colors">
                Policies
              </Link>
            </div>
          </div>
          <div className="border-t border-border-primary mt-12 pt-8 text-center">
            <p className="text-text-tertiary text-sm">
              &copy; Boppel 2025 – Built with love for creative lives.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
