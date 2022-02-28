const path = require('path');

// console.log(path.basename('C:/Bhoomika Sahu/Learning-Nodejs/Path-Module/index.js'));
// console.log(path.dirname('C:/Bhoomika Sahu/Learning-Nodejs/Path-Module/index.js'));
// console.log(path.parse('C:/Bhoomika Sahu/Learning-Nodejs/Path-Module/index.js'));
const par = path.parse('C:/Bhoomika Sahu/Learning-Nodejs/Path-Module/index.js');
console.log(par.root);
console.log(par.dir);
console.log(par.base);
console.log(par.ext);
console.log(par.name);