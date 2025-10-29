'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { Form, FormField, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-status-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-status-success" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-text-secondary mb-6">
          Thank you for your message. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}
          className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <div className="space-y-2">
              <FormLabel>Full Name *</FormLabel>
              <FormControl
                {...field}
                placeholder="Enter your full name"
                className="input-base"
              />
              <FormMessage />
            </div>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className="space-y-2">
              <FormLabel>Email Address *</FormLabel>
              <FormControl
                {...field}
                type="email"
                placeholder="your@email.com"
                className="input-base"
              />
              <FormMessage />
            </div>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <div className="space-y-2">
            <FormLabel>Subject *</FormLabel>
            <FormControl
              {...field}
              placeholder="What's this about?"
              className="input-base"
            />
            <FormMessage />
          </div>
        )}
      />

      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <div className="space-y-2">
            <FormLabel>Message Type *</FormLabel>
            <select
              {...field}
              className="input-base"
            >
              <option value="general">General Inquiry</option>
              <option value="support">Support Request</option>
              <option value="partnership">Partnership</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
            <FormMessage />
          </div>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <div className="space-y-2">
            <FormLabel>Message *</FormLabel>
            <textarea
              {...field}
              placeholder="Tell us more about your inquiry..."
              className="w-full h-40 px-6 py-4 border border-border-primary rounded-xl bg-surface-primary text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 font-body resize-none"
            />
            <FormMessage />
          </div>
        )}
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover disabled:opacity-50 disabled:cursor-not-allowed flex-1"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-text-inverse mr-2"></div>
              Sending...
            </div>
          ) : (
            <div className="flex items-center">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </div>
          )}
        </Button>
        
        <Button
          type="button"
          onClick={() => form.reset()}
          className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary flex-1"
        >
          Clear Form
        </Button>
      </div>
    </Form>
  );
}
