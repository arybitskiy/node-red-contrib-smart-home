const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack-common-config');

module.exports = function (config) {
  const common = commonConfig(config);

  return {
    ...common,
    module: {
      ...common.module,
      rules: [
        ...common.module.rules,
        {
          // look for .css or .scss files
          test: /\.(css|scss)$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 2,
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif|obj)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.(mtl)$/i,
          use: [
            {
              loader: 'mtl-loader',
            },
          ],
        },
      ],
    },
    target: 'web',
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(process.env.PWD, './src/ui/index.html'),
        filename: 'index.html',
        cache: false,
      }),
    ],
    entry: {
      app: path.resolve(process.env.PWD, './src/ui/index.tsx'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(process.env.PWD, './build/ui'),
    },
    watch: config.watch,
  };
};
