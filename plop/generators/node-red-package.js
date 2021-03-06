const generateAdd = (...args) => {
  const sourceFilePath = args[0];
  const targetFilePath = args.length === 2 ? args[1] : args[0];

  return {
    type: 'add',
    templateFile: `plop/templates/node-red-package/${sourceFilePath}.hbs`,
    path: `packages/{{name}}/${targetFilePath}`,
  };
};

module.exports = {
  description: 'Node-Red package generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'package name please',
    },
  ],
  actions: [
    /* CONFIG */
    generateAdd('.eslintrc.js'),
    generateAdd('babel.config.js'),
    generateAdd('jest.config.js'),
    generateAdd('package.json'),
    generateAdd('setupTests.ts'),
    generateAdd('tsconfig.json'),

    /* SRC */
    generateAdd('src/index.ts', 'src/index.ts'),
    generateAdd('src/types.ts', 'src/types.ts'),
    generateAdd('src/name-backend.ts', 'src/{{name}}-backend.ts'),
    generateAdd('src/name-form.html', 'src/{{name}}-form.html'),
    generateAdd('src/name-frontend.ts', 'src/{{name}}-frontend.ts'),
    generateAdd('src/name-help.html', 'src/{{name}}-help.html'),
    generateAdd('src/__tests__/name-backend.test.ts', 'src/__tests__/{{name}}-backend.test.ts'),
    {
      type: 'modify',
      path: 'package.json',
      transform: (fileContents, { name }) => {
        const package = JSON.parse(fileContents);
        package['node-red']['nodes'][name] = `packages/${name}/build/${name}.js`;
        const packageJson = JSON.stringify(package, null, 4);
        return packageJson;
      },
    },
  ],
};
