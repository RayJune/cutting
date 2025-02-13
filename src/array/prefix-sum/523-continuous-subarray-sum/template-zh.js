/*
 * 523. 连续的子数组和
 *
 * 给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：
 *
 * 子数组大小至少为 2 ，且子数组元素总和为 k 的倍数。
 *
 * 如果存在，返回 true ；否则，返回 false 。
 *
 * 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。0 始终视为 k 的一个倍数。
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
 * https://leetcode.cn/problems/continuous-subarray-sum/
*/

export default checkSubarraySum;
