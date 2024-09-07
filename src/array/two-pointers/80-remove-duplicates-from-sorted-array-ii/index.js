/*
 * 80. Remove Duplicates from Sorted Array II
 *
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Example 1:
 * Input: nums = [1, 1, 1, 2, 2, 3]
 * Output: 5, nums = [1, 1, 2, 2, 3, _]
 *
 * Example 2:
 * Input: nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
 * Output: 7, nums = [0, 0, 1, 1, 2, 3, 3, _, _]
 *
 * Constraints:
 * 1 <= nums.length <= 3 * 10 ** 4
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * nums is sorted in non-decreasing order.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
*/

/**
 * 输入一个有序数组 nums，原地删除重复出现的元素使每个元素最多出现两次，返回删除后数组的新长度
 *
 * 思路：
 * Two Pointers 双指针
 * 从左向右遍历数组，left 表示待赋值的符合每个元素最多出现两次的下标，right 表示当前遍历的元素下标
 * 利用有序数组的特点，满足 nums[left - 2] !== nums[right] 则表示 nums[right] 符合最多出现两次的条件
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
    if (nums.length < 3) {
        return nums.length;
    }

    let left = 2;
    let right = 2;

    while (right < nums.length) {
        if (nums[right] !== nums[left - 2]) {
            nums[left] = nums[right];
            left += 1;
        }
        right += 1;
    }

    return left;
}

module.exports = removeDuplicates;
