/*
 * 27. Remove Element
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Example 1:
 * Input: nums = [3, 2, 2, 3], val = 3
 * Output: 2, nums = [2, 2, _, _]
 *
 * Example 2:
 * Input: nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
 * Output: 5, nums = [0, 1, 4, 0, 3, _, _, _]
 *
 * Constraints:
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 50
 * 0 <= val <= 100
 *
 * https://leetcode.com/problems/remove-element/
*/

/**
 * 输入一个数组 nums 和一个值 val，原地移除所有数值等于 val 的元素，并返回移除后数组的新长度
 *
 * 思路：
 * Two Pointers 双指针
 * 从左向右遍历数组，left 表示下一个要赋值的非 val 元素下标，right 表示当前遍历的元素下标
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */
function removeElement(nums, val) {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left += 1;
        }
        right += 1;
    }

    return left;
}

module.exports = removeElement;
