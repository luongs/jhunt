// Taken from http://www.geeksforgeeks.org/count-strictly-increasing-subarrays/
function countIncrease(arr){
  var combo = 1; 
  var count = 0;

  for (var i=0; i<arr.length-1; i++){
    if (arr[i] < arr[i+1]){
      count += 1*combo; 
      combo++;
    }
    else
        combo = 1; 
  }
  return count;
}

var arr1 = [1,4,3];
var arr2 = [1,2,3,4];
var arr3 = [1,2,2,4];
var arr4 = [3,2,1];
var arr5 = [2,1,3,4,0,1];

console.log(countIncrease(arr1));
console.log(countIncrease(arr2));
console.log(countIncrease(arr3));
console.log(countIncrease(arr4));
console.log(countIncrease(arr5));
