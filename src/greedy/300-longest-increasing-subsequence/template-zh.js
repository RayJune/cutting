/*
 * 300. 最长递增子序列
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 *
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3, 6, 2, 7] 是数组 [0, 3, 1, 6, 2, 2, 7] 的子序列。
 *
 * Example 1:
 * Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4.
 *
 * Example 2:
 * Input: nums = [0, 1, 0, 3, 2, 3]
 * Output: 4
 *
 * Example 3:
 * Input: nums = [7, 7, 7, 7, 7, 7, 7]
 * Output: 1
 *
 * Constraints:
 * 1 <= nums.length <= 2500
 * -10 ** 4 <= nums[i] <= 10 ** 4
 *
 * Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
 *
 * https://leetcode.cn/problems/longest-increasing-subsequence/
*/

export default lengthOfLIS;
