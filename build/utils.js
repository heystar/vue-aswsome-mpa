const glob = require('glob')

/**
 * 多页动态配置
 * @method getMultipleEntry
 * @param {String} path 页面路径
 * @return {Object} entries 配置对象
 */
exports.getMultipleEntry = (path) => {
    let entries = {}
    glob.sync(path).forEach((entry) => {
        // 二级目录
        const subDir = entry.split('/')[2]
        // 文件名
        const fileName = entry.split('/')[3]
        entries[fileName] = {
            entry: `src/views/${subDir}/${fileName}/main.js`,
            template: `src/views/${subDir}/${fileName}/${fileName}.html`,
            fileName: `${fileName}.html`,
            chunks: ['chunk-vendors', 'chunk-common', `${fileName}`]
        }
    })
    return entries
}

/**
 * 自动导入公共样式文件
 * @method addStyleResource
 * @param {Object} rule
 * @return Null
 */
exports.addStyleResource = (rule) => {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        'src/styles/index.scss','src/assets/css/normalize.scss'
      ],
    })
}
