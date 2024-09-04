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
 * 输入一个整数数组 nums 和两个整数 k 和 t，如果存在 abs(nums[i] - nums[j]) <= t 并且 abs(i - j) <= k 则返回 true，否则返回 false
 *
 * 思路：
 * Sliding Window 滑动窗口
 *
 * Time Complexity: O(n * k) = 遍历次数
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
