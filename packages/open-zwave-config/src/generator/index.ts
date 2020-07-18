import { createServer } from 'http-server';
import path from 'path';
import chalk from 'chalk';
import npm from 'npm';
import fs from 'fs';
import { LineTransform } from 'node-line-reader';
import glob from 'glob';
import ProgressBar from 'progress';
import { repeat } from 'lodash';

const configDir = path.resolve(__dirname, '../../../../node_modules/open-zwave/config');
const port = 9100;
const hostName = '127.0.0.1';
const baseURL = `http://${hostName}:${port}/`;
const generatedDir = (fileName: string) => path.resolve(__dirname, `../generated/github.com/OpenZWave/${fileName}`);

const info = (text: string) => console.log(chalk.grey(text));
const success = (text: string) => console.log(chalk.green(text));
const error = (text: string) => console.log(chalk.red(text));

const removeUnnecessaryTypes = (filePath: string) =>
  new Promise(resolve => {
    const filePathTemporary = `${filePath}.tmp`;
    const readStream = fs.createReadStream(filePath);
    const transform = new LineTransform();
    const temporaryFileStream = fs.createWriteStream(filePathTemporary);
    transform.on('data', (line: string) => {
      const modifiedLine = line
        .toString()
        .replace(/_exists: boolean;/, '')
        .replace(/_namespace: string;/, '')
        .replace(/constructor: { new\(\): [a-zA-Z0-9]+ };/, '')
        .replace(
          /(Label\??: |Help\??: |Compatibility\??: )(LabelType|HelpType|CompatibilityType)(\[\])(;)/,
          '$1($2 | string)$3 | string$4'
        )
        .replace(
          /(lang\?: string;|name: MetaDataItemTypeNameType;|author: string;|index: string;)/,
          '$1 text?: string;'
        );
      temporaryFileStream.write(`${modifiedLine}\n`);
    });
    transform.on('close', () => {
      temporaryFileStream.close();
    });

    readStream.pipe(transform);

    readStream.on('close', () => {
      fs.unlinkSync(filePath);
      fs.renameSync(filePathTemporary, filePath);
      resolve();
    });
  });

const parseXSD = (fileName: string) =>
  new Promise((resolve, reject) => {
    npm.commands['run-script'](['cxsd', `${baseURL}${fileName}`], err => {
      if (err) {
        error(err.toString());
        reject(err);
      } else {
        fs.renameSync(generatedDir('open-zwave.d.ts'), generatedDir(fileName.replace(/xsd$/, 'ts')));
        removeUnnecessaryTypes(generatedDir(fileName.replace(/xsd$/, 'ts')));
        success(`Parsed ${fileName}`);
        resolve();
      }
    });
  });

const parseXML = (fileName, type, prevDir = 1) =>
  new Promise((resolve, reject) => {
    npm.commands['run-script'](
      [
        'plop:typed-config',
        path.resolve(configDir, fileName),
        fileName,
        `${repeat('../', prevDir)}github.com/OpenZWave/${type}`,
      ],
      err => {
        if (err) {
          error(err.toString());
          reject(err);
        } else {
          success(`Parsed ${fileName}`);
          resolve();
        }
      }
    );
  });

const httpServer = createServer({
  root: configDir,
  showDir: true,
});
const server: ReturnType<typeof createServer> = (httpServer as any).server;

info('Starting http server');
server.once('listening', () => {
  success(`Listening on ${baseURL}`);
});
server.listen(port, hostName);

npm.load(async err => {
  if (err) {
    err && error(err.toString());
    return;
  }

  try {
    // XSD
    await parseXSD('device_classes.xsd');
    await parseXSD('device_configuration.xsd');
    await parseXSD('Localization.xsd');
    await parseXSD('manufacturer_specific.xsd');
    await parseXSD('NotificationCCTypes.xsd');
    await parseXSD('options.xsd');
    await parseXSD('SensorMultiLevelCCTypes.xsd');
    await parseXSD('zwcfg.xsd');
    await parseXSD('zwscene.xsd');
    // XML
    await parseXML('Localization.xml', 'Localization');
    await parseXML('NotificationCCTypes.xml', 'NotificationCCTypes');
    await parseXML('device_classes.xml', 'device_classes');
    await parseXML('manufacturer_specific.xml', 'manufacturer_specific');
    await parseXML('options.xml', 'options');
    // Products
    glob(
      '*/*.xml',
      {
        cwd: configDir,
      },
      async (e, files) => {
        if (e) {
          error(e.toString());
          return;
        }
        // const files = [f[3]];
        const bar = new ProgressBar('  parsing product files [:bar] :percent :etas', {
          complete: '=',
          incomplete: ' ',
          width: 50,
          total: files.length,
        });
        await Promise.all(
          files.map(async fileName => {
            await parseXML(fileName, 'device_configuration', 2);
            bar.tick(1);
          })
        );
      }
    );
  } catch (e) {
    error('Aborting');
  }
  success('Successfully completed');
  server.close(err => {
    err ? error(err.toString()) : info('Server stopped');
  });
});
