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
 * Using Extra Array
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(n) = temp 数组长度
 * Auxiliary complexity: O(n) = temp 数组长度
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} k
 */
function rotate(nums, k) {
    const len = nums.length;

    if (k % len) {
        const temp = new Array(len);

        for (let i = 0; i < len; i++) {
            temp[(i + k) % len] = nums[i];
        }
        for (let i = 0; i < len; i++) {
            nums[i] = temp[i];
        }
    }
}

module.exports = rotate;
