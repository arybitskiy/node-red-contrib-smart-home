const startCase = require('lodash/startCase');
const camelCase = require('lodash/camelCase');
const upperCase = require('lodash/upperCase');
const nodeRedPackageGenerator = require('./plop/generators/node-red-package');

module.exports = function (plop) {
  plop.setHelper('camelCase', camelCase);
  plop.setHelper('startCase', text => startCase(text).replace(/\s+/g, ''));
  plop.setHelper('constantCase', text => upperCase(text).replace(/\s+/g, '_'));

  plop.setPartial('titleizeModuleResource', '{{startCase module}}{{startCase resource}}');
  plop.setPartial('camelCaseModuleResource', '{{camelCase module}}{{startCase resource}}');
  plop.setPartial('camelCaseResource', '{{camelCase resource}}');
  plop.setPartial('titleizeResource', '{{startCase resource}}');
  plop.setPartial('titleizeModule', '{{startCase module}}');

  plop.setGenerator('node-red-package', nodeRedPackageGenerator);
};
