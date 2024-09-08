/*
 * 674. 最长连续递增序列
 *
 * 给定一个未经排序的整数数组，找到最长且连续递增的子序列，并返回该序列的长度。
 *
 * 连续递增的子序列可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
 *
 * Example 1:
 * Input: nums = [1, 3, 5, 4, 7]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [2, 2, 2, 2, 2]
 * Output: 1
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * -10 ** 9 <= nums[i] <= 10 ** 9
 *
 * https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
*/

export default findLengthOfLCIS;
