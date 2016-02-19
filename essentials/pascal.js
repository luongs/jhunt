function pascalSimple(numTiers){
  var triangle = [[1]];
  var tier;

  for (var j=0; j<numTiers-1; j++){
    // initialize left most
    tier = [1];
    for (var k=1; k<triangle[j].length; k++){
      tier[k] = triangle[j][k]+triangle[j][k-1];
    }
    // add right most
    tier.push(1);
    triangle.push(tier);
  }
  return triangle;
}

var triangle = pascalSimple(4);
console.log(triangle);
