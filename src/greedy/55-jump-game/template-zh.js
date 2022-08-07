/*
 * 55. 跳跃游戏
 *
 * 给定一个非负整数数组 nums ，你最初位于数组的第一个下标 。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 判断你是否能够到达最后一个下标。
 *
 * Example 1:
 * Input: nums = [2, 3, 1, 1, 4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Example 2:
 * Input: nums = [3, 2, 1, 0, 4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * 0 <= nums[i] <= 10 ** 5
 *
 * https://leetcode.cn/problems/jump-game/
*/

module.exports = canJump;
