/*
 * 220. Contains Duplicate III
 *
 * Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.
 *
 * Example 1:
 * Input: [1, 2, 3, 1], k = 3, t = 0
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
 * 1 <= nums.length <= 2 * 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 0 <= k <= 10^4
 * 0 <= t <= 2^31 - 1
 *
 * https://leetcode.com/problems/contains-duplicate-iii/
*/

/**
 * Buckets, [0, t], [t + 1, 2t + 1],...
 *
 * Time Complexity: O(n) = for 循环次数 O(n)
 * Space complexity: O(min(k, n)) = map 占用空间
 * Auxiliary complexity: O(min(k, n)) = map 占用空间
 * 其中 n 为 nums 的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @returns {boolean}
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
    const map = new Map();
    const getID = num => num >= 0 ?
        Math.floor(num / (t + 1)) : Math.floor((num + 1) / (t + 1)) - 1;

    for (let i = 0; i < nums.length; ++i) {
        const id = getID(nums[i]);

        if (map.has(id)) {
            return true;
        }
        if (map.has(id - 1) && Math.abs(nums[i] - map.get(id - 1)) <= t) {
            return true;
        }
        if (map.has(id + 1) && Math.abs(nums[i] - map.get(id + 1)) <= t) {
            return true;
        }
        map.set(id, nums[i]);
        if (map.size > k) {
            map.delete(getID(nums[i - k]));
        }
    }

    return false;
}

module.exports = containsNearbyAlmostDuplicate;
