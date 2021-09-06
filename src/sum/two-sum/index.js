/*
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: nums[0] + nums[1] = 9
 *
 * Example 2:
 * Input: nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 *
 * Example 3:
 * Input: nums = [3, 3], target = 6
 * Output: [0, 1]
 *
 * Constraints:
 *
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 *
 * https://leetcode.com/problems/two-sum/
 *
*/

/**
 * 暴力枚举
 *
 * Time Complexity: O(n^2) = for 循环 O(n) * for 循环 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [i, j];
            }
        }
    }

    return [];
}

module.exports = twoSum;
