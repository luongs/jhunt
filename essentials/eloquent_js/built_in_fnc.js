/*Strings*/
var str = "Stan";

// length
console.log(str.length);

// prototype, requires object to be created first
function person(name,nationality) {
    this.name = name;
    this.nationality = nationality;
}
person.prototype.lastname = "Smith";

var stan = new person("Stan", "Canadian");
console.log("Protoype test: "+stan.lastname);
console.log("charAt(): "+str.charAt(0));
console.log("charCodeAt() "+str.charCodeAt(0));
console.log("indexOf(): "+str.indexOf("n"));

console.log("split(): "+str.split(''));
var space_str = "       White Space       ";
console.log("original str: "+space_str);
console.log("trim(): "+space_str.trim());

/* Numbers */
console.log("Max number: "+Number.MAX_VALUE);
console.log("Min number: "+Number.MIN_VALUE);

/* Math */
console.log("PI: "+Math.PI);
var calc = 2-3;
console.log("abs() "+Math.abs(calc));
console.log("ceil() PI "+Math.ceil(Math.PI));
console.log("floor() PI "+Math.floor(Math.PI));
console.log("sqrt() 9: "+Math.sqrt(9));
console.log("random() bw 1 - 5: "+Math.floor(Math.random()*5+1));

/* Array */
var arr = [0,1,2,3,4,5];
var arr2 = [6,7,8,9];
console.log("Original array: "+arr);
console.log("concat(): "+arr.concat(arr2));
arr = arr.concat(arr2);
arr = arr.filter(function(num){
    return num >3;
});
console.log("filter() values > 3: "+arr);

console.log("forEach() print values");
arr.forEach(function(val){
    console.log(val);
});
console.log("indexOf() 9: "+arr.indexOf(9));
arr = arr.map(function(val){
    return val+1;
});
console.log("map() to transform arr by adding 1: "+arr);
console.log("pop() last element of array: "+arr.pop());
arr.pop();
arr.push(1);
console.log("push() 1 to end of array: "+arr);
var sum = arr.reduce(function(total, cur){
    return total + cur;
});
console.log("reduce() array to a single value: "+sum);
arr.sort();
console.log("sort() array: "+arr);
