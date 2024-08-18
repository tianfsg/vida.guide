/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/public/**/*.ejs', // Asegúrate de que esta ruta apunte a tus archivos .ejs
    './static/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // DaisyUI debe estar configurado si lo estás usando
  ],
};
