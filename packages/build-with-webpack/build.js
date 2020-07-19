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
            stats.toString('verbose')
          )
        );

        console.log('\n');
        console.log(chalk.red('Build error. 😭'));
        return;
      }
      process.stdout.write(
        `${stats.toString({
          colors: true,
          modules: true,
          children: true,
          chunks: true,
          chunkModules: true,
          verbose: true,
        })}\n\n`
      );

      console.log(chalk.cyan('Build complete. 🎉\n'));
    });
  });
};
module.exports = build;
