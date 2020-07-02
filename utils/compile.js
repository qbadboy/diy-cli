const fs = require('fs');
const handlebars = require('handlebars');

const compile = (meta = {}, filePath, templatePath) => {
  if(fs.existsSync(templatePath)){
    const file = fs.readFileSync(templatePath).toString();
    const template = handlebars.compile(file);
    const result = template(meta);
    fs.writeFileSync(filePath, result);
  }
}

module.exports = compile;