function buildList(list){
  var resutl = [];
  for (var i=0; i<list.length; i++){
    var item = 'item '+i;
    result.push(function() {console.log(item+' '+list[i])});
  }
  return result;
}

function testList(){
  var fnList = buildList([1,2,3]);

  for (var j=0; j<fnList.length; j++){
    fnList[j]();
  }
}
