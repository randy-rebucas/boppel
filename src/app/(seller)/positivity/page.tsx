'use client';

import { useState } from 'react';
import { 
  Heart, 
  Sun, 
  Moon, 
  Smile, 
  Brain, 
  Activity,
  BookOpen,
  Play,
  Pause,
  RotateCcw,
  TrendingUp,
  Calendar,
  CheckCircle,
  Star,
  Quote,
  Plus,
  Edit3
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const dailyAffirmations = [
  "I am a talented creator with unique gifts to share with the world.",
  "My creativity flows freely and brings joy to others.",
  "I trust in my artistic vision and creative process.",
  "Every challenge is an opportunity to grow and improve.",
  "I am worthy of success and recognition for my work.",
  "My creativity is a gift that enriches the world around me.",
  "I embrace my imperfections as part of my unique artistic voice.",
  "I am confident in my ability to create beautiful things.",
];

const meditationSessions = [
  {
    id: '1',
    title: 'Morning Creativity Flow',
    duration: '10 minutes',
    type: 'Guided Meditation',
    description: 'Start your day with intention and creative energy.',
    category: 'Morning',
  },
  {
    id: '2',
    title: 'Overcoming Creative Blocks',
    duration: '15 minutes',
    type: 'Visualization',
    description: 'Release mental barriers and unlock your creative potential.',
    category: 'Problem Solving',
  },
  {
    id: '3',
    title: 'Evening Gratitude',
    duration: '8 minutes',
    type: 'Mindfulness',
    description: 'Reflect on your creative journey and practice gratitude.',
    category: 'Evening',
  },
  {
    id: '4',
    title: 'Stress Relief for Creators',
    duration: '20 minutes',
    type: 'Body Scan',
    description: 'Release tension and find peace in your creative practice.',
    category: 'Stress Relief',
  },
];

const moodOptions = [
  { emoji: '😊', label: 'Happy', value: 'happy' },
  { emoji: '😌', label: 'Peaceful', value: 'peaceful' },
  { emoji: '😔', label: 'Sad', value: 'sad' },
  { emoji: '😰', label: 'Anxious', value: 'anxious' },
  { emoji: '😤', label: 'Frustrated', value: 'frustrated' },
  { emoji: '😴', label: 'Tired', value: 'tired' },
  { emoji: '🤔', label: 'Thoughtful', value: 'thoughtful' },
  { emoji: '😍', label: 'Excited', value: 'excited' },
];

export default function PositivityPage() {
  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  const [selectedMood, setSelectedMood] = useState('');
  const [journalEntry, setJournalEntry] = useState('');
  const [isMeditationPlaying, setIsMeditationPlaying] = useState(false);
  const [streak, setStreak] = useState(7);

  const nextAffirmation = () => {
    setCurrentAffirmation((prev) => (prev + 1) % dailyAffirmations.length);
  };

  const previousAffirmation = () => {
    setCurrentAffirmation((prev) => (prev - 1 + dailyAffirmations.length) % dailyAffirmations.length);
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleJournalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle journal entry submission
    console.log('Journal entry:', journalEntry);
    setJournalEntry('');
  };

  const toggleMeditation = () => {
    setIsMeditationPlaying(!isMeditationPlaying);
  };

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Positivity Hub
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Nurture your mental wellness and creative spirit with daily affirmations, meditation, and mindful practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Daily Affirmation */}
            <div className="card-base">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary flex items-center">
                  <Sun className="w-6 h-6 mr-2 text-brand-accent" />
                  Daily Affirmation
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={previousAffirmation}
                    className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextAffirmation}
                    className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
                  >
                    <RotateCcw className="w-4 h-4 rotate-180" />
                  </button>
                </div>
              </div>
              
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-brand-accent" />
                </div>
                <blockquote className="text-2xl font-medium text-text-primary mb-6 italic">
                  "{dailyAffirmations[currentAffirmation]}"
                </blockquote>
                <p className="text-text-secondary">
                  {currentAffirmation + 1} of {dailyAffirmations.length}
                </p>
              </div>
            </div>

            {/* Mood Tracking */}
            <div className="card-base">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-status-error" />
                How are you feeling today?
              </h2>
              
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-6">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => handleMoodSelect(mood.value)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedMood === mood.value
                        ? 'border-brand-primary bg-brand-primary/10'
                        : 'border-border-primary hover:border-border-accent'
                    }`}
                  >
                    <div className="text-3xl mb-2">{mood.emoji}</div>
                    <div className="text-sm font-medium text-text-primary">{mood.label}</div>
                  </button>
                ))}
              </div>
              
              {selectedMood && (
                <div className="bg-surface-secondary p-4 rounded-lg">
                  <p className="text-text-primary">
                    Great! You're feeling {moodOptions.find(m => m.value === selectedMood)?.label.toLowerCase()}. 
                    Take a moment to appreciate this feeling.
                  </p>
                </div>
              )}
            </div>

            {/* Creative Journal */}
            <div className="card-base">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-brand-primary" />
                Creative Journal
              </h2>
              
              <form onSubmit={handleJournalSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    What's inspiring you today?
                  </label>
                  <textarea
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    rows={6}
                    className="input-base resize-none"
                    placeholder="Share your thoughts, ideas, or reflections on your creative journey..."
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-text-tertiary">
                    {journalEntry.length}/500 characters
                  </p>
                  <button
                    type="submit"
                    className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Save Entry
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Wellness Stats */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Your Wellness Journey</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">{streak}</div>
                  <div className="text-text-secondary">Day Streak</div>
                  <div className="w-full bg-surface-secondary rounded-full h-2 mt-2">
                    <div className="bg-brand-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-text-primary">12</div>
                    <div className="text-sm text-text-secondary">Meditations</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-text-primary">8</div>
                    <div className="text-sm text-text-secondary">Journal Entries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meditation Sessions */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Meditation Sessions</h3>
              
              <div className="space-y-4">
                {meditationSessions.map((session) => (
                  <div key={session.id} className="p-4 border border-border-primary rounded-lg hover:bg-surface-secondary transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-text-primary">{session.title}</h4>
                      <span className="text-xs text-text-tertiary bg-surface-secondary px-2 py-1 rounded-full">
                        {session.category}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mb-3">{session.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-tertiary">{session.duration}</span>
                      <button
                        onClick={toggleMeditation}
                        className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover text-sm px-4 py-2"
                      >
                        {isMeditationPlaying ? (
                          <>
                            <Pause className="w-3 h-3 mr-1" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3 mr-1" />
                            Play
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Brain className="w-4 h-4 mr-2" />
                  Take a Breathing Exercise
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Activity className="w-4 h-4 mr-2" />
                  Set Today's Intention
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Self-Care Time
                </button>
                <button className="w-full btn-base border border-border-primary text-text-primary hover:bg-surface-secondary text-left">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Progress
                </button>
              </div>
            </div>

            {/* Wellness Tips */}
            <div className="card-base">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Wellness Tips</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-brand-primary/10 rounded-lg">
                  <h4 className="font-medium text-text-primary mb-2">Morning Routine</h4>
                  <p className="text-sm text-text-secondary">
                    Start your day with 5 minutes of deep breathing to set a positive tone.
                  </p>
                </div>
                
                <div className="p-4 bg-brand-secondary/10 rounded-lg">
                  <h4 className="font-medium text-text-primary mb-2">Creative Breaks</h4>
                  <p className="text-sm text-text-secondary">
                    Take a 10-minute walk every 2 hours to refresh your mind and body.
                  </p>
                </div>
                
                <div className="p-4 bg-status-success/10 rounded-lg">
                  <h4 className="font-medium text-text-primary mb-2">Evening Reflection</h4>
                  <p className="text-sm text-text-secondary">
                    End your day by writing down three things you're grateful for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
