/*
 * 137. Single Number II
 *
 * Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * Example 1:
 * Input: nums = [2, 2, 3, 2]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [0, 1, 0, 1, 0, 1, 99]
 * Output: 99
 *
 * Constraints:
 * 1 <= nums.length <= 3 * 10 ** 4
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 * Each element in nums appears exactly three times except for one element which appears once.
 *
 * https://leetcode.com/problems/single-number-ii/
*/

/**
 * HashMap
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(n) = map 的长度
 * Auxiliary complexity: O(n) = map 的长度
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (const [num, count] of map.entries()) {
        if (count === 1) {
            return num;
        }
    }
}

module.exports = singleNumber;
