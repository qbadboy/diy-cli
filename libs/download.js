const { promisify } = require('util');
const clone = promisify(require('download-git-repo'));
const ora = require('ora');
const log = require('../utils/log');
// git repo
let repo = 'github git rep';

/**
 * download git repo
 * @param {String} framework 
 */
module.exports = framework => {
  switch(framework) {
    case 'vue':
      repo = 'github:qbadboy/vue-template';
      break;
    default: 
      break;
  }

  return async (desc) => {
    // clone
    const Loading = ora('正在下载...');
    Loading.start();
    try {
      await clone(repo, desc);
      Loading.succeed();
    } catch (e) {
      Loading.fail();
      log(e, 'error');
    }
  };
};
