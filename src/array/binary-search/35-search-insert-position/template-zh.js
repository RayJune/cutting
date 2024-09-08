/*
 * 35. 搜索插入位置
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 请必须使用时间复杂度为 O(log n) 的算法。
 *
 * Example 1:
 * Input: nums = [1, 3, 5, 6], target = 5
 * Output: 2
 *
 * Example 2:
 * Input: nums = [1, 3, 5, 6], target = 2
 * Output: 1
 *
 * Example 3:
 * Input: nums = [1, 3, 5, 6], target = 7
 * Output: 4
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * nums 为无重复元素的升序排列数组
 * (-10) ** 4 <= target <= 10 ** 4
 *
 * https://leetcode.cn/problems/search-insert-position/
*/

export default searchInsert;
