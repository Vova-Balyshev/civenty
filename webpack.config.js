const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
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
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    }]
  },
  //  optimization: {
    //   runtimeChunk: 'single',
    // },
    plugins: [
      new miniCss({
        filename: 'style.css',
      }),
    ],
    output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist')
    },
  };
