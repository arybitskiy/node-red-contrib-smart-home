const startCase = require('lodash/startCase');
const camelCase = require('lodash/camelCase');
const upperCase = require('lodash/upperCase');
const transform = require('lodash/transform');
const isObject = require('lodash/isObject');
const isArray = require('lodash/isArray');
const typedConfigGenerator = require('./plop/generators/typed-config');
const { Parser } = require('xml2js');
const fs = require('fs');

const xmlParser = new Parser({
  mergeAttrs: true,
  explicitArray: false,
  charkey: 'text',
});

const fixParserIssues = item => {
  if (isArray(item)) {
    return item.map(value => {
      return fixParserIssues(value);
    });
  }

  if (isObject(item)) {
    return transform(
      item,
      (result, value, key) => {
        if (key === 'text' && typeof value === 'string') {
          result[key] = value.trim();
        } else if (key === 'config' && typeof value === 'string') {
          result[key] = value.replace(/\.xml$/, '');
        } else if (
          ['Base', 'OverridePrecision', 'EndpointHint', 'ForceVersion'].includes(key) &&
          typeof value === 'string'
        ) {
          result[key] = [parseInt(value, 10)];
        } else if (
          [
            'CreateVars',
            'GetSupported',
            'AltTypeInterpretation',
            'MapRootToEndpoint',
            'SetAsReport',
            'ForceUniqueEndpoints',
            'ForceInstances',
            'ExposeRawUserCodes',
            'RefreshOnWakeup',
            'ColorIndexBug',
            'ClassGetVersionSupported',
            'IgnoreMCCapReports',
          ].includes(key) &&
          typeof value === 'string'
        ) {
          result[key] = [value === 'true'];
        } else if (['Revision', 'revision'].includes(key) && typeof value === 'string') {
          result[key] = parseInt(value, 10);
        } else if (key === 'xmlns') {
          // Do nothing
        } else if (key === 'Product' && !isArray(value) && !('Revision' in value)) {
          result[key] = [fixParserIssues(value)];
        } else if (
          [
            'Specific',
            'Value',
            'GlobalText',
            'MetaData',
            'ChangeLog',
            'Compatibility',
            'Associations',
            'Group',
            'CommandClass',
            'Instance',
            'Entry',
            'Protocol',
            'Item',
            'Label',
            'RemoveCC',
            'VerifyChanged',
            'SupportedModes',
            'TriggerRefreshValue',
            'RefreshClassValue',
            'Node',
            'MetaDataItem',
          ].includes(key) &&
          !isArray(value) &&
          isObject(value)
        ) {
          result[key] = [fixParserIssues(value)];
        } else {
          result[key] = isObject(value) || isArray(value) ? fixParserIssues(value) : value;
        }
      },
      {}
    );
  }

  return item;
};

module.exports = function (plop) {
  plop.setHelper('camelCase', camelCase);
  plop.setHelper('startCase', text => startCase(text).replace(/\s+/g, ''));
  plop.setHelper('constantCase', text => upperCase(text).replace(/\s+/g, '_'));
  plop.setHelper('renameFromXML2JS', text => text.replace(/xml$/, 'ts'));
  plop.setHelper('xmlFile2JS', filePath => {
    let res;
    xmlParser.parseString(fs.readFileSync(filePath), (err, result) => {
      if (err) {
        console.log(err);
        error(err.toString());
        throw err;
      } else {
        res = JSON.stringify(fixParserIssues(result));
      }
    });
    return res;
  });

  plop.setPartial('titleizeModuleResource', '{{startCase module}}{{startCase resource}}');
  plop.setPartial('camelCaseModuleResource', '{{camelCase module}}{{startCase resource}}');
  plop.setPartial('camelCaseResource', '{{camelCase resource}}');
  plop.setPartial('titleizeResource', '{{startCase resource}}');
  plop.setPartial('titleizeModule', '{{startCase module}}');

  plop.setGenerator('typed-config', typedConfigGenerator);
};
