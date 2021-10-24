/*
 * 523. Continuous Subarray Sum
 *
 * Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise.
 *
 * An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 *
 * Example 1:
 * Input: nums = [23, 2, 4, 6, 7], k = 6
 * Output: true
 *
 * Example 2:
 * Input: nums = [23, 2, 6, 4, 7], k = 6
 * Output: true
 *
 * Example 3:
 * Input: nums = [23, 2, 6, 4, 7], k = 13
 * Output: false
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10^5
 * 0 <= nums[i] <= 10^9
 * 0 <= sum(nums[i]) <= 2^31 - 1
 * 1 <= k <= 2^31 - 1
 *
 * https://leetcode.com/problems/continuous-subarray-sum/
 */

/**
 * Prefix Sum，余数前缀和
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(min(m, k)) = 哈希表长度
 * Auxiliary complexity: O(min(m, k)) = 哈希表长度
 * 其中 n 是数组 nums 的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
function checkSubarraySum(nums, k) {
    if (nums.length < 2) {
        return false;
    }

    const prefixMap = new Map([[0, -1]]);
    const length = nums.length;

    for (let i = 0, remainder = 0; i < length; i++) {
        remainder = (remainder + nums[i]) % k;
        if (prefixMap.has(remainder)) {
            if (i - prefixMap.get(remainder) >= 2) {
                return true;
            }
        } else {
            prefixMap.set(remainder, i);
        }
    }

    return false;
}

module.exports = checkSubarraySum;
