/*
 * 283. 移动零
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * Example 1:
 * Input: nums = [0, 1, 0, 3 ,12]
 * Output: [1, 3, 12, 0, 0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 *
 * https://leetcode.cn/problems/move-zeroes/
*/

module.exports = moveZeroes;
