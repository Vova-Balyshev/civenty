/* eslint-disable new-cap */
const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(s*)css$/,
      use: [
        miniCss.loader,
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'images/[name]-[hash][ext]',
      },
      // use: [
      //   'file-loader',
      //   {
      //     loader: 'image-webpack-loader',
      //     options: {
      //       disable: true, // webpack@2.x and newer
      //     },
      //   },
      // ],
    }],
  },
  plugins: [
    new miniCss({
      filename: 'styles.css',
    }),
  ],
};
