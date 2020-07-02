const inquirer = require('inquirer');

module.exports = () => inquirer.prompt([
  {
    type: 'list',
    name: 'framework',
    message: '选择开发框架：',
    choices: ['vue'],
  },
  {
    type: 'input',
    name: 'project',
    message: '输入项目名称',
  },
  {
    type: 'input',
    name: 'description',
    message: '输入项目描述',
  },
]);