/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand-primary': 'hsl(var(--brand-primary))',
        'brand-secondary': 'hsl(var(--brand-secondary))',
        'brand-accent': 'hsl(var(--brand-accent))',
        'brand-muted': 'hsl(var(--brand-muted))',
        
        // Background Colors
        'background-primary': 'hsl(var(--background-primary))',
        'background-secondary': 'hsl(var(--background-secondary))',
        'background-tertiary': 'hsl(var(--background-tertiary))',
        'background-elevated': 'hsl(var(--background-elevated))',
        'background-overlay': 'hsl(var(--background-overlay))',
        
        // Text Colors
        'text-primary': 'hsl(var(--text-primary))',
        'text-secondary': 'hsl(var(--text-secondary))',
        'text-tertiary': 'hsl(var(--text-tertiary))',
        'text-inverse': 'hsl(var(--text-inverse))',
        'text-accent': 'hsl(var(--text-accent))',
        
        // Border Colors
        'border-primary': 'hsl(var(--border-primary))',
        'border-secondary': 'hsl(var(--border-secondary))',
        'border-accent': 'hsl(var(--border-accent))',
        'border-focus': 'hsl(var(--border-focus))',
        
        // Status Colors
        'status-success': 'hsl(var(--status-success))',
        'status-warning': 'hsl(var(--status-warning))',
        'status-error': 'hsl(var(--status-error))',
        'status-info': 'hsl(var(--status-info))',
        
        // Interactive Colors
        'interactive-primary': 'hsl(var(--interactive-primary))',
        'interactive-primary-hover': 'hsl(var(--interactive-primary-hover))',
        'interactive-primary-active': 'hsl(var(--interactive-primary-active))',
        'interactive-secondary': 'hsl(var(--interactive-secondary))',
        'interactive-secondary-hover': 'hsl(var(--interactive-secondary-hover))',
        'interactive-tertiary': 'hsl(var(--interactive-tertiary))',
        'interactive-tertiary-hover': 'hsl(var(--interactive-tertiary-hover))',
        
        // Surface Colors
        'surface-primary': 'hsl(var(--surface-primary))',
        'surface-secondary': 'hsl(var(--surface-secondary))',
        'surface-elevated': 'hsl(var(--surface-elevated))',
        'surface-overlay': 'hsl(var(--surface-overlay))',
      },
      
      backgroundImage: {
        'gradient-brand': 'linear-gradient(var(--gradient-brand))',
        'gradient-surface': 'linear-gradient(var(--gradient-surface))',
        'gradient-accent': 'linear-gradient(var(--gradient-accent))',
        'gradient-hero': 'linear-gradient(var(--gradient-hero))',
      },
      
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'inner': 'var(--shadow-inner)',
        'focus': 'var(--shadow-focus)',
        'elevated': 'var(--shadow-elevated)',
      },
      
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      
      animation: {
        'fade-in': 'fadeIn var(--animation-duration-normal) var(--animation-easing-standard)',
        'fade-out': 'fadeOut var(--animation-duration-normal) var(--animation-easing-standard)',
        'slide-in-up': 'slideInUp var(--animation-duration-normal) var(--animation-easing-standard)',
        'slide-in-down': 'slideInDown var(--animation-duration-normal) var(--animation-easing-standard)',
        'scale-in': 'scaleIn var(--animation-duration-fast) var(--animation-easing-standard)',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-soft': 'pulseSoft 2s infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
