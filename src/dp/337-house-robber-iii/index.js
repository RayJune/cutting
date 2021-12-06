/*
 * 337. House Robber III
 *
 * The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.
 *
 * Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.
 *
 * Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.
 *
 * Example 1:
 * Input: root = [3, 2, 3, null, 3, null, 1]
 * Output: 7
 * Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
 *
 * Example 2:
 * Input: root = [3, 4, 5, 1, 3, null, 1]
 * Output: 9
 * Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10 ** 4].
 * 0 <= Node.val <= 10 ** 4
 *
 * https://leetcode.com/problems/house-robber-iii/
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
 * Dynamic Programming
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(n) = postorderTraversal 函数调用栈深度
 * Auxiliary complexity: O(n) = postorderTraversal 函数调用栈深度
 * 其中 n 是二叉树的节点数
 *
 * @param {TreeNode} root
 */
function rob(root) {
    const postorderTraversal = node => {
        if (node === null) {
            return [0, 0];
        }

        const {left, right, val} = node;
        const leftSum = postorderTraversal(left);
        const rightSum = postorderTraversal(right);
        const selected = val + leftSum[1] + rightSum[1];
        const notSelected = Math.max(leftSum[0], leftSum[1]) + Math.max(rightSum[0], rightSum[1]);

        return [selected, notSelected];
    }
    const rootSum = postorderTraversal(root);

    return Math.max(rootSum[0], rootSum[1]);
}

module.exports = rob;
