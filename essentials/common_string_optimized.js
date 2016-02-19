function mode(array){
  if (array.length===0)
      return null;
  var modeMap = {};
  var maxEl = array[0];
  var maxCount = 1; 

  for (var i=0; i<array.length; i++){
    var el = array[i];
    if (modeMap[el]==null)
      modeMap[el] = 1;
    else 
      modeMap[el]+=1;

    if (modeMap[el]>maxCount){
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}

var arr = ["apple", "bee", "apple","axe","bear","bear","bear"];
console.log(mode(arr));
