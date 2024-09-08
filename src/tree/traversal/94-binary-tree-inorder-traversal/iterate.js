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
 * 输入二叉树的根节点，返回其中序遍历的节点值数组
 * 中序遍历：left subtree -> root -> right subtree
 * 思路：用 Stack 的概念来遍历，按前序遍历顺序入栈出栈。其中重点在遍历完当前节点的 left -> root -> right 后需要返回到上一个父亲节点。
 *
 * Time Complexity: O(n) = 入栈次数和出栈次数之和
 * Space complexity: O(n) = result 数组长度 / stack 长度（最坏情况下树成链状）
 * Auxiliary complexity: O(n) = stack 长度（最坏情况下树成链状）
 * 其中 n 是以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
function inorderTraversal(root) {
    const stack = [];
    const result = [];
    let node = root;

    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }

        const {val, right} = stack.pop();

        result.push(val);
        node = right;
    }

    return result;
}

export default inorderTraversal;
