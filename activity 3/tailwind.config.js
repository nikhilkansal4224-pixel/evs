/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          50: '#f4f7f4',
          100: '#e5ece5',
          200: '#cbdacb',
          300: '#a3c0a4',
          400: '#759f77',
          500: '#528155',
          600: '#3e6641',
          700: '#335235',
          800: '#2b422d',
          900: '#1e3020',
          950: '#0f1a10',
        },
        forest: {
          DEFAULT: '#1E3A2F',
          dark: '#142720',
          light: '#2D5A46',
          muted: '#3D735C'
        },
        slateCustom: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#64748b',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
