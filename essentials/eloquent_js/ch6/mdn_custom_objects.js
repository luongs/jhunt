// JS uses function as constructors instead of class
var Person = function(firstName) {
  this.firstName = firstName;
};

// Create methods for each functions
Person.prototype.sayHello = function(){
  console.log("Hello, I'm "+this.firstName);
};

var person1 = new Person('Alice');
var person2 = new Person('Bob');

person1.sayHello();
person2.sayHello();
