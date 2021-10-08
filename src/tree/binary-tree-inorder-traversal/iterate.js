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
 * 迭代
 *
 * Time Complexity: O(n) = 遍历次数 O(n)
 * Space complexity: O(n) = result 数组长度 O(n) + stack 数组长度 O(n)
 * Auxiliary complexity: O(n) = stack 数组长度 O(n)
 * 其中 n 为二叉树的节点数，最坏情况下树呈现链状
 *
 * @param {TreeNode} root
 * @returns {number[]} result
 */
function inorderTraversal(root) {
    const result = [];

    if (root) {
        const stack = [];
        let node = root;

        while (node || stack.length) {
            while (node) {
                stack.push(node);
                node = node.left;
            }
            node = stack.pop();
            result.push(node.val);
            node = node.right;
        }
    }

    return result;
}

module.exports = inorderTraversal;
