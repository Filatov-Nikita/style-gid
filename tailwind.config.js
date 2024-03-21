/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#2A2A2A',
      'white': '#ffffff',
      'black2': '#151515',
    },
    fontFamily: {
      'noto': [ 'noto', 'Arial', 'sans-serif' ],
      'body': [ 'montserrat', 'Arial', 'sans-serif' ],
    },
    fontSize: {
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '26': '26px',
      '30': '30px',
      '58': '58px',
      '80': '80px',
    }
  },
  plugins: [],
}
