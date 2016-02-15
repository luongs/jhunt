require('./ancestry.js');

var string = JSON.stringify({name:"X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);

// creates an array with only the elements that pass the test
function filter(array, test){
  var passed = [];
  for (var i=0; i<array.length; i++) {
      if (test(array[i])){
          passed.push(array[i]);
      }
  }
  return passed;
}

console.log(filter(ANCESTRY_FILE, function(person){
  return person.born >1900 && person.born<1925;
}));
