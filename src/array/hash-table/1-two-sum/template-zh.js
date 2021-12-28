/*
 * 1. 两数之和
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *
 * 你可以按任意顺序返回答案。
 *
 * Example 1:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: nums[0] + nums[1] = 9
 *
 * Example 2:
 * Input: nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 *
 * Example 3:
 * Input: nums = [3, 3], target = 6
 * Output: [0, 1]
 *
 * Constraints:
 * 2 <= nums.length <= 10 ** 4
 * (-10) ** 9 <= nums[i] <= 10 ** 9
 * (-10) ** 9 <= target <= 10 ** 9
 * Only one valid answer exists.
 *
 * https://leetcode-cn.com/problems/two-sum/
*/

module.exports = twoSum;
