const baseConfig = require('./webpack.base.config');

module.exports = Object.assign({}, baseConfig, {
  plugins: baseConfig.plugins || [],
});
