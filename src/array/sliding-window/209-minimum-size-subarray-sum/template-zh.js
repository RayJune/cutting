/*
 * 209. 长度最小的子数组
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 *
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 * Example 1:
 * target = 7, nums = [2, 3, 1, 2, 4, 3]
 * Output: 2
 * Explanation: The subarray [4, 3] has the minimal length under the problem constraint.
 *
 * Example 2:
 * Input: target = 4, nums = [1, 4, 4]
 * Output: 1
 *
 * Example 3:
 * Input: target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1]
 * Output: 0
 *
 * Constraints:
 * 1 <= target <= 10 ** 9
 * 1 <= nums.length <= 10 ** 5
 * 1 <= nums[i] <= 10 ** 5
 *
 * https://leetcode.cn/problems/minimum-size-subarray-sum/
*/

export default minSubArrayLen;
