const path = require('path')

module.exports = {
  data: 'static-site/data',
  layouts: 'static-site/layouts',
  includes: 'static-site/includes',
  pages: 'static-site/pages',
  output: 'theme/dist',
  resolve: {
    alias: [
      {
        find: '@app',
        replacement: path.resolve(__dirname, 'app')
      },
      {
        find: '@tailwindConfig',
        replacement: path.resolve(__dirname, 'tailwind.config.js')
      }
    ]
  }
}
