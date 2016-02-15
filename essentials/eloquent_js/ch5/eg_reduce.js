// Compute a single value from array. ie: fold up array one element
// at a time. Eg: sum numbers, start with 0 and for each element 
// combine it with current sum

function reduce(array, combine, start){
  var current = start;
  for (var i=0; i<array.length; i++){
    current = combine(current, array[i]);
  }
  return current;
}

console.log(reduce([1,2,3,4], function(a,b){
  return a+b;
}, 0));
