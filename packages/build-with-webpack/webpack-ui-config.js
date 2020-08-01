const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
          test: /\.css$/,
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
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.less$/,
          loader: 'less-loader', // compiles Less to CSS
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
        {
          test: /\.(jpe?g|png|gif|obj|svg)$/i,
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
      // new BundleAnalyzerPlugin(),
    ],
    entry: {
      app: path.resolve(process.env.PWD, './src/ui/index.tsx'),
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(process.env.PWD, './build/ui'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    watch: config.watch,
  };
};
