const { promisify } = require('util');
const clone = promisify(require('download-git-repo'));
const chalk = require('chalk');
const ora = require('ora');
const log = require('../utils/log');

/**
 * git clone
 * @param {String} repo github地址
 * @param {String} desc download target dir
 */
module.exports = async (repo, desc) => {
  // clone
  log(`🚘 开始下载`, 'info');
  const loading = ora('正在下载...');
  loading.start();
  try {
    await clone(repo, desc);
    loading.succeed();
  } catch (e) {
    loading.fail();
    console.error(e);
  }
};
