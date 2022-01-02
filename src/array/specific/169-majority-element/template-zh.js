/*
 * 169. 多数元素
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 * Example 1:
 * Input: nums = [3, 2, 3]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [2, 2, 1, 1, 1, 2, 2]
 * Output: 2
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5 * 10 ** 4
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 *
 * https://leetcode-cn.com/problems/majority-element/
*/

module.exports = majorityElement;
