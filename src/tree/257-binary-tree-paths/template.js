/*
 * 257. Binary Tree Paths
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 *
 * A leaf is a node with no children.
 *
 * Example 1:
 * Input: [1, 2, 3, null, 5]
 * Output: ["1->2->5", "1->3"]
 *
 * Example 2:
 * Input: root = [1]
 * Output: ["1"]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 100].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/binary-tree-paths/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export default binaryTreePaths;
