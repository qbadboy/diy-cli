const fs = require('fs');
const path = require('path');
const log = require('../utils/log');
const compile = require('../utils/compile');

const prefixPath = (_path) => {
  return path.join(process.cwd(), _path);
};

module.exports = () => {
  const filePath = prefixPath('./src/pages');
  try {
    const pages = fs.readdirSync(filePath);
    const routes = pages.map((m) => {
      const [name, ext] = m.split('.');
      return {
        name: name,
        path: `/${name}`,
        module: `../pages/${m}`,
      };
    });
    let files = [
      {
        file: './src/router/routes.js',
        template: './templates/routes.js.hbs',
      },
      {
        file: './src/components/Link.vue',
        template: './templates/Link.vue.hbs',
      },
    ];
    files = files.map((item) => ({
      file: prefixPath(item.file),
      template: prefixPath(item.template),
    }));
    files.forEach(({ file, template }) => {
      compile({ routes }, file, template);
    });
  } catch (e) {
    log(`文件夹不存在：${filePath}`, 'error');
    console.log(e);
  }
};
