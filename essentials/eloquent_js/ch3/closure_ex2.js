function say667(){
  var num = 666;
  var say = function() { console.log(num);}
  num++;
  return say;
}

var sayNumber = say667();
sayNumber();
