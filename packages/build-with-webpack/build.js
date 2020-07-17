const path = require('path');
const webpack = require('webpack');
const fs = require('fs-extra');
const chalk = require('chalk');

const build = (config, name) => {
  console.log(chalk.cyan(`Building ${name} version of application...`));
  fs.remove(path.resolve(__dirname, '../build'), err => {
    if (err) {
      console.log(chalk.cyan('error - fs.remove'));
      throw err;
    }
    webpack(config, (werr, stats) => {
      console.log('\n');

      if (werr || stats.hasErrors()) {
        console.log(
          chalk.cyan(
            stats.toString({
              hash: false,
              timings: false,
              modules: false,
              chunks: false,
              colors: true,
              assets: false,
              children: false,
              entrypoints: false,
            })
          )
        );

        console.log('\n');
        console.log(chalk.red('Build error. 😭'));
        return;
      }
      process.stdout.write(
        `${stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false,
        })}\n\n`
      );

      console.log(chalk.cyan('Build complete. 🎉\n'));
    });
  });
};
module.exports = build;
