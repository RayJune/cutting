/*
 * 88. 合并两个有序数组
 *
 * 给你两个按非递减顺序排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 *
 * 请你合并 nums2 到 nums1 中，使合并后的数组同样按非递减顺序排列。
 *
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 *
 * Example 1:
 * Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
 * Output: [1, 2, 2, 3, 5, 6]
 *
 * Example 2:
 * nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 *
 * Example 3:
 * nums1 = nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 *
 * Constraints:
 *
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * (-10) ** 9 <= nums1[i], nums2[j] <= 10 ** 9
 *
 * https://leetcode.cn/problems/merge-sorted-array/
*/

export default merge;
