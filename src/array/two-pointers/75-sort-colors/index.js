/*
 * 75. Sort Colors
 *
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 * Example 1:
 * Input: nums = [2, 0, 2, 1, 1, 0]
 * Output: [0, 0, 1, 1, 2, 2]
 *
 * Example 2:
 * Input: nums = [2, 0, 1]
 * Output: [0, 1, 2]
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is either 0, 1, or 2.
 *
 * Follow up: Could you come up with a one-pass algorithm using only constant extra space?
 *
 * https://leetcode.com/problems/sort-colors/
*/

/**
 * Two Pointers
 *
 * Time Complexity: O(n) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 */
function sortColors(nums) {
    let left = 0;
    let right = nums.length - 1;
    let i = 0;

    while (i <= right) {
        if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right -= 1;
        } else if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left += 1;
            i += 1;
        } else {
            i += 1;
        }
    }
}

module.exports = sortColors;
