const fs = require('fs');
const path = require('path');
const cli = require('cli');

const packageJSONFilePath = path.resolve(__dirname, './package.json');

const readFile = () => JSON.parse(fs.readFileSync(packageJSONFilePath));

const writeFile = contents => fs.writeFileSync(packageJSONFilePath, JSON.stringify(contents, null, 4) + '\n');

const config = cli.parse({
  type: ['t', 'Before/after publish (pre|post)', ['pre', 'post'], null],
});

switch (config.type) {
  case 'pre':
    const preJSON = readFile();
    delete preJSON.private;
    writeFile(preJSON);
    break;
  case 'post':
    const postJSON = readFile();
    postJSON.private = true;
    writeFile(postJSON);
    break;
}
