function findSymPairs(arr){
    var arr1 = [];
    var arr2 = [];
    
    for (var i=0; i<arr.length; i++){
        arr1.push(arr[i][0]);
        arr2.push(arr[i][1]);
    }

    var res_arr = [];
    for (var j=0; j<arr1.length; j++){
        var match_arr2 = arr2.indexOf(arr1[j]);
        if (match_arr2 != -1){
            var match_arr1 = arr2.indexOf(arr1[match_arr2]);
            if (match_arr1 == j){
                var sym_pair = [arr1[j], arr2[j]];
                res_arr.push(sym_pair);
            }
        }
    }
    return res_arr;
}

var arr = [ [11,20], [30,40], [5,10], [40,30], [10,5]];
console.log(findSymPairs(arr));
