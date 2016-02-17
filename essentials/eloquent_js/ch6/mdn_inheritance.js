// Person constructor
var Person = function(firstName){
  this.firstName = firstName;
};

Person.prototype.walk = function(){
  console.log("I am walking");
};

Person.prototype.sayHello = function(){
  console.log("Hello, I'm "+this.firstName);
};

// Define Student constructor
function Student(firstName, subject){
  // Call parent constructor making sure 
  // that "this" is set correctly
  Person.call(this, firstName);
  this.subject = subject;
}

// Create a Student prototype object inheriting from Person.prototype
// Use Object.create instead of new() since you wouldn't have any elements
// to pass as "firstName"
Student.prototype = Object.create(Person.prototype);

// Set constructor property to point to Student
Student.prototype.constructor = Student;

// Replace "sayHello" method
Student.prototype.sayHello = function(){
  console.log("Hello, I'm "+this.firstName+". I'm studying "+this.subject+".");
};

Student.prototype.sayGoodbye = function(){
  console.log("Goodbye");
};

var student1 = new Student("Janet", "Applied Physics");
student1.sayHello();
student1.walk();
student1.sayGoodbye();

// check that instanceof works properly
console.log(student1 instanceof Person);
console.log(student1 instanceof Student);
