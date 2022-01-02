/*
 * 1099. Two Sum Less Than K
 *
 * Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.
 *
 * Example 1:
 * Input: nums = [34, 23, 1, 24, 75, 33, 54, 8], k = 60
 * Output: 58
 * Explanation: We can use 34 and 24 to sum 58 which is less than 60.
 *
 * Example 2:
 * Input: nums = [10, 20, 30], k = 15
 * Output: -1
 * Explanation: In this case it is not possible to get a pair sum less that 15.
 *
 * Constraints:
 * n == nums.length
 * 0 <= n <= 3500
 * -100 <= nums[i] <= 100
 * -100 <= target <= 100
 *
 * https://leetcode.com/problems/two-sum-less-than-k/
*/

/**
 * Two Pointers + Sort
 *
 * Time Complexity: O(n ** 2) = 遍历次数 O(n ** 2) + 排序 O(n * log(n))
 * Space complexity: O(log(n)) = 排序
 * Auxiliary complexity: O(log(n)) = 排序
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function twoSumLessThanK(nums, k) {
    if (nums.length < 2) {
        return -1;
    }

    let max = -1;
    let left = 0;
    let right = nums.length - 1;

    nums.sort((a, b) => a - b);
    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum < k) {
            max = Math.max(sum, max);
            left += 1;
        } else {
            right -= 1;
        }
    }

    return max;
}

module.exports = twoSumLessThanK;
