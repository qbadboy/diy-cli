const path = require('path');
const shell = require('../utils/shell');
const log = require('../utils/log');
const open = require('open');

module.exports = async (projName) => {
  const options = {
    cwd: path.join(process.cwd(), projName),
  };
  log(`😎 构建依赖库`);
  await shell('npm', ['run', 'lib:es'], options);

  log(`🌍 启动项目`);
  open(`http://localhost:8080`);
  shell('npm', ['run', 'serve'], options);
};
