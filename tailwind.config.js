/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./activity 3/src/**/*.{js,ts,jsx,tsx}",
    "./activity 4/src/**/*.{js,ts,jsx,tsx}",
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
        tealCustom: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        slateCustom: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
