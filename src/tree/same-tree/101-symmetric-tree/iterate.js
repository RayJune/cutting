/*
 * 101. Symmetric Tree
 *
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 *
 * Example 1:
 * Input: root = [1, 2, 2, 3, 4, 4, 3]
 * Output: true
 *
 * Example 2:
 * Input: root = [1, 2, 2, null, 3, null, 3]
 * Output: false
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/symmetric-tree/
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
 * 输入二叉树的根节点，判断它是否是对称二叉树
 * 思路：用 Stack 来实现 DFS，注意入栈顺序为 p.left, q.right, p.right, q.left
 *
 * Time Complexity: O(n) = 循环次数
 * Space Complexity: O(n) = stack 数组长度
 * Auxiliary Complexity: O(n) = stack 数组长度
 * 其中 n 是以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {boolean}
 */
function isSymmetric(root) {
    const stack = [root.left, root.right];

    while (stack.length) {
        const p = stack.pop();
        const q = stack.pop();

        if (p === null && q === null) {
            continue;
        }
        if (p === null || q === null || p.val !== q.val) {
            return false;
        }
        stack.push(p.left, q.right, p.right, q.left);
    }

    return true;
}

module.exports = isSymmetric;
