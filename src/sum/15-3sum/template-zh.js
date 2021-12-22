/*
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a, b, c，
 * 使得 a + b + c = 0。请你找出所有和为 0 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * Example 1:
 * Input: nums = [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 * Example 2:
 * Input: nums = []
 * Output: []
 *
 * Example 3:
 * Input: nums = [0]
 * Output: []
 *
 * 提示:
 *
 * 0 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 * https://leetcode-cn.com/problems/3sum/
 *
*/

module.exports = threeSum;
