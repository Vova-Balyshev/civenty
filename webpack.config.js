const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   devServer: {
    static: './dist',
  },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }]
   },
  //  optimization: {
  //   runtimeChunk: 'single',
  // },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};
