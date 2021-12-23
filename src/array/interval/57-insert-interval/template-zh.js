/*
 * 57. 插入区间
 *
 * 给你一个无重叠的，按照区间起始端点排序的区间列表。
 *
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 * Example 1:
 * Input: intervals = [[1, 3], [6, 9]], newInterval = [2, 5]
 * Output: [[1, 5], [6, 9]]
 *
 * Example 2:
 * Input: intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]
 * Output: [[1, 2], [3, 10], [12, 16]]
 * Explanation: Because the new interval [4, 8] overlaps with [3, 5], [6, 7], [8, 10].
 *
 * Constraints:
 * 0 <= intervals.length <= 10 ** 4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10 ** 5
 * intervals is sorted by starti in ascending order.
 * newInterval.length == 2
 * 0 <= start <= end <= 10 ** 5
 *
 * https://leetcode-cn.com/problems/insert-interval/
*/

module.exports = insert;
