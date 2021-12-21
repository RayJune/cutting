/*
 * 977. 有序数组的平方
 *
 * 给你一个按非递减顺序排序的整数数组 nums，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 *
 * Example 1:
 * Input: nums = [-4, -1, 0, 3, 10]
 * Output: [0, 1, 9, 16, 100]
 * Explanation: After squaring, the array becomes [16, 1, 0, 9, 100].
 * After sorting, it becomes [0, 1, 9, 16, 100].
 *
 * Example 2:
 * Input: nums = [-7, -3, 2, 3, 11]
 * Output: [4, 9, 9, 49, 121]
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * nums is sorted in non-decreasing order.
 *
 * 进阶: 请你设计时间复杂度为 O(n) 的算法解决本问题
 *
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/
*/

module.exports = sortedSquares;
