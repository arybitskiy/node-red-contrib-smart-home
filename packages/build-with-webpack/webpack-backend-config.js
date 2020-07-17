const path = require('path');

const commonConfig = require('./webpack-common-config');

module.exports = function (config) {
  return {
    ...commonConfig,
    target: 'node',
    entry: {
      app: `./src/${config.name}-backend.ts`,
    },
    output: {
      filename: `${config.name}.js`,
      path: path.resolve(process.env.PWD, './build'),
      libraryTarget: 'commonjs2',
    },
    watch: config.watch,
  };
};
