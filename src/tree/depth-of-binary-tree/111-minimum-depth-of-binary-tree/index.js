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

/**
 * 输入二叉树的根节点，返回其最小深度
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
function minDepth(root) {
    if (root === null) {
        return 0;
    }

    const {left, right} = root;

    if (left === null) {
        return minDepth(right) + 1;
    }
    if (right === null) {
        return minDepth(left) + 1;
    }

    return Math.min(minDepth(left), minDepth(right)) + 1;
}

module.exports = minDepth;
