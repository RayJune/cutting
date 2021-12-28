/*
 * 974. Subarray Sums Divisible by K
 *
 * Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
 *
 * A subarray is a contiguous part of an array.
 *
 * Example 1:
 * Input: nums = [4, 5, 0, -2, -3, 1], k = 5
 * Output: 7
 *
 * Constraints:
 *
 * 1 <= nums.length <= 3 * 10 ** 4
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * 2 <= k <= 10 ** 4
 *
 * https://leetcode.com/problems/subarray-sums-divisible-by-k/
 */

/**
 * Prefix Sum, 需要注意的是这里余数前缀和可能为负数
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(min(n, k)) = prefixSum 长度
 * Auxiliary complexity: O(min(n, k)) = prefixSum 长度
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} k
 */
function subarraysDivByK(nums, k) {
    const prefixSum = new Map([[0, 1]]);
    const len = nums.length;
    let remainder = 0;
    let count = 0;

    for (let i = 0; i < len; i++) {
        remainder = (remainder + nums[i]) % k;
        if (remainder < 0) {
            remainder += k;
        }
        if (prefixSum.has(remainder)) {
            count += prefixSum.get(remainder);
            prefixSum.set(remainder, prefixSum.get(remainder) + 1);
        } else {
            prefixSum.set(remainder, 1);
        }
    }

    return count;
}

module.exports = subarraysDivByK;
