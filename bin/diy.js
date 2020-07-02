#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');
const path = require('path');
const pkg = fs.readFileSync(path.join(__dirname, '../package.json')).toJSON();

const init = require('../libs/init');

// version
program.version(pkg.version);
// register
program
  .command('init <name>')
  .description('init project')
  .action(init);

program.parse(process.argv);
