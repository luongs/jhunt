Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
      // ------------ INSERT CODE HERE! ----------------------------
      // Add all the items in each subArray to the results array.
      // ------------ INSERT CODE HERE! ----------------------------
       results.concat(subArray);
    });

  return results;
};
