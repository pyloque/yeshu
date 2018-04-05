const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const env = require('./env')

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    inject: true,
    template: './src/template.html',
	chunks: ['index'],
	filename: 'index.html'
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: './src/template.html',
	chunks: ['login'],
	filename: 'login.html'
  }),
  new CopyWebpackPlugin([{
    from: './src/assets',
    to: 'assets'
  }]),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
]

if (process.env['NODE_ENV'] === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: true}))
}

module.exports = {
  mode: process.env['NODE_ENV'],
  entry: {
 	index: './src/index.js',
	login: './src/login.js'
  },
  plugins: plugins,
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        esModule: true
      }
    }, {
      test: /\.(png|jpg|gif|svg|ttf|woff)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.vue']
  },
  devServer: {
    host: 'localhost',
    port: env.port,
    historyApiFallback: true,
    noInfo: true,
    disableHostCheck: true,
    proxy: {
    }
  },
  performance: {
    hints: false
  },
  devtool: 'source-map'
}
