/*
 * 189. Rotate Array
 *
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 * Example 1:
 * Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
 * Output: [5, 6, 7, 1, 2, 3, 4]
 * Explanation:
 * rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
 * rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
 * rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
 *
 * Example 2:
 * Input: nums = [-1, -100, 3, 99], k = 2
 * Output: [3, 99, -1, -100]
 * Explanation:
 * rotate 1 steps to the right: [99, -1, -100, 3]
 * rotate 2 steps to the right: [3, 99, -1, -100]
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 5
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 * 0 <= k <= 10 ** 5
 *
 * https://leetcode.com/problems/rotate-array/
*/

/**
 * Using Reverse
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} k
 */
function rotate(nums, k) {
    const len = nums.length;

    k %= len;
    if (k) {
        reverse(nums, 0, len - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, len - 1);
    }
}

/**
 *
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start += 1;
        end -= 1;
    }
}

module.exports = rotate;
