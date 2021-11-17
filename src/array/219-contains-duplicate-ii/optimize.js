/*
 * 219. Contains Duplicate II
 *
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 *
 * Example 1:
 * Input: [1, 2, 3, 1], k = 3
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
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 0 <= k <= 10^5
 *
 * https://leetcode.com/problems/contains-duplicate-ii/
*/

/**
 * Hash Table
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(min(n, k)) = set 长度
 * Auxiliary complexity: O(min(n, k)) = set 长度
 * 其中 n 为 nums 的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
    const set = new Set();
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }

    return false;
}

module.exports = containsNearbyDuplicate;
