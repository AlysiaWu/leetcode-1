// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//    3
//   / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  let res = [];
  helper(root, 0, res);
  return res;
}

function helper(node, level, res) {
  if (!node) return;

  if (res.length === level) res.push([]);
  res[level].push(node.val);

  helper(node.left, level + 1, res);
  helper(node.right, level + 1, res);
}
