#!/usr/bin/env node

const cli = require('cli');
const build = require('./build');
const backendConfig = require('./webpack-backend-config');
const frontendConfig = require('./webpack-frontend-config');
const uiConfig = require('./webpack-ui-config');

const config = cli.parse({
  type: ['t', 'Type of build (backend|frontend|ui)', ['backend', 'frontend', 'ui'], null],
  name: ['n', 'Name of node', 'string', null],
  watch: ['w', 'Watch for file changes', 'boolean', false],
});

switch (config.type) {
  case 'frontend':
    build(frontendConfig(config), 'frontend');
    break;
  case 'backend':
    build(backendConfig(config), 'backend');
    break;
  case 'ui':
    build(uiConfig(config), 'ui');
    break;
}
