/*
 * 852. 山脉数组的峰顶索引
 *
 * 符合下列属性的数组 arr 称为山脉数组 ：
 * arr.length >= 3
 * 存在 i（0 < i < arr.length - 1）使得：
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 * 给你由整数组成的山脉数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。
 *
 * Example 1:
 * Input: arr = [0, 1, 0]
 * Output: 1
 *
 * Example 2:
 * Input: arr = [0, 2, 1, 0]
 * Output: 1
 *
 * Example 3:
 * Input: arr = [0, 10, 5, 2]
 * Output: 1
 *
 * Constraints:
 * 3 <= arr.length <= 10 ** 4
 * 0 <= arr[i] <= 10 ** 6
 * arr is guaranteed to be a mountain array.
 *
 * 进阶：很容易想到时间复杂度 O(n) 的解决方案，你可以设计一个 O(log(n)) 的解决方案吗？
 *
 * https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/
*/

module.exports = peakIndexInMountainArray;
