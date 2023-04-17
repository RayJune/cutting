/*
 * 104. Maximum Depth of Binary Tree
 *
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * Example 1:
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: 3
 *
 * Example 1:
 * Input: root = [1, null, 2]
 * Output: 2
 *
 * Example 3:
 * Input: root = []
 * Output: 0
 *
 * Example 4:
 * Input: root = [0]
 * Output: 1
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 10 ** 4].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 输入二叉树的根节点，返回其最大深度
 * 思路：用递归来实现 DFS 深度优先遍历
 *
 * Time Complexity: O(n) = 函数执行次数
 * Space Complexity: O(n) = 函数调用栈深度（最坏情况下树成链状）
 * Auxiliary Complexity: O(n) = 函数调用栈深度（最坏情况下树成链状）
 * 其中 n 是以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function maxDepth(root) {
    if (root === null) {
        return 0;
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

module.exports = maxDepth;
