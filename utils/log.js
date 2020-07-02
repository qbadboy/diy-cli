const chalk = require('chalk');
const colors = {
  primary: 'white',
  warrning: 'yellow',
  error: 'red',
  info: 'green'
}

const log = (content, type = 'primary') => {
  const color = colors[type] || 'white';
  console.log(chalk[color](content));
};

module.exports = log;
