const path = require('path');
const log = require('../utils/log');
const shell = require('../utils/shell');

module.exports = async (projName) => {
  log(`📦 开始安装`, 'warrning');
  // npm install
  await shell('npm', ['install'], {
    cwd: path.join(process.cwd(), projName),
  });
  log(
    `
  ======================
    安装完成！         
    cd ./${projName}  
    npm run lib:es  
    npm run serve     
  ======================
  \n\n`,
    'warrning'
  );
};
