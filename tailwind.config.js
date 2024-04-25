/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    

    screens: {
      'sm': '640px', // Small devices (mobile)
      'md': '768px', // Medium devices (tablets)
      'lg': '1024px', // Large devices (desktops)
      'xl': '1280px', // Extra large devices (large desktops)
      '2xl': '1536px',
      '3xl': '1920px' // Extra extra large devices
    },
    extend: {
      spacing: {
        '22': '86px',
        '110': '450px'
        
      },
    },
  },
  plugins: [],
}

