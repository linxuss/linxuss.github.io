module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": [
    // 有了plugin:nuxt/recommended 移除默认校验
    // "eslint:recommended",
    'plugin:vue/vue3-recommended',
    // vue2的配置
    // "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    'plugin:nuxt/recommended',
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin"
  ],
  "rules": {
    'vue/multi-word-component-names': 0,
    // 禁止创建未使用的变量
    "no-unused-vars": "error",
    "no-var": "error",
    "@typescript-eslint/no-unused-vars": "error",
    // 没有修改的变量使用const
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    // 两个空格的缩进
    "indent": ["error", 2],
  }
}
