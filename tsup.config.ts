import { defineConfig } from 'tsup'
import vue from 'esbuild-plugin-vue3'

export default defineConfig({
  esbuildPlugins: [vue()],
  entry: ['src/index.ts', 'src/markdown.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['vitepress', 'vue', /\.css$/],
  outDir: 'dist',
  async onSuccess() {
    const { cpSync, mkdirSync } = await import('fs')
    mkdirSync('dist/styles', { recursive: true })
    cpSync('src/styles', 'dist/styles', { recursive: true })
  },
})
