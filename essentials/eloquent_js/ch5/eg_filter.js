require('./ancestry.js');

var string = JSON.stringify({name:"X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);
