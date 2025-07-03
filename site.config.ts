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
    title: '学习',
    path: '/study',
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
    title: '小红书',
    path: 'https://www.xiaohongshu.com/user/profile/664f0745000000001e0087d1',
    icon: 'i-simple-icons:xiaohongshu',
  },
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
        name: 'dream-hub',
        desc: '🚀 基于 nuxt3 、nestjs 实现实用网站保存、个人笔记记录功能',
        path: 'https://dream-hub.myltx.top/',
      },
      // {
      //   name: "lifabox-miniapp",
      //   desc: "🚀 LifaBox 是一款基于 UniBest + UniApp + Vue3 开发的微信小程序",
      //   path: "/blog",
      // },
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
      {
        name: 'Vue3-demo',
        desc: 'Vue3-demo',
        path: 'https://github.com/vincentzyc/vue3-demo',
      },
      {
        name: 'VueJs-blog',
        desc: 'VueJs-blog',
        path: 'https://blog.vuejs.org/',
      },
      {
        name: 'Slidev',
        desc: '为开发者打造的演示文稿工具',
        path: 'https://cn.sli.dev/',
      },
      {
        name: 'vue3-baidu-map-gl',
        desc: 'Vue3 & BMapGL 组件库 + hooks 库',
        path: 'https://yue1123.github.io/vue3-baidu-map-gl/',
      },
      {
        name: '@vueuse/motion',
        desc: 'Vue 动画',
        path: 'https://motion.vueuse.org/',
      },
      {
        name: 'unisave',
        desc: 'uniapp的开箱即用模版，适配所有(app、mp、web)平台！！！',
        path: 'https://github.com/sunpm/unisave',
      },
      {
        name: 'unibest',
        desc: 'unibest - 好用的 uniapp 开发框架。',
        path: 'https://github.com/codercup/unibest',
      },
      {
        name: 'canvas-editor',
        desc: 'canvas/svg 的富文本编辑器',
        path: 'https://github.com/Hufe921/canvas-editor',
      },
      {
        name: 'typed.js',
        desc: 'Typed.js 是一个轻量级的库，可以让你在网页上实现打字机效果。',
        path: 'https://github.com/mattboldt/typed.js',
      },
      {
        name: 'gcoord',
        desc: '地理坐标系转换工具',
        path: 'https://github.com/hujiulong/gcoord',
      },
    ],
  },
  {
    name: '常用图标库',
    content: [
      {
        name: 'iconify',
        desc: 'iconify',
        path: 'https://iconify.design/',
      },
      {
        name: 'iconify预览',
        desc: 'iconify预览',
        path: 'https://icon-sets.iconify.design/',
      },
    ],
  },
  {
    name: '面试刷题',
    content: [
      {
        name: '前端不外传的纸条',
        desc: '前端不外传的纸条',
        path: 'https://www.yuque.com/yuqueyonghua2m9wj/web_food/ezrm4x',
      },
      {
        name: 'Interview Model',
        desc: '面试题默写、手写版本，包含html，css，js，vue，react以及计算机网络，浏览器原理、性能优化',
        path: 'https://github.com/oldTimer98/interviewModel',
      },
    ],
  },
]
