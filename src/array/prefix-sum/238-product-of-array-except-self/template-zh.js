/*
 * 238. 除自身以外数组的乘积
 *
 * 给你一个整数数组 nums，返回数组 answer，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 *
 * 题目数据保证数组除 nums 之中任意元素的全部前缀元素和后缀的乘积都在 32 位整数范围内。
 *
 * 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 *
 * Example 1:
 * Input: [1, 2, 3, 4]
 * Output: [24, 12, 8, 6]
 *
 * Example 2:
 * Input: nums = [-1, 1, 0, -3, 3]
 * Output: [0, 0, 9, 0, 0]
 *
 * Constraints:
 * 2 <= nums.length <= 10 ** 5
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * https://leetcode-cn.com/problems/product-of-array-except-self/
*/

module.exports = productExceptSelf;
