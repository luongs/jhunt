function isEven(num){
  if (num==1){
    return false;
  }

  if (num===0){
    return true;
  }

  return isEven(Math.abs(num-2));

}

console.log("Is 50 even?");
console.log(isEven(50));
console.log("Is 75 event?");
console.log(isEven(75));
console.log("Is -1 event?");
console.log(isEven(-1));
console.log("Is -4 event?");
console.log(isEven(-4));
