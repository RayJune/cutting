/*
 * 523. Continuous Subarray Sum
 *
 * Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise.
 *
 * An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 *
 * Example 1:
 * Input: nums = [23, 2, 4, 6, 7], k = 6
 * Output: true
 *
 * Example 2:
 * Input: nums = [23, 2, 6, 4, 7], k = 6
 * Output: true
 *
 * Example 3:
 * Input: nums = [23, 2, 6, 4, 7], k = 13
 * Output: false
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 5
 * 0 <= nums[i] <= 10 ** 9
 * 0 <= sum(nums[i]) <= 2 ** 31 - 1
 * 1 <= k <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/continuous-subarray-sum/
 */

export default checkSubarraySum;
