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
 *
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
 * 自底向上的递归，-1 表示该树不是平衡的
 *
 * Time Complexity: O(n) = helper 函数执行次数
 * Space complexity: O(n) = helper 函数调用栈深度 （最坏情况下，树呈现链状，空间复杂度为 O(n)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(log n)）
 * Auxiliary complexity: O(n) = helper 函数调用栈深度
 * n 为二叉树的节点数
 *
 * @param {TreeNode} root
 * @return {number}
 */
function isBalanced(root) {
    const helper = root => {
        if (root === null) {
            return 0;
        }

        const left = helper(root.left);

        if (left === -1) {
            return -1;
        }

        const right = helper(root.right);

        if (right === -1 || Math.abs(left - right) > 1) {
            return -1;
        }

        return Math.max(left, right) + 1;
    }

    return helper(root) !== -1;;
}

module.exports = isBalanced;
