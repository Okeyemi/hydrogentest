import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}', 
    './pages/**/*.{ts,tsx}', 
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './public/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
    sans: ['"Mail Sans Roman"', 'sans-serif'],
      },
      colors: {
      },
    },
  },
  plugins: [],
}

export default config
