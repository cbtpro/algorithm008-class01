/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = []
  helper(root, res)
  return res
};

function helper(root, res) {
  if (root !== null) {
      if (root.left !== null) {
          helper(root.left, res);
      }
      res.push(root.val);
      if (root.right !== null) {
          helper(root.right, res);
      }
  }
}