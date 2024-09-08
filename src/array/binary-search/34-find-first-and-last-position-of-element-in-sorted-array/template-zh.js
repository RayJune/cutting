/*
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 *
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 * 进阶：你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 *
 * Example 1:
 * Input: nums = [5, 7, 7, 8, 8, 10], target = 8
 * Output: [3, 4]
 *
 * Example 2:
 * Input: nums = [5, 7, 7, 8, 8, 10], target = 6
 * Output: [-1, -1]
 *
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1, -1]
 *
 * Constraints:
 * 0 <= nums.length <= 10 ** 5
 * -10 ** 9 <= nums[i] <= 10 ** 9
 * nums is a non-decreasing array.
 * -10 ** 9 <= target <= 10 ** 9
 *
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
*/

export default searchRange;
