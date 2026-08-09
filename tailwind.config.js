/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Marketplace platform colors
        platform: {
          bg: '#0A0F1C',
          surface: '#111827',
          card: '#1A2235',
          border: '#1F2D45',
          primary: '#6366F1',
          accent: '#8B5CF6',
          gold: '#F59E0B',
          text: '#F9FAFB',
          muted: '#9CA3AF',
          subtle: '#6B7280',
        },
        // Happy Kids theme
        playkids: {
          primary: '#FF6B6B',
          secondary: '#4ECDC4',
          accent: '#FFE66D',
          purple: '#A855F7',
          green: '#10B981',
          bg: '#FFF9F0',
          card: '#FFFFFF',
          text: '#2D3436',
          muted: '#636E72',
        },
        // Modern Academy theme
        academy: {
          primary: '#1E3A5F',
          secondary: '#C9A84C',
          accent: '#2563EB',
          bg: '#F8FAFC',
          card: '#FFFFFF',
          dark: '#0F172A',
          text: '#1E293B',
          muted: '#64748B',
          light: '#E2E8F0',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200%',
      },
      boxShadow: {
        'glow-indigo': '0 0 30px rgba(99, 102, 241, 0.4)',
        'glow-violet': '0 0 30px rgba(139, 92, 246, 0.4)',
        'glow-coral': '0 0 30px rgba(255, 107, 107, 0.3)',
        'glow-teal': '0 0 30px rgba(78, 205, 196, 0.3)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.3)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
