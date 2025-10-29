import { z } from 'zod';

// User Authentication Schemas
export const signUpSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms and conditions'),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

// Product Schemas
export const productSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().min(0.01, 'Price must be greater than 0'),
  category: z.string().min(1, 'Please select a category'),
  productType: z.enum(['physical', 'digital'], {
    required_error: 'Please select a product type',
  }),
  stockQuantity: z.number().min(0).optional(),
  tags: z.array(z.string()).optional(),
  images: z.array(z.string()).min(1, 'At least one image is required'),
  dimensions: z.object({
    length: z.number().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    weight: z.number().optional(),
  }).optional(),
  materials: z.array(z.string()).optional(),
  isHandmade: z.boolean().default(true),
  isCustomizable: z.boolean().default(false),
  processingTime: z.number().min(1).optional(),
  shippingInfo: z.object({
    freeShipping: z.boolean().default(false),
    shippingCost: z.number().min(0).optional(),
    estimatedDays: z.number().min(1).optional(),
  }).optional(),
});

// Artisan Profile Schema
export const artisanProfileSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  bio: z.string().min(50, 'Bio must be at least 50 characters'),
  specialties: z.array(z.string()).min(1, 'Please select at least one specialty'),
  experience: z.number().min(1, 'Experience must be at least 1 year'),
  location: z.object({
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    country: z.string().min(2, 'Country is required'),
  }),
  socialLinks: z.object({
    website: z.string().url().optional().or(z.literal('')),
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    twitter: z.string().optional(),
  }).optional(),
  portfolio: z.array(z.string()).min(1, 'Please upload at least one portfolio image'),
  certifications: z.array(z.string()).optional(),
  sustainabilityPractices: z.array(z.string()).optional(),
});

// Contact Form Schema
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  type: z.enum(['general', 'support', 'partnership', 'feedback', 'other']),
});

// Feedback Schema
export const feedbackSchema = z.object({
  type: z.enum(['general', 'feature', 'bug', 'praise']),
  rating: z.number().min(1).max(5),
  feedback: z.string().min(10, 'Feedback must be at least 10 characters'),
  name: z.string().optional(),
  email: z.string().email().optional(),
  allowFollowUp: z.boolean().default(false),
});

// Search Schema
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
  category: z.string().optional(),
  priceMin: z.number().min(0).optional(),
  priceMax: z.number().min(0).optional(),
  location: z.string().optional(),
  sortBy: z.enum(['relevance', 'price_low', 'price_high', 'newest', 'rating']).optional(),
  filters: z.object({
    handmade: z.boolean().optional(),
    customizable: z.boolean().optional(),
    sustainable: z.boolean().optional(),
    verified: z.boolean().optional(),
  }).optional(),
});

// Newsletter Schema
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  interests: z.array(z.string()).optional(),
  frequency: z.enum(['weekly', 'monthly']).default('weekly'),
});

// Review Schema
export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  title: z.string().min(5, 'Title must be at least 5 characters'),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
  images: z.array(z.string()).optional(),
  recommend: z.boolean().default(true),
});

// Type exports
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type ProductFormData = z.infer<typeof productSchema>;
export type ArtisanProfileFormData = z.infer<typeof artisanProfileSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type FeedbackFormData = z.infer<typeof feedbackSchema>;
export type SearchFormData = z.infer<typeof searchSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type ReviewFormData = z.infer<typeof reviewSchema>;
