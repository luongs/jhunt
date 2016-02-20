function sayAlice(){
  var say = function() {console.log(alice);};
  // Variable hoisting happens
  var alice = "Hello alice";
  return say;
}

sayAlice()();
