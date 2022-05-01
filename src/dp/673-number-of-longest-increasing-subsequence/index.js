/*
 * 673. Number of Longest Increasing Subsequence
 *
 * Given an integer array nums, return the number of longest increasing subsequences.
 *
 * Notice that the sequence has to be strictly increasing.
 *
 * Example 1:
 * Input: nums = [1, 3, 5, 4, 7]
 * Output: 2
 * Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
 *
 * Example 2:
 * Input: nums = [2, 2, 2, 2, 2]
 * Output: 5
 *
 * Constraints:
 * 1 <= nums.length <= 2000
 * -10 ** 6 <= nums[i] <= 10 ** 6
 *
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence/
*/

/**
 * Dynamic Programming
 *
 * Time Complexity: O(n ** 2) = 两层 for 循环次数之和
 * Space complexity: O(n) = dp 长度 O(n) + arr 长度 O(n)
 * Auxiliary complexity: O(n) = dp 长度 O(n) + arr 长度 O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function findNumberOfLIS(nums) {
    const len = nums.length;
    const dp = new Array(len).fill(1);
    const arr = new Array(len).fill(1);
    let maxLen = 1;
    let count = 1;

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    arr[i] = arr[j];
                } else if (dp[j] + 1 === dp[i]) {
                    arr[i] += arr[j];
                }
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            count = arr[i];
        } else if (dp[i] === maxLen) {
            count += arr[i];
        }
    }

    return count;
}

module.exports = findNumberOfLIS;
