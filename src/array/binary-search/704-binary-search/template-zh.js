/*
 * 704. 二分查找
 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 *
 * Example 1:
 * Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * Example 2:
 * Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-10) ** 4 < nums[i], target < 10 ** 4
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 *
 * https://leetcode.cn/problems/binary-search/
*/

module.exports = search;
