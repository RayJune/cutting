/*
 * 88. Merge Sorted Array
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
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
 * https://leetcode.com/problems/merge-sorted-array/
*/

/**
 * 输入两个按非递减顺序排列的整数数组 nums1 和 nums2 以及他们的长度 m 和 n，合并 nums2 到 nums1 中并使合并后的数组同样按照非递减顺序排列
 *
 * splice + sort
 *
 * Time Complexity: O((m + n) * log(m + n)) = 快速排序时间复杂度
 * Space complexity: O(log(m + n)) = 快速排序空间复杂度 O(log(m + n)) + nums1 增加的数组长度 O(log(n))
 * Auxiliary complexity: O(log(m + n)) = 快速排序空间复杂度
 * 其中 m 和 n 分别是 num1 和 nums2 的长度
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
function merge(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => a - b);
}

export default merge;
