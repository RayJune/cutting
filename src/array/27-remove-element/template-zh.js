/*
 * 27. 移除元素
 *
 * 给你一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。
 *
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 *
 * Example 1:
 * Input: nums = [3, 2, 2, 3], val = 3
 * Output: 2, nums = [2, 2, _, _]
 *
 * Example 2:
 * Input: nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
 * Output: 5, nums = [0, 1, 4, 0, 3, _, _, _]
 *
 * Constraints:
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 50
 * 0 <= val <= 100
 *
 * https://leetcode-cn.com/problems/remove-element/
*/

module.exports = removeElement;
