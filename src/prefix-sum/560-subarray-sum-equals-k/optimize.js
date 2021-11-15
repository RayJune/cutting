/*
 * 560. Subarray Sum Equals k
 *
 * Given an array of integers nums and an num k, return the total number of
 * continuous subarray whose sum equals to k.
 *
 * Example 1:
 * Input: nums = [1, 1, 1], k = 2
 * Output: 2
 *
 * Example 2:
 * Input: nums = [1, 2, 3], k = 3
 * Output: 2
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2 * 10^4
 * -1000 <= nums[i] <= 1000
 * -10^7 <= target <= 10^7
 *
 * https://leetcode.com/problems/subarray-sum-equals-k/
*/

/**
 * Prefix Sum
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(n) = prefixSum 长度
 * Auxiliary complexity: O(n) = prefixSum 长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 * 其中 n 是数组的长度
 */
function subarraySum(nums, k) {
    const prefixSum = new Map([[0, 1]]);
    let count = 0;
    let sum = 0;

    for (const num of nums) {
        sum += num;
        if (prefixSum.has(sum - k)) {
            count += prefixSum.get(sum - k);
        }
        prefixSum.set(sum, prefixSum.has(sum) ? prefixSum.get(sum) + 1 : 1);
    }

    return count;
}

module.exports = subarraySum;
