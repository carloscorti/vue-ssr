const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../', 'src', 'client-entry.js'),
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },

  output: {
    path: path.resolve(__dirname, '../', 'public'),
    publicPath: '/',
    filename: 'assets/js/[name].js',
  },

  // module: {
  //   rules: [
  // to enforce compile without linting errors
  // {
  //   enforce: 'pre',
  //   test: /\.js$/,
  //   loader: 'eslint-loader',
  //   exclude: /node_modules/,
  // },

  // {
  //   test: /\.(sass|scss|css)$/,
  //   // use: [MiniCssExtraxtPlugin.loader, 'css-loader', 'sass-loader'], // in case we use sass
  //   use: [MiniCssExtraxtPlugin.loader, "css-loader"],
  // },
  // {
  //   test: /\.js$/,
  //   exclude: /node_modules/,
  //   loader: "babel-loader",
  //   options: {
  //     plugins: ["@babel/transform-runtime"],
  //   },
  // },
  //   ],
  // },

  // plugins: [
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
  // ],

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
