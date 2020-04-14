// 解题思路
// 循环k次从数据末尾摘取元素，放到数组头部
// 执行一次直接摘取k 数组长度- k，然后截取部分插入数组头部。
// 比较k之前和之后的长度，如果前面短，就操作k前方的，如果后面短，就操作后面的
// 列举输入 [1, 2, 3] 3;[1, 2, 3] 6;[1, 2, 3] 9;
// 特判：如果移动位数是数组长度的倍数，因为移动后跟原数组一模一样，所以不用移动，直接返回
// 编写代码
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   if (k % nums.length === 0) return
//   for(let i = 0; i < k; i++) {
//     nums.splice(0, 0, nums.pop())
//   }
// };
var rotate = function(nums, k) {
  if (k % nums.length === 0) return
  nums.splice(0,0,...nums.splice(nums.length - k))
}

// var rotate = function(nums, k) {
//   if (k % nums.length === 0) return
//   while(k > 0) {
//     nums.splice(0, 0, nums.pop())
//     k--;
//   }
// }