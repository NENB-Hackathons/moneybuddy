module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    plugins: [],
    // add your custom rules here
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  }