const path = require('path');
const log = require('../utils/log');
const shell = require('../utils/shell');

module.exports = async (dirname) => {
  log(`📦 开始安装`, 'warrning');
  // npm install
  await shell('npm', ['install'], {
    cwd: path.join(process.cwd(), dirname),
  });
  log(
    `
  ======================
    安装完成！         
    cd ./${dirname}
    npm run serve     
  ======================
  \n\n`,
    'warrning'
  );
};
