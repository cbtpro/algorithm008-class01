/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let dp = [1], //存储的是第i个丑数，
  p2 = 0, p3 = 0, p5 = 0, i = 1;
  while(i < n){
    let min = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
    dp[i] = min;
    if(min === dp[p2] *2 ) p2++;
    if(min === dp[p3] * 3) p3++;
    if(min === dp[p5] * 5) p5++;
    i++;
  }
  return dp[n-1];
};