function arrayToList(arr){
  var list = [];
  var prev_list = null; 

   for (var i=arr.length-1; i>=0; i--){
     // create new object
     var obj = {};
     obj.value = arr[i];
     obj.next = prev_list;
     list.push(obj);
     // set reference to previous object
     prev_list = obj; 
   }
  
   return list.pop();
}

function listToArray(list){
  var arr = [];
  for (var node = list; node ; node = node.next){
    arr.push(node.value);
  }

  return arr;
}

function prepend(element, list){
  var new_list = {};
  new_list.value = element;
  new_list.next = list;
  return new_list;
}

function nth(list, index){
  if (list===null){
    return undefined; 
  }

  if (index === 0){
    return list.value;
  }
  
  return nth(list.next, index-1);

}


console.log(arrayToList([10,20,30]));
console.log(listToArray(arrayToList([10,20,30])));
console.log(prepend(10, prepend(20,null)));
console.log(nth(arrayToList([10,20,30]), 1));
