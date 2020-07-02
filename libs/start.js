const path = require('path');
const shell = require('../utils/shell');
const log = require('../utils/log');
const open = require('open');

module.exports = async diranme => {
  const options = {
    cwd: path.join(process.cwd(), diranme),
  };

  log(`🌍 启动项目`);
  open(`http://localhost:8080`);
  shell('npm', ['run', 'serve'], options);
};
