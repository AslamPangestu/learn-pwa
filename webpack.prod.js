const { merge } = require('webpack-merge')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  plugins: [

    new Dotenv({
      path: path.resolve(__dirname, '.env'),
      systemvars: true,
      safe: true
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: './sw.bundle.js'
    })
  ]
})
