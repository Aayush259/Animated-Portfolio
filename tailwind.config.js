/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(green|sky)-400/,
      variants: ['hover'],
    },
    {
      pattern: /border-(green|sky)-500/,
    },
    {
      pattern: /animate-txt-slide-\d+/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bagkground': 'linear-gradient(60deg, rgba(49,7,156,1) 0%, rgba(0,224,255,1) 100%)',
      },

      colors: {
        'nav-bg': 'rgba(173, 202, 219, 0.8)',
        'home-bg': 'rgba(173, 202, 219, 0.85)',
      },

      keyframes: {
        'bg-slide-1': {
          '0%': { transform: 'translateX(100%)', opacity: '0.60' },
          '100%': { transform: 'translateX(-100%)', opacity: '0.60' },
        },
        
        'bg-slide-2': {
          '0%': { transform: 'translateX(0%)', opacity: '0.60' },
          '100%': { transform: 'translateX(-200%)', opacity: '0.60' },
        },

        'txt-slide': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '10%': { opacity: '1', transform: 'translateY(0)' },
          '20%': { opacity: '1', transform: 'translateY(0)' },
          '30%': { opacity: '0', transform: 'translateY(-28px)' },
          '100%': { opacity: '0', transform: 'translateY(-28px)' },
        }
      },

      animation: {
        'bg-slide-1': 'bg-slide-1 80s linear -80s infinite',
        'bg-slide-2': 'bg-slide-2 80s linear -40s infinite',
        'bg-slide-1-reverse': 'bg-slide-1 60s linear -60s infinite reverse',
        'bg-slide-2-reverse': 'bg-slide-2 60s linear -30s infinite reverse',
        'txt-slide-1': 'txt-slide 10s ease-in-out 0s infinite',
        'txt-slide-2': 'txt-slide 10s ease-in-out 2s infinite',
        'txt-slide-3': 'txt-slide 10s ease-in-out 4s infinite',
        'txt-slide-4': 'txt-slide 10s ease-in-out 6s infinite',
        'txt-slide-5': 'txt-slide 10s ease-in-out 8s infinite',
      },

      screens: {
        'cs-nav': '460px',
        'cs-nav-2': '345px',
      }
    },
  },
  plugins: [],
}

