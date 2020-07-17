const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const { default: WatchExternalFilesPlugin } = require('webpack-watch-files-plugin');

const commonConfig = require('./webpack-common-config');

module.exports = function (config) {
  const helpFile = path.resolve(process.env.PWD, `./src/${config.name}-help.html`);
  const formFile = path.resolve(process.env.PWD, `./src/${config.name}-form.html`);

  return {
    ...commonConfig,
    target: 'web',
    plugins: [
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
    ],
    entry: {
      app: `./src/${config.name}-frontend.ts`,
    },
    output: {
      filename: `${config.name}-frontend.js`,
      path: path.resolve(process.env.PWD, './build'),
    },
    watch: config.watch,
  };
};
