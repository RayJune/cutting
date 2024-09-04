/*
 * 217. Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1, 2, 3, 1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1, 2, 3, 4]
 * Output: false
 *
 * Example 3:
 * Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
 * Output: true
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 5
 * -10 ** 9 <= nums[i] <= 10 ** 9
 *
 * https://leetcode.com/problems/contains-duplicate/
*/

/**
 * 输入一个整数数组，如果存在重复元素则返回 true，否则返回 false
 *
 * 思路：
 * Hash Set
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(n) = set 长度
 * Auxiliary complexity: O(n) = set 长度
 * 其中 n 是 nums 的长度
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate(nums) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }

    return false;
}

module.exports = containsDuplicate;

