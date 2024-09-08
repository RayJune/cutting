/*
 * 162. 寻找峰值
 *
 * 峰值元素是指其值严格大于左右相邻值的元素。
 *
 * 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。
 *
 * 你可以假设 nums[-1] = nums[n] = -∞ 。
 *
 * 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
 *
 * Example 1:
 * Input: nums = [1, 2, 3, 1]
 * Output: 2
 * Explanation: 3 is a peak element and your function should return the index number 2.
 *
 * Example 2:
 * Input: nums = [1, 2, 1, 3, 5, 6, 4]
 * Output: 5
 * Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 *
 * Constraints:
 * 1 <= nums.length <= 1000
 * (-2) ** 31 <= nums[i] <= 2 ** 31 - 1
 * nums[i] != nums[i + 1] for all valid i.
 *
 * https://leetcode.cn/problems/find-peak-element/
*/

export default findPeakElement;
