const path = require('path')
const { readFile } = require('fs').promises
const isProd = process.env.NODE_ENV === 'production'

module.exports = async () => {
  let manifest = ''

  if (isProd) {
    manifest = JSON.parse(await readFile(path.join(__dirname, '../../theme/dist/manifest.json')))
  }

  return {
    is_dev: !isProd,
    manifest
  }
}
