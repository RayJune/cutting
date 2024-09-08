/*
 * 259. 较小的三数之和
 *
 * 给定一个长度为 n 的整数数组和一个目标值 target，寻找能够使条件 nums[i] + nums[j] + nums[k] < target 成立的三元组 i, j, k 个数（0 <= i < j < k < n）。
 *
 * Example 1:
 * Input: nums = [-2, 0, 1, 3], target = 2
 * Output: 2
 * Explanation: Because there are two triplets which sums are less than 2:
 * [-2, 0, 1]
 * [-2, 0, 3]
 *
 * Example 2:
 * Input: nums = [], target = 0
 * Output: 0
 *
 * Example 3:
 * Input: nums = [0], target = 0
 * Output: 0
 *
 * Constraints:
 * n == nums.length
 * 0 <= n <= 3500
 * -100 <= nums[i] <= 100
 * -100 <= target <= 100
 *
 * Constraints:
 * n == nums.length
 * 0 <= n <= 3500
 * -100 <= nums[i] <= 100
 * -100 <= target <= 100
 *
 * https://leetcode.cn/problems/3sum-smaller/
*/

export default threeSumSmaller;
