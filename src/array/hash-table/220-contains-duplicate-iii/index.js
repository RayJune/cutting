/*
 * 220. Contains Duplicate III
 *
 * Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.
 *
 * Example 1:
 * Input: nums = [1, 2, 3, 1], k = 3, t = 0
 * Output: true
 *
 * Example 2:
 * Input: nums = [1, 0, 1, 1], k = 1, t = 2
 * Output: true
 *
 * Example 3:
 * Input: nums = [1, 5, 9, 1, 5, 9], k = 2, t = 3
 * Output: false
 *
 * Constraints:
 * 1 <= nums.length <= 2 * 10 ** 4
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 * 0 <= k <= 10 ** 4
 * 0 <= t <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/contains-duplicate-iii/
*/

/**
 * Sliding Window
 *
 * Time Complexity: O(n * min(k, n)) = 外层 for 循环次数 O(n) * 内层 for 循环次数 O(min(k, n))
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 为 nums 的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @returns {boolean}
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
    for (let i = 1; i < nums.length; i++) {
        for (let j = Math.max(0, i - k); j < i; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }

    return false;
}

module.exports = containsNearbyAlmostDuplicate;
