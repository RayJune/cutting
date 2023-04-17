/*
 * 226. 翻转二叉树
 *
 * 翻转一棵二叉树。
 *
 * Example 1:
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: 3
 *
 * Example 1:
 * Input: root = [1, null, 2]
 * Output: 2
 *
 * Example 3:
 * Input: root = []
 * Output: 0
 *
 * Example 4:
 * Input: root = [0]
 * Output: 1
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 10 ** 4].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.cn/problems/invert-binary-tree/
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
 * 迭代，广度优先
 *
 * Time Complexity: O(n) = invertTree 函数执行次数
 * Space complexity: O(n) = stack 长度 O(n)
 * Auxiliary complexity: O(n) = stack 长度 O(n)
 * n 为二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {TreeNode}
 */
function invertTree(root) {
    const stack = [root];

    while (stack.length) {
        const node = stack.pop();

        if (node === null) {
            continue;
        }
        [node.left, node.right] = [node.right, node.left];
        stack.push(node.right, node.left);
    }

    return root;
}

module.exports = invertTree;
