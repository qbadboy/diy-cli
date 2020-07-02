const path = require('path');
const compile = require('../utils/compile');
const log = require('../utils/log');

const prefixPath = (_path) => {
  return path.join(process.cwd(), _path);
};

module.exports = (meta) => (files = []) => {
  let filePaths = files.map(prefixPath);
  let i = 0;
  filePaths.forEach((file) => {
    compile(meta, file, file);
    i++;
  });

  if (i === filePaths.length) {
    log('项目创建成功！', 'info');
  }
};
