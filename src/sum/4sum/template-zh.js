/*
 * 给你一个由 n 个整数组成的数组 nums，和一个目标值 target。请你找出并返回满足下述全部条件且不重复的四元组
 * [nums[a], nums[b], nums[c], nums[d]]:
 *
 * 0 <= a, b, c, d < n
 * a, b, c, 和 d 互不相同.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 * 你可以按任意顺序返回答案。
 *
 *
 * Example 1:
 * Input: nums = [1, 0, -1, 0, -2, 2], target = 0
 * Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
 *
 * Example 2:
 * Input: nums = [2,2,2,2,2], target = 8
 * Output: [[2,2,2,2]]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * [[2, 2, 2, 2]]
 *
 * https://leetcode-cn.com/problems/4sum/
 *
*/

module.exports = fourSum;
