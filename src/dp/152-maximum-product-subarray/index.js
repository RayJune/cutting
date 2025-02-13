/*
 * 152. Maximum Product Subarray
 *
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 *
 * It is guaranteed that the answer will fit in a 32-bit integer.
 *
 * A subarray is a contiguous subsequence of the array.
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
 * https://leetcode.com/problems/maximum-product-subarray/
*/

/**
 * Dynamic Programming, 注意考虑负数 * 负数的情况
 *
 * Time Complexity: O(n) = for...of 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @returns {number}
 */
function maxProduct(nums) {
    let currMax = 1;
    let currMin = 1;
    let max = nums[0];

    for (const num of nums) {
        let temp = currMax;

        currMax = Math.max(num, currMax * num, currMin * num);
        currMin = Math.min(num, temp * num, currMin * num);
        max = Math.max(max, currMax);
    }

    return max;
}

export default maxProduct;
