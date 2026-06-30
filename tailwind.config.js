/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        blush: '#F5EDE3',
        mauve: '#C9A98A',
        gold: '#C9A065',
        charcoal: '#2C2C2C',
        taupe: '#7A6A5A',
        powderblue: '#B8CEDD',
        sage: '#D4DDD1',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['Lato', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}


