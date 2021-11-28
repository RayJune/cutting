/*
 * 137. 只出现一次的数字 II
 *
 * 给你一个整数数组 nums ，除某个元素仅出现一次外，其余每个元素都恰出现三次。请你找出并返回那个只出现了一次的元素。
 *
 * Example 1:
 * Input: nums = [2, 2, 3, 2]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [0, 1, 0, 1, 0, 1, 99]
 * Output: 99
 *
 * Constraints:
 * 1 <= nums.length <= 3 * 10 ** 4
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 * Each element in nums appears exactly three times except for one element which appears once.
 *
 * https://leetcode-cn.com/problems/single-number-ii/
*/

module.exports = singleNumber;
