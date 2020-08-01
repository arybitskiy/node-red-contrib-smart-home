module.exports = {
  presets: ['@babel/preset-env', '@babel/react', '@babel/typescript'],
  plugins: [
    'lodash',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'babel-plugin-styled-components',
    'import-glob',
    '@babel/plugin-syntax-dynamic-import',
  ],
};
