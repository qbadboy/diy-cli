const chalk = require('chalk');
const colors = {
  primary: 'white',
  warning: 'yellow',
  info: 'green',
  error: 'red'
};

const log = (content, type) => {
  const color = colors[type] || 'white';
  const draw = chalk[color];
  console.log(draw(content));
}

module.exports = log;