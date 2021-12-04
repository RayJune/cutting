/*
 * 673. 最长递增子序列的个数
 *
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。
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
 * https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/
*/

module.exports = findNumberOfLIS;
