const os = require('os');
const add = require('./local-module.js');
const chalk = require('chalk');

console.log('Operating System Info:', os.platform());
console.log('free memory', os.freemem());
console.log('total-value', add(10, 20));
console.log('external model chalk', chalk.blue('Hello world!'));
console.log('os type', os.type());
console.log('os platform',os.platform());
console.log('os arch', os.arch());
console.log('os hostnam', os.hostname());
console.log('os.release', os.release());
console.log('os uptime', os.uptime());
console.log('os userinfo', os.userInfo());
console.log('os.total memory', os.totalmem());
console.log('os cpus', os.cpus().length);






