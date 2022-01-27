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
 * Morris 遍历
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(n) = result 数组长度（最坏情况下树呈链状）
 * Auxiliary complexity: O(1)
 * 其中 n 是二叉树的节点数
 *
 * @param {TreeNode} root
 * @param {number[]} result
 * @returns {number[]}
 */
function inorderTraversal(root) {
    const result = [];
    let node = root;

    while (node) {
        if (node.left === null) {
            result.push(node.val);
            node = node.right;
        } else {
            let predecessor = node.left;

            while (predecessor.right && predecessor.right !== node) {
                predecessor = predecessor.right;
            }
            if (predecessor.right === null) {
                predecessor.right = node;
                node = node.left;
            } else {
                result.push(node.val);
                predecessor.right = null;
                node = node.right;
            }
        }
    }

    return result;
}

module.exports = inorderTraversal;
