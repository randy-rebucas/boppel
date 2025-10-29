import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/forms/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    value: 'hello@boppel.com',
    href: 'mailto:hello@boppel.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our support team',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello at our office',
    value: '123 Artisan Street, Creative City, CC 12345',
    href: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'We\'re here to help',
    value: 'Mon-Fri: 9AM-6PM PST',
    href: '#'
  }
];

const faqs = [
  {
    question: 'How do I become a seller on Boppel?',
    answer: 'Simply click "Start Selling" in the navigation, create your account, and follow our verification process. It\'s free to get started!'
  },
  {
    question: 'What are the fees for selling?',
    answer: 'Boppel has no commission fees! You keep 100% of your earnings. We only charge for optional premium features.'
  },
  {
    question: 'How do I track my orders?',
    answer: 'You can track your orders in your dashboard. We\'ll also send you email updates at each stage of the process.'
  },
  {
    question: 'What if I have a problem with my order?',
    answer: 'Contact our support team immediately. We have a comprehensive dispute resolution process to ensure fair outcomes for everyone.'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-display-2xl text-text-primary mb-8 leading-tight">
              Get in Touch
            </h1>
            <p className="text-body-lg text-text-secondary mb-10 leading-relaxed">
              Have a question, suggestion, or need help? We'd love to hear from you. 
              Our team is here to help make your Boppel experience amazing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display-xl text-text-primary mb-6">
              Ways to Reach Us
            </h2>
            <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Link
                key={index}
                href={info.href}
                className="card-sophisticated text-center group hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-display-sm text-text-primary mb-4 group-hover:text-brand-primary transition-colors">
                  {info.title}
                </h3>
                <p className="text-body-sm text-text-secondary mb-4">
                  {info.description}
                </p>
                <p className="text-sm font-medium text-brand-primary">
                  {info.value}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-b from-background-secondary to-background-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display-xl text-text-primary mb-6">
              Send us a Message
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="card-sophisticated">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-background-primary to-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display-xl text-text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? 
              <Link href="#contact-form" className="text-brand-primary hover:underline ml-1">
                Send us a message
              </Link>
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-base">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-display-xl text-text-inverse mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-body-lg text-text-inverse/90 mb-10 max-w-2xl mx-auto">
            Join thousands of artisans and buyers who are already part of the Boppel community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/auth/get-started"
              className="btn-base bg-text-inverse text-text-primary hover:bg-text-inverse/90 text-lg px-8 py-4"
            >
              Start Selling
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/explore"
              className="btn-base border-2 border-text-inverse text-text-inverse hover:bg-text-inverse hover:text-text-primary text-lg px-8 py-4"
            >
              Start Shopping
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
