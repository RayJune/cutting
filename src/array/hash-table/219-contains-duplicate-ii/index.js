/*
 * 219. Contains Duplicate II
 *
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 *
 * Example 1:
 * Input: nums = [1, 2, 3, 1], k = 3
 * Output: true
 *
 * Example 2:
 * Input: nums = [1, 0, 1, 1], k = 1
 * Output: true
 *
 * Example 3:
 * Input: nums = [1, 2, 3, 1, 2, 3], k = 2
 * Output: false
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 5
 * (-10) ** 9 <= nums[i] <= 10 ** 9
 * 0 <= k <= 10 ** 5
 *
 * https://leetcode.com/problems/contains-duplicate-ii/
*/

/**
 * 输入一个整数数组和一个整数 k，判断是否存在 nums[i] === nums[j] && Math.abs(i - j) <= k
 *
 * 思路：
 * Hash Map
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(n) = map 长度
 * Auxiliary complexity: O(n) = map 长度
 * 其中 n 为 nums 的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
function containsNearbyDuplicate(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }

    return false;
}

module.exports = containsNearbyDuplicate;
