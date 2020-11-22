const path = require('path')
const webpack = require('webpack')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  }
}