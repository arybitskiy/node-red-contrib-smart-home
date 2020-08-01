const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const { default: WatchExternalFilesPlugin } = require('webpack-watch-files-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { default: HTMLInlineCSSWebpackPlugin } = require('html-inline-css-webpack-plugin');

const commonConfig = require('./webpack-common-config');

module.exports = function (config) {
  const common = commonConfig(config);
  const helpFile = path.resolve(process.env.PWD, `./src/${config.name}-help.html`);
  const formFile = path.resolve(process.env.PWD, `./src/${config.name}-form.html`);

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
          test: /\.(jpe?g|png|gif|mtl|obj|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                hash: 'sha512',
                digest: 'hex',
              },
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
        template: path.resolve(__dirname, './frontend-template.html'),
        filename: `${config.name}.html`,
        cache: false,
        templateParameters: () => {
          const help = fs.readFileSync(helpFile);
          const form = fs.readFileSync(formFile);
          return { help, form, name: config.name };
        },
      }),
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/.+/]),
      new WatchExternalFilesPlugin({ files: [helpFile, formFile] }),
      new HTMLInlineCSSWebpackPlugin(),
    ],
    entry: {
      app: `./src/${config.name}-frontend`,
    },
    output: {
      filename: `${config.name}-frontend.js`,
      path: path.resolve(process.env.PWD, './build'),
    },
    watch: config.watch,
    externals: {
      jquery: 'jQuery',
    },
  };
};
