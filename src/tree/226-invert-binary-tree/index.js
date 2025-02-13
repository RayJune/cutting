/*
 * 226. Invert Binary Tree
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example 1:
 * Input: root = [4, 2, 7, 1, 3, 6, 9]
 * Output: [4, 7, 2, 9, 6, 3, 1]
 *
 * Example 2:
 * Input: root = [2, 1, 3]
 * Output: [2, 3, 1]
 *
 * Example 3:
 * Input: root = []
 * Output: []
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/invert-binary-tree/
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
 * 递归，深度优先
 *
 * Time Complexity: O(n) = invertTree 函数执行次数
 * Space complexity: O(n) = invertTree 函数调用栈深度（最坏情况下，树呈现链状，空间复杂度为 O(n)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(log n)）
 * Auxiliary complexity: O(n) = invertTree 函数调用栈深度
 * n 为二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {TreeNode}
 */
function invertTree(root) {
    if (root) {
        [root.left, root.right] = [root.right, root.left];
        invertTree(root.left);
        invertTree(root.right);
    }

    return root;
}

export default invertTree;
