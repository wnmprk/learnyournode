var fs = require('fs');

var lines = fs.readFileSync(process.argv[2]);
var count = lines.toString().split('\n').length-1;
console.log(count);