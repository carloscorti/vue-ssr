const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../', 'src', 'client-entry.js')
  },

  output: {
    path: path.resolve(__dirname, '../', 'public'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
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
      // {
      //   test: /\.(sass|scss|css)$/,
      //   // use: [MiniCssExtraxtPlugin.loader, 'css-loader', 'sass-loader'], // in case we use sass
      //   use: [MiniCssExtraxtPlugin.loader, "css-loader"],
      // },
      // },
    ]
  },

  plugins: [
    new VueLoaderPlugin()

    //   // for assets.json list on public folder
    //   new AssetsPlugin({
    //     filename: "assets.json",
    //     path: path.join(__dirname, "../", "public", "build"),
    //   }),
    //   // to clean public/build folder each time webpack outputs files
    //   new CleanWebpackPlugin(),
    //   new MiniCssExtraxtPlugin({
    //     filename: "css_[name].[contentHash].css",
    //   }),
  ]

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         chunks: "initial",
  //         name: "vendor",
  //         enforce: true,
  //       },
  //     },
  //   },
  //   minimizer: [new OptimizeCssAssetsWebpackPlugin(), new TerserPlugin()],
  // },
};
