function average(array) {
  function plus(a,b) { return a+b; }
  return array.reduce(plus) / array.length;
}

function age(p) {return p.died - p.born;}
function male(p) {return p.sex == "m";}
function female(p) {return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(femaile).map(age)));
