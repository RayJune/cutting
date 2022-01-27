/*
 * 108. 将有序数组转换为二叉搜索树
 *
 * 给你一个整数数组 nums ，其中元素已经按升序排列，请你将其转换为一棵高度平衡二叉搜索树。
 *
 * 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 *
 * Example 1:
 * Input: nums = [-10, -3, 0, 5, 9]
 * Output: [0, -3, 9, -10, null, 5]
 * Explanation: [0, -10, 5, null, -3, null, 9] is also accepted:
 *
 * Example 2:
 * Input: nums = [1, 3]
 * Output: [3,1]
 * Explanation: [1, 3] and [3, 1] are both a height-balanced BSTs.
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * nums is sorted in a strictly increasing order.
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

module.exports = sortedArrayToBST;
