/*
 * 26. 删除有序数组中的重复项
 *
 * 给你一个有序数组 nums ，请你原地删除重复出现的元素，使每个元素只出现一次，返回删除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 *
 * Example 1:
 * Input: nums = [1, 1, 2]
 * Output: 2, nums = [1, 2, _]
 *
 * Example 2:
 * Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 * Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
 *
 * Constraints:
 * 0 <= nums.length <= 3 * 10 ** 4
 * -100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
*/

module.exports = removeDuplicates;
