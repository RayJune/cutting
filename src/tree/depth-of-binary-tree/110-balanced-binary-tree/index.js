/*
 * 110. Balanced Binary Tree
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 * For this problem, a height-balanced binary tree is defined as:
 *
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 *
 * Example 1:
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: true
 *
 * Example 2:
 * Input: root = [1, 2, 2, 3, 3, null, null, 4, 4]
 * Output: false
 *
 * Example 3:
 * Input: root = []
 * Output: true
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 5000].
 * -10 ** 4 <= Node.val <= 10 ** 4
 *
 * https://leetcode.com/problems/balanced-binary-tree/
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
 * 自顶向下的递归
 *
 * Time Complexity: O(n ** 2) = isBalanced 函数执行次数 O(n) * maxDepth 函数执行次数 O(n)
 * Space complexity: O(n) = 函数调用栈深度 O(n)
 * Auxiliary complexity: O(n) = 函数调用栈深度
 * n 为二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {number}
 */
function isBalanced(root) {
    if (root === null) {
        return true;
    }
    if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right);
}

/**
 * @param {TreeNode} root
 * @returns {number}
 */
function maxDepth(root) {
    if (root === null) {
        return 0;
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

export default isBalanced;
