/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  if (!root) return [];
  var res = [];
  function recusion(root){
    if (!root) return;
    for (var i = 0; i < root.children.length; i++){
      recusion(root.children[i]);
    }
    res.push(root.val)
  }
  recusion(root);
  return res;
};
