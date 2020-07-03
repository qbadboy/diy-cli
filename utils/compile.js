const fs = require('fs');
const handlebars = require('handlebars');
const log = require('./log');

const compile = (meta = {}, filePath, templatePath) => {
  if(fs.existsSync(templatePath)){
    const file = fs.readFileSync(templatePath).toString();
    const template = handlebars.compile(file);
    const result = template(meta);
    fs.writeFileSync(filePath, result);

    log(`创建成功：${filePath}`, 'info');
  } else {
    log(`模板不存在：${templatePath}`, 'error');
  }
}

module.exports = compile;