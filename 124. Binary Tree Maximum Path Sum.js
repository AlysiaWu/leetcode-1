// Given a non-empty binary tree, find the maximum path sum.
//
// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
//
// Example 1:
//
// Input: [1,2,3]
//
//   1
//  / \
// 2   3
//
// Output: 6
//
// Example 2:
//
// Input: [-10,9,20,null,null,15,7]
//
//  -10
//  / \
// 9  20
//   /  \
//  15   7
//
// Output: 42

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Time complexity O(n)
function maxPathSum(root) {
  let max = -Infinity;

  function getMaxSum(node) {
    if (!node) return 0;

    const lSum = getMaxSum(node.left);
    const rSum = getMaxSum(node.right);

    max = Math.max(max, node.val + lSum + rSum);

    return Math.max(0, node.val + lSum, node.val + rSum);
  }

  getMaxSum(root);

  return max;
}
