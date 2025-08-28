/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin': 'spin 1s linear infinite',
        'bounce': 'bounce 1s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      colors: {
        'cyber-blue': {
          50: '#eff6ff',
          500: '#22d3ee',
          600: '#0891b2',
          700: '#0e7490'
        },
        'cyber-purple': {
          500: '#a855f7',
          600: '#9333ea'
        }
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(34, 211, 238, 0.3)',
        'cyber-lg': '0 0 40px rgba(34, 211, 238, 0.2)'
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}