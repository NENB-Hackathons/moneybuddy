const { defineConfig } = require('@vue/cli-service')
const { Title } = require('chart.js')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'MoneyBuddy'
    }
  }
})
