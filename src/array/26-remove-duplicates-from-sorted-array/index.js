/*
 * 26. Remove Duplicates from Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Example 1:
 * Input: nums = [1, 1, 2]
 * Output: 2, nums = [1, 2, _]
 *
 * Example 2:
 * Input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 * Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
 *
 * Constraints:
 * 0 <= nums.length <= 3 * 10^4
 * -100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/

/**
 * Two Pointers
 *
 * Time Complexity: O(n) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @returns {number}
 */
function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const len = nums.length;
    let fast = 1;
    let slow = 1;

    while (fast < len) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow += 1;
        }
        fast += 1;
    }

    return slow;
}

module.exports = removeDuplicates;
