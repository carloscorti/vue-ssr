const path = require('path');
const nodeExternals = require('webpack-node-externals');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  target: 'node',
  externals: nodeExternals(),
  entry: {
    App: path.resolve(__dirname, '../', 'src', 'server-entry.js')
  },

  output: {
    path: path.resolve(__dirname, '../', 'ssr'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    alias: {
      '@_': path.resolve(__dirname, '../', 'src')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[c|a]ss$/,
        loader: 'ignore-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/transform-runtime']
        }
      }
    ]
  },

  plugins: [new VueLoaderPlugin()]
};
