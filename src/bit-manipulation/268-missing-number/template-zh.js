/*
 * 136. 只出现一次的数字
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *
 * 说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * Example 1:
 * Input: nums = [2, 2, 1]
 * Output: 1
 *
 * Example 2:
 * Input: nums = [4, 1, 2, 1, 2]
 * Output: 4
 *
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 10 ** 4
 * 0 <= nums[i] <= n
 * All the numbers of nums are unique.
 *
 * https://leetcode.cn/problems/missing-number/
*/

module.exports = missingNumber;
