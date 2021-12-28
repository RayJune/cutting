/*
 * 153. 寻找旋转排序数组中的最小值
 *
 * 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次旋转后，得到输入数组。例如，原数组 nums = [0, 1, 2, 4, 5, 6, 7] 在变化后可能得到：
 * 若旋转 4 次，则可以得到 [4, 5, 6, 7, 0, 1, 2]
 * 若旋转 7 次，则可以得到 [0, 1, 2, 4, 5, 6, 7]
 * 注意，数组 [a[0], a[1], a[2], ..., a[n - 1]] 旋转一次 的结果为数组 [a[n - 1], a[0], a[1], a[2], ..., a[n - 2]] 。
 *
 * 给你一个元素值互不相同的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的最小元素。
 *
 * Example 1:
 * Input: nums = [3, 4, 5, 1, 2]
 * Output: 1
 * Explanation: The original array was [1, 2, 3, 4, 5] rotated 3 times.
 *
 * Example 2:
 * Input: nums = [4, 5, 6, 7, 0, 1, 2]
 * Output: 0
 * Explanation: The original array was [0, 1, 2, 4, 5, 6, 7] and it was rotated 4 times.
 *
 * Example 3:
 * Input: nums = [11, 13, 15, 17]
 * Output: 11
 * Explanation: The original array was [11, 13, 15, 17] and it was rotated 4 times.
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5000
 * -5000 <= nums[i] <= 5000
 * All the integers of nums are unique.
 * nums is sorted and rotated between 1 and n times.
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
*/

module.exports = findMin;
