/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    let result = target - nums[i];
    let index = nums.indexOf(result);
    if (index !== -1 && index !== i) return [i, index];
  }
};

// 审题 每种输入只会对应一个答案，重复利用这个数组中同样的元素
// 列举输入 nums = [2, 7, 11, 15], target = 9; nums = [7, 8, 9, 10], target = 18
// 可以用两层循环，时间复杂度是O(N^2)
// 可以用循环一次，用target - 每一项，再将结果从剩余的数组每一项匹配，匹配上了就返回索引。 时间复杂度O(N)
// 假设数组是有序的，如果不是有序的，先排序，然后前后双指针，while(L < R)将前后对应的值相加，如果小于target，那么左指针+1，如果大于target，右指针-1，如果等于target，返回结果。时间复杂度也是O(log2 N)，但是这里不是有序的，擅自排序结果就不对了，所以这种解法只有在有序是才能使用
// 下面是有序的数组的解法
// var twoSum = function(nums, target) {
//   let L = 0, R = nums.length - 1;
//   while(L < R) {
//     let sum = nums[L] + nums[R];
//     if (sum === target) break;
//     else if (sum > target) R--;
//     else L++;
//   }
//   return [L, R];
// }