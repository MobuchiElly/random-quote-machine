/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        '16a085': '#16a085',
        '27ae60': '#27ae60',
        '2c3e50': '#2c3e50',
        'f39c12': '#f39c12',
        'e74c3c': '#e74c3c',
        '9b59b6': '#9b59b6',
        'FB6964': '#FB6964',
        '342224': '#342224',
        '472E32': '#472E32',
        'BDBB99': '#BDBB99',
        '77B1A9': '#77B1A9',
        '73A857': '#73A857',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans'],
      },
      fontSize: {
        '400': '400',
        '500': '500',
      } ,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'raleway',
          },
        },
      },
    },
  },
  plugins: [],
}
