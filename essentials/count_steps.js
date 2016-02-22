// Very similar to fibonacci recursion
// O(3^n) can be optimized with DP
function countWays(n){
  if (n<0){
    return 0;
  } else if (n==0){
    return 1;
  } else {
    return countWays(n-1)+countWays(n-2)+countWays(n-3);
  }
}

console.log(countWays(5));
