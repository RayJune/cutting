/*
 * 144. Binary Tree Preorder Traversal
 *
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 *
 * Example 1:
 * Input: root = [1, null, 2, 3]
 * Output: [1, 2, 3]
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
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
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
 * 遍历
 *
 * Time Complexity: O(n) = 遍历次数 O(n)
 * Space complexity: O(n) = result 数组长度 O(n) + stack 数组长度 O(n)
 * Auxiliary complexity: O(n) = stack 数组长度 O(n)
 *
 * @param {TreeNode} root
 * @returns {number[]} result
 */
function preorderTraversal(root) {
    const stack = [];
    const result = [];
    let node = root;

    while (node || stack.length) {
        while (node) {
            result.push(node.val);
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        node = node.right;
    }

    return result;
}

module.exports = preorderTraversal;
