var arrays = [[1,2,3], [4,5], [6]];

function reduce(array,combine, start){
  var current = start;
  for (var i=array.length-1; i>=0; i--){
    current = combine(current, array[i]);
  }
  return current;
}

console.log(reduce(arrays, function(bla, arr){
  return arr.concat(bla);
}));
