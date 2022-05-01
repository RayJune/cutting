/*
 * 209. Minimum Size Subarray Sum
 *
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 *
 * Example 1:
 * target = 7, nums = [2, 3, 1, 2, 4, 3]
 * Output: 2
 * Explanation: The subarray [4, 3] has the minimal length under the problem constraint.
 *
 * Example 2:
 * Input: target = 4, nums = [1, 4, 4]
 * Output: 1
 *
 * Example 3:
 * Input: target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1]
 * Output: 0
 *
 * Constraints:
 * 1 <= target <= 10 ** 9
 * 1 <= nums.length <= 10 ** 5
 * 1 <= nums[i] <= 10 ** 5
 *
 * https://leetcode.com/problems/minimum-size-subarray-sum/
*/

/**
 * Sliding Window
 *
 * Time Complexity: O(n) = left, right 各最多移动 n 次
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 nums 数组的长度
 *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLen = Infinity;

    while (right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left += 1;
        }
        right += 1;
    }

    return minLen === Infinity ? 0 : minLen;
}

module.exports = minSubArrayLen;
