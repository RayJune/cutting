/*
 * 215. Kth Largest Element in an Array
 *
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 *
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * Example 1:
 * Input: nums = [3, 2, 1, 5, 6, 4], k = 2
 * Output: 5
 *
 * Example 2:
 * Input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
 * Output: 4
 *
 * Constraints:
 * 1 <= k <= nums.length <= 10 ** 4
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
*/

/**
 * array.sort()
 *
 * Time Complexity: O(n * log(n)) = sort 方法时间复杂度
 * Space complexity: O(log(n)) = sort 方法空间复杂度
 * Auxiliary complexity: O(log(n)) = sort 方法空间复杂度
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    return nums.sort((a, b) => b - a)[k - 1];
}

module.exports = findKthLargest;
