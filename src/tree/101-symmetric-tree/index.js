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
 *
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
 * 递归
 *
 * Time Complexity: O(n) = isEqual 函数执行次数 O(n)
 * Space complexity: O(n) = isEqual 函数调用栈深度 O(n)
 * Auxiliary complexity: O(n) = isEqual 函数调用栈深度 O(n)
 * 其中 n 为二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {boolean}
 */
function isSymmetric(root) {
    if (root === null) {
        return true;
    }

    const isEqual = (root1, root2) => {
        if (root1 === null && root2 === null) {
            return true;
        }
        if (root1 === null || root2 === null) {
            return false;
        }

        return root1.val === root2.val
            && isEqual(root1.left, root2.right)
            && isEqual(root1.right, root2.left);
    };

    return isEqual(root.left, root.right);
}

module.exports = isSymmetric;
