#!/usr/bin/env node
// 指令参数处理
const program = require('commander');
const pkg = require('../package.json');
const log = require('../utils/log');
// libs
const initCommand = require('../commands/init');
// defined version
program.version(pkg.version, '-v, --version');
// regist command

// 1.print DIY CLI
// 2.select options && input name
// 3.clone template
// 4.generte files
// 5.npm install
// 6.start dev server
program
  .command('init <dirname>')
  .description('init project')
  .action(initCommand);

program
  .command('refresh')
  .description('scan pages and generte routes.js')
  .action(() => {
    log(`generte routes.js`, 'warring');
  });

program
  .arguments('<commands>')
  .action(cmd => {
    program.outputHelp();
    console.log('\n');
    log(`==========================`, 'error');
    log(`error: unknow option ${cmd}`, 'error');
    log(`==========================`, 'error');
  })
// parse arguments
program.parse(process.argv);

if(!process.argv.slice(2).length) {
  program.outputHelp();
}
