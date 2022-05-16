/*
 * 325. Maximum Size Subarray Sum Equals k
 *
 * Given an integer array nums and an integer k, return the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.
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
 * 1 <= nums.length <= 2 * 10 ** 5
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * (-10) ** 9 <= k <= 10 ** 9
 *
 * https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/
 */

module.exports = maxSubArrayLen;
