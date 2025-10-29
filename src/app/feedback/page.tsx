import { useState } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  Star, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Heart,
  Lightbulb,
  Bug,
  ArrowRight
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const feedbackTypes = [
  {
    id: 'general',
    title: 'General Feedback',
    description: 'Share your overall experience with Boppel',
    icon: MessageSquare,
    color: 'text-brand-primary'
  },
  {
    id: 'feature',
    title: 'Feature Request',
    description: 'Suggest new features or improvements',
    icon: Lightbulb,
    color: 'text-brand-secondary'
  },
  {
    id: 'bug',
    title: 'Bug Report',
    description: 'Report issues or problems you\'ve encountered',
    icon: Bug,
    color: 'text-status-error'
  },
  {
    id: 'praise',
    title: 'Praise & Appreciation',
    description: 'Share positive experiences and success stories',
    icon: Heart,
    color: 'text-status-success'
  }
];

const ratingLabels = [
  'Very Poor',
  'Poor',
  'Fair',
  'Good',
  'Excellent'
];

export default function FeedbackPage() {
  const [selectedType, setSelectedType] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background-primary">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="w-20 h-20 bg-status-success/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-status-success" />
            </div>
            
            <h1 className="text-3xl font-bold text-text-primary mb-6">
              Thank You for Your Feedback!
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Your feedback has been received and will help us improve Boppel for everyone. 
              We appreciate you taking the time to share your thoughts with us.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedType('');
                  setRating(0);
                  setFeedback('');
                }}
                className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover px-8 py-3"
              >
                Submit Another Feedback
              </button>
              <Link
                href="/"
                className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary px-8 py-3"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Share Your Feedback
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Help us improve Boppel by sharing your thoughts, suggestions, and experiences. 
            Your feedback is invaluable to us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Feedback Type Selection */}
          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              What type of feedback would you like to share?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feedbackTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                    selectedType === type.id
                      ? 'border-brand-primary bg-brand-primary/5'
                      : 'border-border-primary hover:border-brand-primary/50 hover:bg-surface-secondary'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-surface-secondary flex items-center justify-center ${type.color}`}>
                      <type.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">{type.title}</h3>
                      <p className="text-sm text-text-secondary">{type.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Rating Section */}
          {selectedType && (
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-6">
                How would you rate your overall experience?
              </h2>
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? 'text-brand-accent fill-current'
                          : 'text-text-tertiary'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-sm text-text-secondary">
                  {ratingLabels[rating - 1]}
                </p>
              )}
            </div>
          )}

          {/* Feedback Text */}
          {selectedType && (
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-6">
                Tell us more about your experience
              </h2>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Please share your detailed feedback, suggestions, or experiences. The more specific you can be, the better we can help!"
                className="w-full h-40 px-6 py-4 border border-border-primary rounded-xl bg-surface-primary text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 font-body resize-none"
                required
              />
              <p className="text-sm text-text-tertiary mt-2">
                {feedback.length}/1000 characters
              </p>
            </div>
          )}

          {/* Contact Information (Optional) */}
          {selectedType && (
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-6">
                Contact Information (Optional)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="input-base"
                  />
                </div>
              </div>
              <p className="text-sm text-text-tertiary mt-2">
                Providing contact information allows us to follow up with you if needed.
              </p>
            </div>
          )}

          {/* Submit Button */}
          {selectedType && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                type="submit"
                disabled={!selectedType || !feedback.trim() || isSubmitting}
                className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-text-inverse mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Feedback
                  </div>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedType('');
                  setRating(0);
                  setFeedback('');
                }}
                className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary px-8 py-3 text-lg"
              >
                Start Over
              </button>
            </div>
          )}
        </form>

        {/* Additional Information */}
        <div className="mt-16 pt-8 border-t border-border-secondary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">We Read Everything</h3>
              <p className="text-sm text-text-secondary">
                Every piece of feedback is carefully reviewed by our team.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-brand-secondary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">We Act on It</h3>
              <p className="text-sm text-text-secondary">
                Your suggestions help shape the future of Boppel.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">We Appreciate It</h3>
              <p className="text-sm text-text-secondary">
                Your feedback helps us serve the community better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
