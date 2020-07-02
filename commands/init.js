const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const log = require('../utils/log');
// commands
const inquirer = require('../libs/inquirer');
const download = require('../libs/download');
const create = require('../libs/generator');
const install = require('../libs/install');
const start = require('../libs/start');

module.exports = async (dirname) => {
  // clear display
  clear();
  // welcome
  const text = await figlet(`DIY CLI`);
  log(text, 'info');
  // options
  const { framework, project, description } = await inquirer();
  // clone
  const clone = download(framework);
  await clone(dirname);
  // compile && create project
  const meta = { project, description };
  let files = ['package.json', 'README.md', 'src/App.vue'];
  files = files.map(file => `./${dirname}/${file}`);
  const compile = create(meta);
  compile(files);
  // npm install
  await install(dirname);
  // start dev server
  start(dirname);
};
