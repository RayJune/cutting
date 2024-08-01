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
 * Sliding Window 滑动窗口
 * 1. 创建 set 储存窗口内的元素，从左到右遍历数组 nums：
 * 2. 如果 i > k，则将 i - k - 1 的元素移出滑动窗口；
 * 3. 如果 nums[i] 在 set 中，则返回 true，不然就把当前元素加入到 set 中
 *
 * Time Complexity: O(n) = 遍历次数
 * Space Complexity: O(k) = set 长度
 * Auxiliary Complexity: O(k) = set 长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
function containsNearbyDuplicate(nums, k) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }

    return false;
}


module.exports = containsNearbyDuplicate;
