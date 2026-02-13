export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.015em',
      },
      colors: {
        marina: {
          50: '#fff3e8',
          100: '#faddc6',
          200: '#f3c19a',
          300: '#e99e64',
          400: '#de7f3f',
          500: '#cc5f22',
          600: '#b04d1a',
          700: '#8f3f16'
        },
        navy: {
          50: '#f2f5f8',
          100: '#e3eaf1',
          200: '#c4d2e1',
          300: '#9cb0c7',
          400: '#6c8ba8',
          500: '#476585',
          600: '#304c6a',
          700: '#22374e',
          800: '#16283b',
          900: '#0e1a2c'
        }
      },
      boxShadow: {
        premium: '0 12px 30px rgba(14,26,44,0.12)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    },
  },
  plugins: [],
}
