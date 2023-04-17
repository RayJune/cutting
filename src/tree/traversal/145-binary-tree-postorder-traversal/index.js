/*
 * 145. Binary Tree Postorder Traversal
 *
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 *
 * Example 1:
 * Input: root = [1, null, 2, 3]
 * Output: [3, 2, 1]
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
 * Output: [2, 1]
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
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
 * 输入二叉树的根节点，返回其后序遍历的节点值数组
 * 后序遍历：left subtree -> right subtree -> root
 * 思路：递归 Recursion
 *
 * Time Complexity: O(n) = 函数执行次数
 * Space Complexity: O(n) = result 数组长度 / 函数调用栈深度（最坏情况下树呈现链状）
 * Auxiliary Complexity: O(n) = 函数调用栈深度（最坏情况下树呈现链状）
 * 其中 n 为以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @param {number[]} [result=[]]
 * @return {number[]}
 */
function postorderTraversal(root, result = []) {
    if (root) {
        const {val, left, right} = root;

        postorderTraversal(left, result);
        postorderTraversal(right, result);
        result.push(val);
    }

    return result;
}

module.exports = postorderTraversal;
