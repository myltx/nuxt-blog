export const siteConfig = {
  author: 'Myltx',
  title: 'Myltx - Blog',
  description: 'My blog site.',
  lang: 'zh-CN',
}

export const subNavLinks = [
  {
    title: '笔记',
    path: '/blog',
  },
  {
    title: '面试',
    path: '/interview',
  },
  {
    title: '问题记录',
    path: '/questions',
  },
]

export const navLinks = [
  {
    title: '笔记',
    path: '/blog',
    icon: 'i-icon-park-outline-align-text-right-one',
  },
  {
    title: '项目',
    path: '/projects',
    icon: 'i-icon-park-outline-blocks-and-arrows',
  },
  {
    title: '标签',
    path: '/tags',
    icon: 'i-icon-park-outline-tag-one',
  },
  {
    title: '搜索',
    path: '/search',
    icon: 'i-icon-park-outline-search',
  },
  {
    title: '关于',
    path: '/',
    icon: 'i-icon-park-outline-grinning-face-with-open-mouth',
  },

]

export const socialLinks = [
  {
    title: '掘金',
    path: 'https://juejin.cn/user/2524134428904894',
    icon: 'i-simple-icons-juejin',
  },
  {
    title: 'Bilibili',
    path: 'https://space.bilibili.com/167390207',
    icon: 'i-simple-icons-bilibili',
  },
  {
    title: 'Twitter',
    path: 'https://x.com/myl_tx',
    icon: 'i-simple-icons-twitter',
  },
  {
    title: 'Github',
    path: 'https://github.com/myltx',
    icon: 'i-icon-park-outline-github',
  },
]

export const projectList = [
  {
    name: '个人项目',
    content: [
      {
        name: 'Vue3-ts',
        desc: '🚀 基于 Vue3 + Ts + Vite 开发的后台管理项目',
        path: 'https://vue.t.myltx.top/#/login',
      },
      {
        name: 'v2toclash',
        desc: '将 v2vary 转换为 clashpro 的项目',
        path: 'https://v2toclash.myltx.top/',
      },
      {
        name: 'vite-uniapp-template-ts',
        desc: '🚀 基于 vite + ts 驱动的 uniapp 最佳实践集成模板',
        path: 'https://github.com/myltx/vite-uniapp-template-ts',
      },
      {
        name: 'Vue3-Screen',
        desc: '🚀 基于 Vue3 + Ts + Vite 开发的 大屏展示项目',
        path: 'https://large.screen.myltx.top/#/',
      },
      {
        name: 'Note',
        desc: '使用 vitepress 的笔记项目',
        path: 'https://note.myltx.top/',
      },
    ],
  },
  {
    name: '常用模版/工具/框架/UI库',
    content: [
      {
        name: 'Vitesse Uni App',
        desc: '由 Vite & uni-app 驱动的跨端快速启动模板',
        path: 'https://vitesse-docs.netlify.app/',
      },
      {
        name: 'Vue Mini',
        desc: '基于 Vue 3 的小程序框架',
        path: 'https://vuemini.org/',
      },
      {
        name: 'Uv Ui',
        desc: '多平台快速开发的UI框架',
        path: 'https://www.uvui.cn/',
      },
    ],
  },
]
