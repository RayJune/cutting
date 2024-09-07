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
 * 输入一个数组 nums，将所有 0 原地移动到数组的末尾，同时保持非 0 元素的相对顺序
 *
 * 思路：
 * Two Pointers 双指针
 * 从左向右遍历数组，left 表示下一个要赋值的非 0 元素的下标，right 表示当前遍历的元素下标
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number} nums
 */
function moveZeroes(nums) {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left += 1;
        }
        right += 1;
    }
}

module.exports = moveZeroes;
