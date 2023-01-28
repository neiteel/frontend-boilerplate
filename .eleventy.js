const { data, layouts, includes, pages, resolve, output } = require('./paths')
const fs = require('fs').promises
const path = require('path')
const htmlmin = require('html-minifier')
const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite')
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing')

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection('myCustomSort', function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((file) => !file.fileSlug.includes('collections'))
      .filter((file) => !file.fileSlug.includes('404'))
      .sort((a, b) => a.fileSlug.localeCompare(b.fileSlug))
  })

  eleventyConfig.addTemplateFormats('twig')
  eleventyConfig.setTemplateFormats('twig')

  eleventyConfig.addExtension('twig', {
    outputFileExtension: 'html',
    read: false,
    compileOptions: {
      permalink: function (contents, inputPath) {
        return (data) => {
          return data.page.filePathStem.replace(pages, '').replace('/index', '') + '/index.html'
        }
      }
    },
    compile: async (inputContent, inputPath) => {
      let parsed = path.parse(inputPath)
      const loader = new TwingLoaderFilesystem([pages, layouts, includes])
      const twing = new TwingEnvironment(loader)
      return async (data) => {
        return twing.render(parsed.base, data)
      }
    }
  })

  eleventyConfig.setServerPassthroughCopyBehavior('copy')

  if (process.env.NODE_ENV === 'development') {
    eleventyConfig.addPlugin(EleventyVitePlugin, {
      viteOptions: {
        resolve
      }
    })
    eleventyConfig.addPassthroughCopy('app')
    eleventyConfig.addPassthroughCopy('styles')
  }

  // Copy all design assets
  eleventyConfig.addPassthroughCopy({
    'theme/img': 'img'
    // 'theme/public': 'public',
    // 'theme/videos': 'videos',
    // 'theme/fonts': 'fonts'
  })

  // Minify HTML
  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
      if (outputPath.endsWith('.html')) {
        const minified = htmlmin.minify(content, {
          collapseInlineTagWhitespace: false,
          collapseWhitespace: true,
          removeComments: true,
          sortClassName: true,
          useShortDoctype: true
        })

        return minified
      }

      return content
    })
  }

  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      data,
      output,
      includes,
      layouts
    }
  }
}
