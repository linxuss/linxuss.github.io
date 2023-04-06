# 项目创建历程

## 1. npx nuxi init 创建nuxt3项目

  tsconfig.json会有报错，该文件基础./nuxt/tsconfig.json,查看得知缺少了@types/node，安装即可。

## 2. npx eslint --init 添加eslint

  配置"lint": "eslint . --ext .ts,.vue"命令方便使用，--ext 是用来指定文件类型。
  接下来就是nuxt3和vue3的一些配置，
  nuxt3: 安装eslint-plugin-nuxt，在.eslintrc.js中的extends数组里添加'plugin:nuxt/recommended'。在rules里配置'vue/multi-word-component-names': 0， 移除plugin:nuxt/recommended默认校验。
  vue3：安装eslint-plugin-vue，extends里的"plugin:vue/essential", plugins里的vue去掉，extends里新增'plugin:vue/vue3-recommended'。移除plugin:vue/essential这是vue2的校验。

  问题：控制台中使用yarn lint指令，报错：加载'@typescript-eslint'失败，找不到typescript模块。
  解决：安装typescript

  问题：安装typescript后，出现