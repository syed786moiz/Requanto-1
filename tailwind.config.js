/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Requanto enterprise palette
        ink: {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        brand: {
          DEFAULT: '#FFE600',
          50: '#FFFDE8',
          100: '#FFF9BF',
          200: '#FFF275',
          300: '#FFEE33',
          400: '#FFE600',
          500: '#F5DC00',
          600: '#D4C700',
          700: '#B8AB00',
          800: '#958800',
          900: '#7A7200',
        },
        accent: {
          DEFAULT: '#FFE600',
          light: '#FFF275',
          dark: '#D4C700',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        section: '#F8FAFC',
        line: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-xl': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-lg': ['clamp(1.875rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      boxShadow: {
        premium: '0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 8px 24px -8px rgba(15, 23, 42, 0.12)',
        premiumLg: '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 18px 48px -12px rgba(15, 23, 42, 0.18)',
        glow: '0 0 0 1px rgba(255, 230, 0, 0.15), 0 12px 40px -8px rgba(255, 230, 0, 0.28)',
        accentGlow: '0 0 0 1px rgba(255, 230, 0, 0.2), 0 12px 40px -8px rgba(255, 230, 0, 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'orbit-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-rev': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        dash: {
          '0%': { strokeDashoffset: '40' },
          '100%': { strokeDashoffset: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        'orbit-slow': 'orbit-slow 40s linear infinite',
        'orbit-rev': 'orbit-rev 50s linear infinite',
        dash: 'dash 1.2s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'float-y': 'float-y 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
