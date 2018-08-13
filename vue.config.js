const utils = require('./build/utils')
const alias = require('./build/aliases.config')
const entries = utils.getMultipleEntry('src/views/**/**/*.js')

module.exports = {
  pages: entries,
  configureWebpack: {
    resolve: {
      alias: alias.webpack
    }
  },
  chainWebpack: config =>{
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => utils.addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}
