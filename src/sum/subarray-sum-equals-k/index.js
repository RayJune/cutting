/*
 * Given an array of integers nums and an integer k, return the total number of
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
 *
*/

/**
 * Brute Force
 *
 * Time Complexity: O(n^2) = for 循环 O(n) * for 循环 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number} count
 */
function subarraySum(nums, k) {
    let count = 0;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        let sum = 0;

        for (let j = i; j < len; j++) {
            sum += nums[j];
            if (sum === k) {
                count += 1;
            }
        }
    }

    return count;
}

module.exports = subarraySum;
