/*
 * 525. Contiguous Array
 *
 * Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
 *
 * Example 1:
 * Input: nums = [0, 1]
 * Output: 2
 *
 * Example 2:
 * Input: nums = [0, 1, 0]
 * Output: 2
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 ** 5
 * nums[i] is either 0 or 1.
 *
 * https://leetcode.com/problems/contiguous-array/
 */

/**
 * Prefix Sum，把 0 视作 -1，把原问题转换为求最长的连续子数组，其元素和为 0
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(n) = prefixSum 长度
 * Auxiliary complexity: O(n) = prefixSum 长度
 * 其中 n 是数组的长度
 *
 * @param {number[]} nums
 * @returns {number}
 */
function findMaxLength(nums) {
    const prefixSum = new Map([[0, -1]]);
    const len = nums.length;
    let sum = 0;
    let maxLength = 0;

    for (let i = 0; i < len; i++) {
        sum += (nums[i] === 1 ? 1 : -1);
        if (prefixSum.has(sum)) {
            maxLength = Math.max(maxLength, i - prefixSum.get(sum));
        } else {
            prefixSum.set(sum, i);
        }
    }

    return maxLength;
}

module.exports = findMaxLength;
