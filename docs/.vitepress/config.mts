import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: "Soda's Blog",
  description: "A VitePress Site",
  head: [
    ['link',{ rel: 'icon', href: 'logo.jpg'}]
  ],
  sitemap: {
    hostname: 'https://zhr-nmlk.github.io/blog/'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '前言',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '因为什么搭建了这个博客', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhr-nmlk?tab=repositories' }
    ],
    // 本地搜索
    search: {
      provider: 'local'
    },

    footer: {
      copyright: 'copyright 2023-${new Date().getFullyear()} present Evan You'
    },

    darkModeSwitchLabel: '深浅模式',
    logo: '/blog/public/logo.jpg',
  }
})
