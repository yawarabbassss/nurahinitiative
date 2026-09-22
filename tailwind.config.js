/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nurah: {
          berry: '#8C5260',
          'berry-dark': '#582A36',
          'berry-deep': '#421E28',
          'berry-light': '#A86C7B',
          'berry-muted': '#B88290',
          bg: '#FAF2F0',
          'bg-alt': '#F4E9E6',
          card: '#FFFFFF',
          'card-subtle': '#FFF8F7',
          rose: '#E2A9B8',
          'rose-light': '#F9C2CE',
          peach: '#FED6BB',
          'peach-light': '#FDD8C1',
          sky: '#C5D4EB',
          'sky-light': '#D8E3F5',
          sage: '#9DAB99',
          'sage-light': '#B4C4B0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
