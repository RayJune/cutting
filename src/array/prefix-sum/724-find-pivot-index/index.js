/*
 * 724. Find Pivot Index
 *
 * Given an array of integers nums, calculate the pivot index of this array.
 *
 * The pivot index is the index where the prefixSum of all the numbers strictly to the left of the index is equal to the prefixSum of all the numbers strictly to the index's right.
 *
 * If the index is on the left edge of the array, then the left prefixSum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 *
 * Return the leftmost pivot index. If no such index exists, return -1.
 *
 * Example 1:
 * Input: nums = [1, 7, 3, 6, 5, 6]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [1, 2, 3]
 * Output: -1
 *
 * Example 3:
 * Input: nums = [2, 1, -1]
 * Output: 0
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 ** 4
 * -1000 <= nums[i] <= 1000
 *
 * https://leetcode.com/problems/find-pivot-index/
 */

/**
 * Prefix Sum
 *
 * Time Complexity: O(n) = reduce 方法 O(n) + for 循环次数 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    const len = nums.length;
    let prefixSum = 0;

    for (let i = 0; i < len; i++) {
        if (prefixSum * 2 + nums[i] === sum) {
            return i;
        }
        prefixSum += nums[i];
    }

    return -1;
}

module.exports = pivotIndex;
