// Create a new array with transform function applied to all elements
function map(array, transform){
  var mapped = [];
  for (var i = 0; i<array.length; i++){
    mapped.push(transform(array[i]));
  }
  return mapped;
}

var overNinety = ancestry.filter(function(person){
  return person.died - person.born > 90;
});

console.log(map(overNinety, function(person){
  return person.name;
}));
