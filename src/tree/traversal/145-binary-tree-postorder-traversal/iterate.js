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
 * 思路：用 Stack 的概念来遍历，按照后序遍历顺序来入栈出栈。其中重点在用 prevNode 来判断 right 是否被已经被遍历过。
 *
 * Time Complexity: O(n) = while 循环次数
 * Space Complexity: O(n) = result 数组长度 / stack 数组长度（最坏情况下树呈现链状）
 * Auxiliary Complexity: O(n) = stack 数组长度（最坏情况下树呈现链状）
 * 其中 n 为以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {number[]}
 */
function postorderTraversal(root) {
    if (root === null) {
        return [];
    }

    const stack = [];
    const result = [];
    let node = root;
    let prevNode = null;

    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();

        const {val, right} = node;

        if (right === null || right === prevNode) {
            result.push(val);
            prevNode = node;
            node = null;
        } else {
            stack.push(node);
            node = right;
        }
    }

    return result;
}


module.exports = postorderTraversal;
