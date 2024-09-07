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
 * 思路：
 * Two Pointers 双指针
 * 利用两个数组是非递减顺序的特性，p1 和 p2 分别表示当前遍历的 nums1 和 nums2 的下标值，在 nums1 数组中从后往前添加 nums1[i] 和 nums2[i] 的较大值
 *
 * Time Complexity: O(m + n) = 遍历次数
 * Space complexity: O(n) = nums1 增加的长度
 * Auxiliary complexity: O(1)
 * 其中 m 和 n 分别是 num1 和 nums2 的长度
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) {
            break;
        }
        if (p1 < 0 || nums1[p1] < nums2[p2]) {
            nums1[i] = nums2[p2];
            p2 -= 1;
        } else {
            nums1[i] = nums1[p1];
            p1 -= 1;
        }
    }
}

module.exports = merge;
