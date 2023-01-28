import { defineConfig } from 'vite'
import liveReload from 'vite-plugin-live-reload'
import { resolve, output } from './paths'
const path = require('path')

export default defineConfig(({ command, mode }) => {
  const config = {
    resolve,
    server: {
      port: '3000'
    },
    plugins: [liveReload(['./theme/(templates|views)/**/*.twig'])],
    build: {
      outDir: output,
      manifest: true,
      rollupOptions: {
        input: path.resolve(__dirname, 'app/app.js')
      }
    }
  }

  return {
    ...config
  }
})
