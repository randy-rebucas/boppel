import Link from 'next/link';
import { 
  Leaf, 
  Recycle, 
  Heart, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  TreePine,
  Droplets,
  Wind,
  Sun,
  Shield
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const sustainabilityInitiatives = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Materials',
    description: 'We encourage and promote the use of sustainable, recycled, and environmentally friendly materials in all products.',
    details: [
      'Organic and natural materials preferred',
      'Recycled and upcycled components',
      'Biodegradable packaging options',
      'Non-toxic and chemical-free processes'
    ]
  },
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'Supporting a circular economy model where products are designed to last and be repurposed or recycled.',
    details: [
      'Repair and restoration services',
      'Product lifecycle extension',
      'Take-back programs for old items',
      'Upcycling and repurposing workshops'
    ]
  },
  {
    icon: Users,
    title: 'Local Artisan Support',
    description: 'Supporting local communities and reducing carbon footprint by promoting local artisans and suppliers.',
    details: [
      'Local sourcing prioritization',
      'Community-based workshops',
      'Fair trade practices',
      'Cultural preservation support'
    ]
  },
  {
    icon: Award,
    title: 'Sustainability Certification',
    description: 'Recognizing and certifying artisans who meet our environmental and social responsibility standards.',
    details: [
      'Green certification program',
      'Sustainability scorecards',
      'Annual impact assessments',
      'Recognition and rewards system'
    ]
  }
];

const impactStats = [
  {
    number: '85%',
    label: 'of artisans use sustainable materials',
    icon: Leaf
  },
  {
    number: '2.3M',
    label: 'pounds of waste diverted from landfills',
    icon: Recycle
  },
  {
    number: '1,200+',
    label: 'local artisans supported',
    icon: Users
  },
  {
    number: '45%',
    label: 'reduction in packaging waste',
    icon: Award
  }
];

const greenPractices = [
  {
    title: 'Carbon Neutral Shipping',
    description: 'All shipping is carbon neutral through verified offset programs.',
    icon: Wind
  },
  {
    title: 'Renewable Energy',
    description: 'Our platform runs on 100% renewable energy sources.',
    icon: Sun
  },
  {
    title: 'Water Conservation',
    description: 'Supporting water-efficient production processes and conservation.',
    icon: Droplets
  },
  {
    title: 'Biodiversity Protection',
    description: 'Protecting natural habitats and promoting biodiversity-friendly practices.',
    icon: TreePine
  }
];

const sustainabilityTips = [
  {
    title: 'Choose Quality Over Quantity',
    description: 'Invest in well-made, durable items that will last for years rather than disposable alternatives.',
    icon: Award
  },
  {
    title: 'Support Local Makers',
    description: 'Buying from local artisans reduces transportation emissions and supports your community.',
    icon: Users
  },
  {
    title: 'Look for Certifications',
    description: 'Choose products with sustainability certifications and eco-friendly labels.',
    icon: Shield
  },
  {
    title: 'Consider the Full Lifecycle',
    description: 'Think about how products can be repaired, repurposed, or recycled at end of life.',
    icon: Recycle
  }
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-status-success/10 text-status-success text-sm font-medium mb-8">
              <Leaf className="w-4 h-4 mr-2" />
              Sustainability
            </div>
            
            <h1 className="text-display-2xl text-text-primary mb-8 leading-tight">
              Building a Sustainable Future
            </h1>
            
            <p className="text-body-lg text-text-secondary mb-10 leading-relaxed">
              At Boppel, we believe in creating a marketplace that not only celebrates craftsmanship 
              but also protects our planet for future generations. Every purchase supports sustainable practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/explore?filter=sustainable"
                className="btn-elegant text-lg px-8 py-4"
              >
                Shop Sustainable Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/community"
                className="btn-secondary text-lg px-8 py-4"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display-xl text-text-primary mb-6">
              Our Impact
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Together with our community of artisans and buyers, we're making a real difference for the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="card-sophisticated text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-brand-primary" />
                </div>
                <div className="text-3xl font-bold text-text-primary mb-2">{stat.number}</div>
                <p className="text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-24 bg-gradient-to-b from-background-secondary to-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              Our Sustainability Initiatives
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              We've implemented comprehensive programs to ensure our marketplace operates sustainably and responsibly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sustainabilityInitiatives.map((initiative, index) => (
              <div key={index} className="card-sophisticated">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <initiative.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-display-lg text-text-primary mb-4">{initiative.title}</h3>
                    <p className="text-body-md text-text-secondary leading-relaxed mb-6">
                      {initiative.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {initiative.details.map((detail, detailIndex) => (
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

      {/* Green Practices */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              Our Green Practices
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              From our operations to our partnerships, sustainability is at the core of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {greenPractices.map((practice, index) => (
              <div key={index} className="card-sophisticated text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <practice.icon className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-display-sm text-text-primary mb-4">{practice.title}</h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Buyers */}
      <section className="py-24 bg-gradient-to-b from-background-secondary to-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-display-xl text-text-primary mb-6">
              How You Can Make a Difference
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Every purchase decision you make has an impact. Here are some ways to shop more sustainably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityTips.map((tip, index) => (
              <div key={index} className="card-sophisticated">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <tip.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">{tip.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-display-xl text-text-inverse mb-6">
            Join Our Sustainable Community
          </h2>
          <p className="text-body-lg text-text-inverse/90 mb-10 max-w-2xl mx-auto">
            Together, we can create a more sustainable future through conscious consumption and responsible craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/explore?filter=sustainable"
              className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90 text-lg px-8 py-4"
            >
              Shop Sustainably
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/auth/get-started"
              className="btn-base border-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-text-primary text-lg px-8 py-4"
            >
              Become a Sustainable Artisan
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
              Where every creation tells a story.
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
