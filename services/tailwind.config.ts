const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(180deg, #0081A7 0%, #00AFB9 100%)',
      },
    },
  },
  plugins: [],
}
export default config
