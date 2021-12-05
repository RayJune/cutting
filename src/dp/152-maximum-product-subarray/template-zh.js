/*
 * 152. 乘积最大子数组
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 *
 * Example 1:
 * Input: nums = [2, 3, -2, 4]
 * Output: 6
 * Explanation: [2, 3] has the largest product 6.
 *
 * Example 2:
 * Input: nums = [-2, 0, -1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2, -1] is not a subarray.
 *
 * Constraints:
 * 1 <= nums.length <= 2 * 10 ** 4
 * -10 <= nums[i] <= 10
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/
*/

module.exports = maxProduct;
