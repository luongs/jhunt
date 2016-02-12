function countChars(str, ch){
  var count = 0;

  for(var i=0; i<str.length; i++){
    if (str.charAt(i)==ch){
      count++;
    }
  }
  
  return count;
}

function countBs(str){
  return countChars(str, 'B');
}

console.log("BBC");
console.log(countBs("BBC"));
console.log("kakkerlak");
console.log(countChars("kakkerlak", 'k'));
