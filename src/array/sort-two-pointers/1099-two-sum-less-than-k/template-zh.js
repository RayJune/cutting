/*
 * 1099. 小于 K 的两数之和
 *
 * 给你一个整数数组 nums 和整数 k ，返回最大和 sum ，满足存在 i < j 使得 nums[i] + nums[j] = sum 且 sum < k 。如果没有满足此等式的 i, j 存在，则返回 -1 。
 *
 * Example 1:
 * Input: nums = [34, 23, 1, 24, 75, 33, 54, 8], k = 60
 * Output: 58
 * Explanation: We can use 34 and 24 to sum 58 which is less than 60.
 *
 * Example 2:
 * Input: nums = [10, 20, 30], k = 15
 * Output: -1
 * Explanation: In this case it is not possible to get a pair sum less that 15.
 *
 * Constraints:
 * n == nums.length
 * 0 <= n <= 3500
 * -100 <= nums[i] <= 100
 * -100 <= target <= 100
 *
 * https://leetcode.cn/problems/two-sum-less-than-k/
*/

module.exports = twoSumLessThanK;
