const isProd = process.env.NODE_ENV === 'production'
module.exports = async (eleventyConfig) => {
  let link = ''

  if (isProd) {
    link = ''
  }

  return {
    link
  }
}
