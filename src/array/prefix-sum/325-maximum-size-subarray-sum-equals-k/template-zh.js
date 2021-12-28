/*
 * 325. 和等于 k 的最长子数组长度
 *
 * 给定一个数组 nums 和一个目标值 k，找到和等于 k 的最长连续子数组长度。如果不存在任意一个符合要求的子数组，则返回 0。
 *
 * Example 1:
 * Input: nums = [1, -1, 5, -2, 3], k = 3
 * Output: 4
 *
 * Example 2:
 * Input: nums = [-2, -1, 2, 1], k = 1
 * Output: 2
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2 * 10 ** 5
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * (-10) ** 9 <= k <= 10 ** 9
 *
 * https://leetcode-cn.com/problems/maximum-size-subarray-sum-equals-k/
*/

module.exports = maxSubArrayLen;
