const shell = (...args) => {
  const { spawn } = require('child_process');
  const proc = spawn(...args);

  return new Promise((resolve) => {
    // print in terminal
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    // listen event close
    proc.on('close', resolve);
  });
};

module.exports = shell;