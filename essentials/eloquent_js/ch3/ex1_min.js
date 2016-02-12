// Return first parameter if its smaller or equal than second
// otherwise return second parameter
function min(val1, val2) {
    if (val1 <= val2)
        return val1;
    else
        return val2;
}

console.log("Min of 0, 10");
console.log(min(0,10));

console.log("Min of 0,-10");
console.log(min(0,-10));
