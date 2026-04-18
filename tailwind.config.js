/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#60a5fa',
          500: '#6366f1',
          600: '#7c3aed',
        },
        ink: {
          950: '#020617',
          900: '#0b1020',
        },
      },
      boxShadow: {
        glow: '0 0 50px rgba(99, 102, 241, 0.25)',
        neon: '0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(124,58,237,0.25), 0 0 80px rgba(37,99,235,0.18)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 900ms ease-out both',
        shimmer: 'shimmer 2.2s linear infinite',
        blob: 'blob 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(18px, -16px) scale(1.03)' },
          '66%': { transform: 'translate(-14px, 18px) scale(0.98)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

