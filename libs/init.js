const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');

const log = require('../utils/log');
const download = require('./download');
const install = require('./install');
const build = require('./build');

const GitRepoSite = `github:qbadboy/carp-ui`;

module.exports = async (projName) => {
  // clera display
  clear();
  // console welcome
  const text = await figlet(`DIY CLI`);
  log(text, 'warrning');
  log(`🚀 初始化项目: ${projName} ==\n`, 'info');
  // clone repo
  await download(GitRepoSite, projName);
  // install pkgs
  await install(projName);
  // build && open browser
  // build(projName);
};
