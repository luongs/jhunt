function wrapValue(n) {
    var localVariable = n;
    return function() {return localVariable;};
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());   // 1
console.log(wrap2());   // 2

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var twice = multiplier(2);
// frozen code still has access to factor 2 
// in twice() you also supplement it with number 5
console.log(twice(5));  // 10
