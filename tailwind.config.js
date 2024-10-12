/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 10px 15px rgba(0, 0, 0, 0.3)',       },
      colors: {
        layers:{
          'background': '#DBD3D3',
          'text_inborder': '#FFD600',
          'border_color': '#091057',
          'second-txt': '#024CAA',
          'header':'#ffffff',
        },
        }
    }
  },
  plugins: [],
}