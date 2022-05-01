/*
 * 81. Search in Rotated Sorted Array II
 *
 * There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
 *
 * Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]] (0-indexed). For example, [0, 1, 2, 4, 4, 4, 5, 6, 6, 7] might be rotated at pivot index 5 and become [4, 5, 6, 6, 7, 0, 1, 2, 4, 4].
 *
 * Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
 *
 * You must decrease the overall operation steps as much as possible.
 *
 * Example 1:
 * Input: nums = [2, 5, 6, 0, 0, 1, 2], target = 0
 * Output: true
 *
 * Example 2:
 * Input: nums = [2, 5, 6, 0, 0, 1, 2], target = 3
 * Output: false
 *
 * Constraints:
 * 1 <= nums.length <= 5000
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * nums is guaranteed to be rotated at some pivot.
 * (-10) ** 4 <= target <= 10 ** 4
 *
 * Follow up: This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
*/

/**
 * Binary Search, 当 nums[left] === nums[mid] === nums[right] 时无法区分有序数组，这时需要缩小边界
 *
 * Time Complexity: O(n) = 最差情况为所有元素都是重复的；最好情况为没有元素重复，此时为 O(log(n))
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return true;
        }
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left += 1;
            right -= 1;
        } else if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
}

module.exports = search;
