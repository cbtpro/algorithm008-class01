/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // +1
    digits[i]++;
    // 取余数
    digits[i] = digits[i] % 10
    // 如果余数不是0，就说明就不用进位了，后面也不用遍历了，直接返回将结果返回函数体外
    if (digits[i] !== 0) return digits;
  }
  // 判断首位是不是需要进1
  // [10, 0, 0, ……, 0, 0]
  if (digits[0] % 10 === 0) {
    // 因为首位进一，数组长度增加1，同时进位后数组的第一位值是1
    digits.push(0);
    digits[0] = 1;
  }
  return digits;
}