import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

const rootDir = path.resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(rootDir, 'src/')
      },
      {
        find: '@components',
        replacement: path.resolve(rootDir, 'src/components')
      },
      {
        find: '@baseTypes',
        replacement: path.resolve(rootDir, 'src/baseTypes')
      },
      {
        find: '@near',
        replacement: path.resolve(rootDir, 'src/near')
      }
    ]
  }
})
