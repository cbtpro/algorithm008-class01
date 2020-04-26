/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 递归算法1
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//     let array = []
//     helper(root, array)
//     return array
// };
// function helper(root, array) {
//     if (root) {
//         array.push(root.val)
//         if(root.left) helper(root.left, array)
//         if (root.right) helper(root.right, array)
//     }
// }
// 递归算法二 使用javascript的展开语法
// var preorderTraversal = function(root) {
//     return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : []
// };
// 迭代算法
var preorderTraversal = function(root) {
  let array = [];
  if (!root) return array;
  let stack = [ root ];
  while(stack.length > 0) {
      // 从数组尾部取出节点
      let { val, left, right } = stack.pop();
      array.push(val);
      // 先放右侧，再放左侧，stack.poph会先取左侧的节点
      right && stack.push(right);
      left && stack.push(left);
  }
  return array;
};

