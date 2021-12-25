/*
 * 283. Move Zeroes
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0, 1, 0, 3 ,12]
 * Output: [1, 3, 12, 0, 0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/move-zeroes/
*/

/**
 * Two Pointers
 *
 * Time Complexity: O(n) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} nums
 */
function moveZeroes(nums) {
    let slow = 0;
    let fast = 0;
    const len = nums.length;

    while (fast < len) {
        if (nums[fast]) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow += 1;
        }
        fast += 1;
    }
}

module.exports = moveZeroes;
