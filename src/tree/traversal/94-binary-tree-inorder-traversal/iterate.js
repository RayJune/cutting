/*
 * 94. Binary Tree Inorder Traversal
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example 1:
 * Input: root = [1, null, 2, 3]
 * Output: [1, 3, 2]
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
 * Output: [2, 1]
 *
 * Example 5:
 * Input: root = [1, null, 2]
 * Output: [1, 2]
 *
 * Constraints:
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
 * Iteration
 *
 * Time Complexity: O(n) = 遍历次数
 * Space Complexity: O(n) = result 数组长度 / stack 数组长度（最坏情况下树呈链状）
 * Auxiliary Complexity: O(n) = stack 数组长度（最坏情况下树呈链状）
 * 其中 n 为以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const stack = [];

    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }

    return result;
}

module.exports = inorderTraversal;
