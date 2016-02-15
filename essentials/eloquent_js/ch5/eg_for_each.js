function forEach(array, action) {
  for (var i=0; i<array.length; i++){
      action(array[i]);
  }
}

var numbers = [1,2,3,4,5];
sum = 0;

// create an anonymous function
// forEach is provided as a standar array function 
// you'll still need to create a function to act on elements
forEach(numbers, function(number){
  sum+= number;
});

forEach(numbers, function(number){
    console.log(number);
});

console.log("Sum is: "+sum);
