/*
 * 31. 下一个排列
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序列中下一个更大的排列（即，组合出下一个更大的整数）。
 *
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 *
 * 必须原地修改，只允许使用额外常数空间。
 *
 * Example 1:
 * Input: nums = [1, 2, 3]
 * Output: [1, 3, 2]
 *
 * Example 2:
 * Input: nums = [3, 2, 1]
 * Output: [1, 2, 3]
 *
 * Example 3:
 * Input: nums = [1, 1, 5]
 * Output: [1, 5, 1]
 *
 * Example 4:
 * Input: nums = [1]
 * Output: [1]
 *
 * Example 5:
 * Input: nums = [1, 3, 4, 2]
 * Output: [1, 4, 2, 3]
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 *
 * https://leetcode.cn/problems/next-permutation/
*/

export default nextPermutation;
