function range(start, end, step){
  var arr = [];
  if (start <= end){
     if (step){
       for (var i=start; i<=end; i+=step){
         arr.push(i);
       } 
     }
     else{  
      for (var j=start; j<=end; j++){
        arr.push(j);
       }
     }
  }
  else {
    if (step){
      for (var p=start; p>=end; p+=step){
        arr.push(p);
      }
    }
    else {
      for (var q=start; q>=end; q--){
        arr.push(q);
      }
    }
  }
  return arr; 
}

function sumArr(arr){
   var sum=0; 
   for (var i=0; i<arr.length; i++){
     sum+= arr[i];
   }
   return sum;
}

var arr = range(5,2, -1);
var sum = sumArr(arr);
console.log(sum);
