/*
 * 1. Two Sum
 *
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
 * 2 <= nums.length <= 10 ** 4
 * (-10) ** 9 <= nums[i] <= 10 ** 9
 * (-10) ** 9 <= target <= 10 ** 9
 * Only one valid answer exists.
 *
 * https://leetcode.com/problems/two-sum/
*/

/**
 * 输入一个整数数组 nums 和目标值 target，返回和为目标值 target 的两个整数的下标。数组中不包含重复元素
 *
 * 思路：
 * Hash Map
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(n) = map 长度
 * Auxiliary complexity: O(n) = map 长度
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }

    return [];
}

export default twoSum;
