/*
 * 167. Two Sum II - Input array is sorted
 *
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 *
 * Example 1:
 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [1, 2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 *
 * Example 2:
 * Input: numbers = [2, 3, 4], target = 6
 * Output: [1, 3]
 *
 * Example 3:
 * Input: numbers = [-1, 0], target = -1
 * Output: [1, 2]
 *
 * Constraints:
 * 2 <= numbers.length <= 3 * 104
 * -1000 <= numbers[i] <= 1000
 * numbers is sorted in non-decreasing order.
 * -1000 <= target <= 1000
 * The tests are generated such that there is exactly one solution.
 *
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
*/

/**
 * 输入一个按非递减顺序排列的整数数组 numbers，找出数组中两个数相加之和等于目标数 target，并以长度为 2 的整数数组的形式返回这两个数的下标值
 *
 * 思路：
 * Two Pointers 双指针
 * 利用有序数组的性质，从左向右遍历数组，left right 表示指向头尾的下标。将 nums[left] 和 nums[right] 之和与 target 比大小来移动左右指针，直到得到目标值
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 numbers 数组的长度
 *
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum > target) {
            right -= 1;
        } else if (sum < target) {
            left += 1;
        } else {
            return [left + 1, right + 1];
        }
    }

    return [];
}

module.exports = twoSum;
