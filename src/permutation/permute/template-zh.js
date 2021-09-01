/*
 * 给定一个不含重复数字的数组 `nums`，返回其所有可能的全排列。你可以按任意顺序返回答案。
 *
 * Example 1:
 * Input: nums = [1, 2, 3]
 * Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 *
 * Example 2:
 * Input: nums = [0, 1]
 * Output: [[0, 1]]
 *
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 * 提示:
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数互不相同
 *
 * https://leetcode-cn.com/problems/permutations/
 *
*/

module.exports = permute;
