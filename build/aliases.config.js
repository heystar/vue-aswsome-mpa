const path = require('path')

function resolveSrc(_path) {
  return path.join(__dirname, '..', _path)
}

const aliases = {
  '@': 'src',
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@store': 'src/store',
  '@api': 'src/api',
  '@mixin': 'src/styles/index.scss',
  '@plugins': 'src/plugins'
}

module.exports = {
  webpack: {}
}

for (const alias in aliases) {
  module.exports.webpack[alias] = resolveSrc(aliases[alias])
}
