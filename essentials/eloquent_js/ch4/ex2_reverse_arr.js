function reverseArray(arr){
  res_arr = [];
  for (var i = arr.length-1; i>=0; i--){
    res_arr.push(arr[i]);
  }
  return res_arr;
}

function reverseInPlace(arr){
  var temp; 
  var endIndex = arr.length-1; 
  var frontIndex = 0;

  while (frontIndex<endIndex){
    temp = arr[frontIndex];
    arr[frontIndex] = arr[endIndex];
    arr[endIndex] = temp;
    frontIndex++;
    endIndex--;
  }
}

console.log(reverseArray(['A', 'B', 'C']));
var arrayValue = [1,2,3,4,5];
reverseInPlace(arrayValue);
console.log(arrayValue);
