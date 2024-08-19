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
        'home-bg': 'rgba(173, 202, 219, 0.45)',
      },

      keyframes: {
        'starting-transition' : {
          '0%': { transform: 'translateY(48px)', blur: '10px' },
          '100%': { transform: 'translateY(0)', blur: '0' },
        },

        'bg-slide-1': {
          '0%': { transform: 'translateX(100%)', opacity: '0.60' },
          '100%': { transform: 'translateX(-100%)', opacity: '0.60' },
        },
        
        'bg-slide-2': {
          '0%': { transform: 'translateX(0%)', opacity: '0.60' },
          '100%': { transform: 'translateX(-200%)', opacity: '0.60' },
        },

        'text-animation-1': {
          '0%': { transform: 'scale(0.8)', width: '100%', opacity: '1' },
          '100%': { transform: 'scale(2)', width: '100%', opacity: '0' },
        },

        'text-animation-2' :{
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },

        'txt-slide': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '10%': { opacity: '1', transform: 'translateY(0)' },
          '20%': { opacity: '1', transform: 'translateY(0)' },
          '30%': { opacity: '0', transform: 'translateY(-28px)' },
          '100%': { opacity: '0', transform: 'translateY(-28px)' },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },

      animation: {
        'starting-transition': 'starting-transition 0.3s ease-in-out',
        'bg-slide-1': 'bg-slide-1 80s linear -80s infinite',
        'bg-slide-2': 'bg-slide-2 80s linear -40s infinite',
        'bg-slide-1-reverse': 'bg-slide-1 60s linear -60s infinite reverse',
        'bg-slide-2-reverse': 'bg-slide-2 60s linear -30s infinite reverse',
        'txt-slide-1': 'txt-slide 10s ease-in-out 0s infinite',
        'txt-slide-2': 'txt-slide 10s ease-in-out 2s infinite',
        'txt-slide-3': 'txt-slide 10s ease-in-out 4s infinite',
        'txt-slide-4': 'txt-slide 10s ease-in-out 6s infinite',
        'txt-slide-5': 'txt-slide 10s ease-in-out 8s infinite',
        'intro-animation-1': 'text-animation-1 2s ease-in-out 0s alternate',
        'intro-animation-2': 'text-animation-2 2s ease-in-out 2s alternate',
        first: "moveVertical 5s ease infinite",
        second: "moveInCircle 12s reverse infinite",
        third: "moveInCircle 17s linear infinite",
        fourth: "moveHorizontal 7s ease infinite",
        fifth: "moveInCircle 22s ease infinite",
      },

      screens: {
        'cs-nav': '460px',
        'cs-nav-2': '345px',
      }
    },
  },
  plugins: [],
}

