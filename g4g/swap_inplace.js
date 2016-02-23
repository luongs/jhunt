function swap(a,b){
  a = a-b;
  b = b+a;
  a = b-a;
  return {'a':a, 'b':b};
}

var a = 3;
var b = 1;
var sw = swap(a,b);
console.log("original a: "+a+" b: "+b);
console.log("a: "+sw.a);
console.log("b: "+sw.b);
