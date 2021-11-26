/*
 * 217. Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 * Input: [1, 2, 3, 1]
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
 * Hash Table
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(n) = set 占用空间
 * Auxiliary complexity: O(n) = set 占用空间
 * 其中 n 为 nums 的长度
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate(nums) {
    const set = new Set();

    for (const num of nums) {
        if (set.has(num)) {
            return true
        } else {
            set.add(num);
        }
    }

    return false;
}

module.exports = containsDuplicate;

