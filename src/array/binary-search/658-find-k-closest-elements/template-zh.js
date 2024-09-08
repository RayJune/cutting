/*
 * 658. 找到 K 个最接近的元素
 *
 * 给定一个排序好的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。
 *
 * 整数 a 比整数 b 更接近 x 需要满足：
 *
 * |a - x| < |b - x| 或者
 * |a - x| == |b - x| 且 a < b
 *
 * Example 1:
 * Input: arr = [1, 2, 3, 4, 5], k = 4, x = 3
 * Output: [1, 2, 3, 4]
 *
 * Example 2:
 * Input: arr = [1, 2, 3, 4, 5], k = 4, x = -1
 * Output: [1, 2, 3, 4]
 *
 * Constraints:
 * 1 <= k <= arr.length
 * 1 <= arr.length <= 10 ** 4
 * arr is sorted in ascending order.
 * (-10 ** 4) <= arr[i], x <= 10 ** 4
 *
 * https://leetcode.cn/problems/find-k-closest-elements/
*/

export default findClosestElements;
