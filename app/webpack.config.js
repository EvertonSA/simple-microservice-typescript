// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')
// rules
const rules = []
rules.push({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  loader: 'awesome-typescript-loader'
})
// Plugins
let plugins = []
const pversion = new RegExp(/^(\d{1,})(\.)(\d{1,})(\.)(\d{1,})$/)
const version = `v${(process.env.npm_package_version &&
  pversion.test(process.env.npm_package_version))
  ? process.env.npm_package_version.replace(pversion, '$1')
  : '1'}`
plugins.push(
  new webpack.DefinePlugin({ CFG: JSON.stringify({ version: version }) })
)
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const NodemonPlugin = require('nodemon-webpack-plugin')
  plugins.push(
    new NodemonPlugin({
      verbose: true,
      ext: 'js,json',
      ignore: ['*.js.map'],
      watch: path.resolve('./dist'),
      script: path.resolve('./dist/bin/app.js')
    })
  )
  rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: ['eslint-loader']
  })
}
module.exports = {
  target: 'async-node',
  mode: process.env.NODE_ENV,
  entry: { 'bin/app': path.resolve('./src/handler.ts') },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: { '@app': path.resolve('./src') }
  },
  module: { rules: rules },
  plugins
}
