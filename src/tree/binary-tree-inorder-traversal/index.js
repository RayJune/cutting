/*
 * 94. Binary Tree Inorder Traversal
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example 1:
 * Input: root = [1, null, 2, 3]
 * Output: [1,2,3]
 *
 * Example 2:
 * Input: root = []
 * Output: []
 *
 * Example 3:
 * Input: root = [1]
 * Output: [1]
 *
 * Example 4:
 * Input: root = [1, 2]
 * Output: [1, 2]
 *
 * Example 5:
 * Input: root = [1, null, 2]
 * Output: [1, 2]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
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
 * 递归
 *
 * Time Complexity: O(n) = 递归函数执行次数 O(n)
 * Space complexity: O(n) = result 数组长度 O(n) + 函数调用栈深度 O(n)
 * Auxiliary complexity: O(n) = 函数调用栈深度 O(n)
 * 其中 n 为二叉树的节点数，最坏情况下树呈现链状
 *
 * @param {TreeNode} root
 * @param {number[]} result
 * @returns {number[]} result
 */
function inorderTraversal(root, result = []) {
    if (root) {
        inorderTraversal(root.left, result);
        result.push(root.val);
        inorderTraversal(root.right, result);
    }

    return result;
}

module.exports = inorderTraversal;
