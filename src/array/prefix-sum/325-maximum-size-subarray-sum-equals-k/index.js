/*
 * 325. Maximum Size Subarray Sum Equals k
 *
 * Given an integer array nums and an integer k, return the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.
 *
 * Example 1:
 * Input: nums = [1, -1, 5, -2, 3], k = 3
 * Output: 4
 *
 * Example 2:
 * Input: nums = [-2, -1, 2, 1], k = 1
 * Output: 2
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2 * 10 ** 5
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * (-10) ** 9 <= k <= 10 ** 9
 *
 * https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/
 */

/**
 * Prefix Sum
 *
 * Time Complexity: O(n) = for 循环次数 O(n)
 * Space complexity: O(n) = prefixSum 的长度 O(n)
 * Auxiliary complexity: O(n) = prefixSum 的长度 O(n)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function maxSubArrayLen(nums, k) {
    const prefixSum = new Map([[0, -1]]);
    const len = nums.length;
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < len; i++) {
        sum += nums[i];
        if (!prefixSum.has(sum)) {
            prefixSum.set(sum, i);
        }
        if (prefixSum.has(sum - k)) {
            maxLen = Math.max(maxLen, i - prefixSum.get(sum - k));
        }
    }

    return maxLen;
}

module.exports = maxSubArrayLen;
