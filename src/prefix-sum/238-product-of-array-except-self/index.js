/*
 * 238. Product of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
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
 *
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * https://leetcode.com/problems/product-of-array-except-self/
 */

/**
 * Prefix Sum，前缀乘积和后缀乘积相乘
 *
 * Time Complexity: O(n) = 两次 for 循环次数之和 O(2n)
 * Space complexity: O(n) = result 数组长度 O(n)
 * Auxiliary complexity: O(1)
 * 其中 n 为 nums 的数组长度
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function productExceptSelf(nums) {
    const len = nums.length;
    const result = [1];

    for (let i = 1; i < len; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    for (let i = len - 1, right = 1; i >= 0; i--) {
        result[i] = result[i] * right;
        right *= nums[i];
    }

    return result;
}

module.exports = productExceptSelf;
