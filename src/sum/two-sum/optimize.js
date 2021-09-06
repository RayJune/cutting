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
 * 哈希表，用空间换时间
 *
 * Time Complexity: O(n) = for 循环 O(n)
 * Space complexity: O(n) = map 长度 O(n)
 * Auxiliary complexity: O(n) = map 长度 O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (map[target - num] !== undefined) {
            return [i, map[target - num]];
        }
        map[num] = i;
    }

    return [];
}

twoSum([3, 2, 4], 6);

module.exports = twoSum;
