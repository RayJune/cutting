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
 * Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 * Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
 *
 * Constraints:
 * 0 <= nums.length <= 3 * 10 ** 4
 * -100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/

/**
 * 输入一个有序数组 nums，原地删除重复出现的元素并返回删除后数组的新长度
 *
 * 思路：
 * Two Pointers 双指针
 * 利用有序数组的特性，从左向右遍历数组，left 表示下一个要赋值的非重复元素下标，right 表示当前遍历的元素下标。遍历从 i = 1 开始
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @returns {number}
 */
function removeDuplicates(nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    let left = 1;
    let right = 1;

    while (right < nums.length) {
        if (nums[right] !== nums[left - 1]) {
            nums[left] = nums[right];
            left += 1;
        }
        right += 1;
    }

    return left;
}

export default removeDuplicates;
