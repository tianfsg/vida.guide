/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './views/templates/**/*.html', // Ruta a tus archivos HTML
      './static/js/**/*.js',         // Ruta a tus archivos JS
      // Agrega más rutas si es necesario
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('daisyui'), // Agrega DaisyUI si lo estás usando
    ],
  }
  