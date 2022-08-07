/*
 * 75. 颜色分类
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 *
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 * Example 1:
 * Input: nums = [2, 0, 2, 1, 1, 0]
 * Output: [0, 0, 1, 1, 2, 2]
 *
 * Example 2:
 * Input: nums = [2, 0, 1]
 * Output: [0, 1, 2]
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is either 0, 1, or 2.
 *
 * Follow up: Could you come up with a one-pass algorithm using only constant extra space?
 *
 * https://leetcode.cn/problems/sort-colors/
*/

module.exports = sortColors;
