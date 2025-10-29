import Link from 'next/link';
import { Star, Circle, ArrowRight } from 'lucide-react';

interface Creator {
  id: string;
  name: string;
  specialty: string;
  description: string;
  rating: number;
  productCount: number;
  image?: string;
  href: string;
}

interface FeaturedCreatorsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  creators: Creator[];
  showViewAll?: boolean;
  viewAllHref?: string;
}

const defaultCreators: Creator[] = [
  {
    id: '1',
    name: 'Elena Stone',
    specialty: 'CERAMICS & POTTERY',
    description: 'Hand-thrown ceramics inspired by nature\'s organic forms, each piece a unique testament to traditional pottery techniques and contemporary design.',
    rating: 4.9,
    productCount: 45,
    href: '/artisan/elena-stone'
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    specialty: 'TEXTILES & WEAVING',
    description: 'Sustainable woven textiles using traditional techniques and eco-friendly materials, creating pieces that honor heritage while embracing modern sensibilities.',
    rating: 4.8,
    productCount: 32,
    href: '/artisan/maria-rodriguez'
  },
  {
    id: '3',
    name: 'James Chen',
    specialty: 'LEATHER CRAFT',
    description: 'Handcrafted leather goods with meticulous attention to detail and timeless design principles, creating heirloom-quality pieces for the discerning collector.',
    rating: 4.7,
    productCount: 28,
    href: '/artisan/james-chen'
  }
];

export default function FeaturedCreators({
  title = 'Featured Artisans',
  subtitle = 'ARTISAN COLLECTIVE',
  description = 'Discover exceptional craftspeople who bring artistry, intention, and mastery to every creation.',
  creators = defaultCreators,
  showViewAll = true,
  viewAllHref = '/community/creators'
}: FeaturedCreatorsProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {subtitle && (
            <h3 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-6 font-body">
              {subtitle}
            </h3>
          )}
          <h2 className="text-display-xl text-text-primary mb-6">
            {title}
          </h2>
          <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {creators.map((creator, index) => (
            <Link
              key={creator.id}
              href={creator.href}
              className="card-sophisticated group hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {creator.image ? (
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-28 h-28 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full flex items-center justify-center">
                    <Circle className="w-14 h-14 text-brand-primary" />
                  </div>
                )}
              </div>
              
              <div className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3 font-body">
                {creator.specialty}
              </div>
              
              <h3 className="text-display-sm text-text-primary mb-4 group-hover:text-brand-primary transition-colors">
                {creator.name}
              </h3>
              
              <p className="text-body-sm text-text-secondary leading-relaxed mb-4">
                {creator.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-brand-accent fill-current" />
                  <span className="text-sm text-text-secondary">{creator.rating}</span>
                  <span className="text-sm text-text-tertiary">•</span>
                  <span className="text-sm text-text-tertiary">{creator.productCount} products</span>
                </div>
                <ArrowRight className="w-4 h-4 text-text-tertiary group-hover:text-brand-primary transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href={viewAllHref}
              className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover px-8 py-3"
            >
              View All Artisans
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
