module.exports = {
  description: 'Z-Wave Typed Config generator',
  prompts: [
    {
      type: 'input',
      name: 'path-to-xml',
      message: 'path to xml please',
    },
    {
      type: 'input',
      name: 'file-name',
      message: 'relative file name please',
    },
    {
      type: 'input',
      name: 'path-to-type',
      message: 'path to type please',
    },
  ],
  actions: [
    {
      type: 'add',
      templateFile: `plop/templates/typed-config.hbs`,
      path: `src/generated/config/{{renameFromXML2JS file-name}}`,
      force: true,
    },
  ],
};
