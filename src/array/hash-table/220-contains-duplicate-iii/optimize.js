/*
 * 220. Contains Duplicate III
 *
 * Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such this abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.
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
 * 1 <= nums.length <= 2 * 10 ** 4
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 * 0 <= k <= 10 ** 4
 * 0 <= t <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/contains-duplicate-iii/
*/

const BinarySearchTree = require('./binary-search-tree');

/**
 * Binary Search Tree
 *
 * Time Complexity: O(n * log(min(k, n))) = 外层 for 循环次数 O(n) * bst 的 has/ceiling/floor/add/remove 操作 O(min(k, n))，平均时间复杂度为 O(log(min(k, n)))
 * Space complexity: O(log(min(k, n))) = bst 占用的空间
 * Auxiliary complexity: O(log(min(k, n))) = bst 占用的空间
 * 其中 n 为 nums 的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @returns {boolean}
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
    const bst = new BinarySearchTree();

    for (let i = 0; i < nums.length; i++) {
        if (bst.has(nums[i])) {
            return true;
        }

        const ceiling = bst.ceiling(nums[i]);
        const floor = bst.floor(nums[i]);

        if (ceiling !== Infinity && ceiling - nums[i] <= t) {
            return true;
        }
        if (floor !== -Infinity && nums[i] - floor <= t) {
            return true;
        }
        bst.add(nums[i]);
        if (bst.size > k) {
            bst.remove(nums[i - k]);
        }
    }

    return false;
}

module.exports = containsNearbyAlmostDuplicate;
