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
 * 输入一个整数数组 nums 和整数 k，返回满足两个元素之和小于 k 的最大 sum 值，如果没有则返回 -1
 *
 * 思路：排序 + Two Pointers 双指针
 * 用排序来方便比较大小和跳过重复值，用双指针优化查找效率
 *
 * Time Complexity: O(n ** 2) = 遍历次数 O(n ** 2) + 排序 O(n * log(n))
 * Space complexity: O(log(n)) = 排序
 * Auxiliary complexity: O(log(n)) = 排序
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function twoSumLessThanK(nums, k) {
    if (nums.length < 2) {
        return -1;
    }

    let max = -Infinity;
    let left = 0;
    let right = nums.length - 1;

    nums.sort((a, b) => a - b);
    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum < k) {
            max = Math.max(max, sum);
            left += 1;
            while (nums[left] === nums[left - 1]) {
                left += 1;
            }
        } else {
            right -= 1;
            while (nums[right] === nums[right + 1]) {
                right -= 1;
            }
        }
    }

    return max === -Infinity ? -1 : max;
}

module.exports = twoSumLessThanK;
