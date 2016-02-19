function findCommon(arr){
  var count = 0;
  var max = Number.MIN_VALUE;
  var result; 

  if (arr != undefined){
    if (arr.length<=1)
        return arr[0];
    arr.sort();
    for (var i=1; i<arr.length-1; i++){
      if (arr[i-1]=== arr[i]){
        count++;
        if (count>max){
          max = count;
          result = arr[i];
        }
      }
      else
          count = 0;
    }
  }
  return result;
}

var arr = ["apple", "bee", "apple","axe","bear","bear","bear"];
console.log(findCommon(arr));
