/*
 * 99. 恢复二叉搜索树
 *
 * 给你二叉搜索树的根节点 root ，该树中的恰好两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树。
 *
 * Example 1:
 * Input: root = [1, 3, null, null, 2]
 * Output: [3, 1, null, null, 2]
 * Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
 *
 * Example 2:
 * Input: root = [3, 1, 4, null, null, 2]
 * Output: [2, 1, 4, null, null, 3]
 * Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
 *
 * Constraints:
 * The number of nodes in the tree is in the range [2, 1000].
 * (-2) ** 31 <= Node.val <= 2 ** 31 - 1
 *
 * Follow up: A solution using O(n) space is pretty straight-forward. Could you devise a constant O(1) space solution?
 *
 * https://leetcode.cn/problems/recover-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export default recoverTree;
