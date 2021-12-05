/*
 * 628. Maximum Product of Three Numbers
 *
 * Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
 *
 * Example 1:
 * Input: nums = [1, 2, 3]
 * Output: 6
 *
 * Example 2:
 * Input: nums = [1, 2, 3, 4]
 * Output: 24
 *
 * Example 3:
 * Input: nums = [-1, -2, -3]
 * Output: -6
 *
 * Constraints:
 * 3 <= nums.length <= 10 ** 4
 * -1000 <= nums[i] <= 1000
 *
 * https://leetcode.com/problems/maximum-product-of-three-numbers/
*/

/**
 * sort
 *
 * Time Complexity: O(n * log(n)) = sort
 * Space complexity: O(log(n)) = sort
 * Auxiliary complexity: O(log(n)) = sort
 *
 * @param {number[]} nums
 * @returns {number}
 */
function maximumProduct(nums) {
    const len = nums.length;

    nums.sort((a, b) => a - b);

    return Math.max(nums[0] * nums[1] * nums[len - 1],
        nums[len - 1] * nums[len - 2] * nums[len - 3]);
}

module.exports = maximumProduct;
