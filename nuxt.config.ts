// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt',
    ['@pinia/nuxt',
      {
        autoImports: [
        // 自动引入 `defineStore()`
          'defineStore',
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
  app: {
    //全局应用配置
    baseURL: "", //基本url
    buildAssetsDir: "/_nuxt/", //默认： "./_nuxt/"构建站点资产的文件夹名称，相对于baseURL（或cdnURL如果已设置）。
    keepalive: false, //页面之间 KeepAlive 配置,单个页面上可配置definePageMeta覆盖
    head: {
      title: "林旭",
      //在每个页面上设置默认配置<head>。
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [],
      style: [],
      script: [],
      noscript: [],
    },
    rootId: "root", //自定义nuxt根元素id
    rootTag: "div", //自定义nuxt根元素标签 默认 div
    layoutTransition: false, //是否开启布局切换过渡动画
    pageTransition: { name: "page", mode: "out-in" }, //页面过渡动画
  },
})
