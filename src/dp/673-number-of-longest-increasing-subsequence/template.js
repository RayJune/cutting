/*
 * 673. Number of Longest Increasing Subsequence
 *
 * Given an integer array nums, return the number of longest increasing subsequences.
 *
 * Notice that the sequence has to be strictly increasing.
 *
 * Example 1:
 * Input: nums = [1, 3, 5, 4, 7]
 * Output: 2
 * Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
 *
 * Example 2:
 * Input: nums = [2, 2, 2, 2, 2]
 * Output: 5
 *
 * Constraints:
 * 1 <= nums.length <= 2000
 * -10 ** 6 <= nums[i] <= 10 ** 6
 *
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence/
*/

module.exports = findNumberOfLIS;
