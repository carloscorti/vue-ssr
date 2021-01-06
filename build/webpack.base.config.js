const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../', 'src', 'client-entry.js')
  },

  output: {
    path: path.resolve(__dirname, '../', 'public'),
    publicPath: '/',
    filename: 'assets/js/[name].[contenthash].js'
  },

  // resolve: {
  //   alias: {
  //     '@/*': '../src'
  //   }
  // },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[c|a]ss$/,
        use: [
          MiniCssExtraxtPlugin.loader,
          // 'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtraxtPlugin.loader,
          // 'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        // options: {
        //   plugins: ['@babel/transform-runtime']
        // }
      }
      // to enforce compile without linting errors
      // {
      //   enforce: 'pre',
      //   test: (/\.js$/)|(/\.vue$/),
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/,
      // },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),

    //   // for assets.json list on public folder
    // new AssetsPlugin({
    //   filename: 'assets.json',
    //   path: path.resolve(__dirname, '../', 'template', 'assets'),
    //   prettyPrint: true
    // }),
    // to clean public/build folder each time webpack outputs files
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: [
    //     path.resolve(__dirname, '../', 'public', 'assets')
    //   ]
    // }),
    new CleanWebpackPlugin(),
    new MiniCssExtraxtPlugin({
      filename: 'assets/css/[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'html',
      template: path.resolve(__dirname, '../', 'template', 'index.html'),
      filename: path.resolve(__dirname, '../', 'public', 'index.html'),
      inject: true,
      favicon: path.resolve(__dirname, '../', 'template', 'favicon.png')
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
        // 'css-vendor': {
        //   test: /style[\\/]index.(s)?css$/,
        //   chunks: 'initial',
        //   name: 'css-vendor',
        //   enforce: true
        // }
      }
    },
    minimizer: [new OptimizeCssAssetsWebpackPlugin(), new TerserPlugin()]
  }
};
