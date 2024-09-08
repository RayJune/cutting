/*
 * 111. Minimum Depth of Binary Tree
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example 1:
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: 2
 *
 * Example 1:
 * Input: root = [2, null, 3, null, 4, null, 5, null, 6]
 * Output: 5
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 10 ** 5].
 * -1000 <= Node.val <= 1000
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export default minDepth;
