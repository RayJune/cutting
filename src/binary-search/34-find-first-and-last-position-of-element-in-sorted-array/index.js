/*
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [5, 7, 7, 8, 8, 10], target = 8
 * Output: [3, 4]
 *
 * Example 2:
 * Input: nums = [5, 7, 7, 8, 8, 10], target = 6
 * Output: [-1, -1]
 *
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1, -1]
 *
 * Constraints:
 * 0 <= nums.length <= 10 ** 5
 * -10 ** 9 <= nums[i] <= 10 ** 9
 * nums is a non-decreasing array.
 * -10 ** 9 <= target <= 10 ** 9
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
*/

/**
 * Binary Search, 第一个大于等于 target 的下标记为 start，第一个大于 target 的下标记为 end
 *
 * Time Complexity: O(log(n)) = 两次 binarySearch 时间复杂度
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function searchRange(nums, target) {
    const start = binarySearch(nums, target, true);
    const end = binarySearch(nums, target, false) - 1;

    if (nums[start] === target && nums[end] === target) {
        return [start, end];
    }

    return [-1, -1];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {boolean} lower
 * @returns {number}
 */
function binarySearch(nums, target, lower) {
    let left = 0;
    let right = nums.length - 1;
    let i = nums.length;

    while (left <= right) {
        const mid = Math.floor((right + left) / 2);

        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            i = mid;
        } else {
            left = mid + 1;
        }
    }

    return i;
}

module.exports = searchRange;
