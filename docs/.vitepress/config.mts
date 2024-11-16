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
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    logo: '/blog/public/logo.jpg',
  }
})
