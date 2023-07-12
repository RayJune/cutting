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
 * 思路：用递归来实现 DFS，注意 p.left.val === q.right.val, p.right.val === q.left.val
 *
 * Time Complexity: O(n) = 函数执行次数
 * Space Complexity: O(n) = 函数调用栈深度
 * Auxiliary Complexity: O(n) = 函数调用栈深度
 * 其中 n 是以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {boolean}
 */
function isSymmetric(root) {
    const helper = (p, q) => {
        if (p && q) {
            return p.val === q.val
                && helper(p.left, q.right)
                && helper(p.right, q.left);
        }

        return p === q;
    };

    return helper(root.left, root.right);
}

module.exports = isSymmetric;
