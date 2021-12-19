/*
 * 220. 存在重复元素 III
 *
 * 给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。
 *
 * 如果存在则返回 true，不存在返回 false。
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
 * https://leetcode-cn.com/problems/contains-duplicate-iii/
*/

module.exports = containsNearbyAlmostDuplicate;
