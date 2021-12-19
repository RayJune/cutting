/*
 * 219. 存在重复元素 II
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums[i] = nums[j]，并且 i 和 j 的差的绝对值至多为 k。
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
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
*/

module.exports = containsNearbyDuplicate;
