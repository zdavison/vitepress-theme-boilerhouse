import { defineConfig } from 'vitepress'
import { markdown } from '../../src/markdown'

export default defineConfig({
  title: 'Boilerhouse',
  description: 'Demo site for vitepress-theme-boilerhouse',
  base: '/vitepress-theme-boilerhouse/',
  appearance: 'force-dark',
  markdown,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Examples', link: '/examples/components' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Components', link: '/examples/components' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },
})
