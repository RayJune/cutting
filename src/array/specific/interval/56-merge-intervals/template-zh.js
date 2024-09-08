/*
 * 56. 合并区间
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 *
 * Example 1:
 * Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
 * Output: [[1, 6], [8, 10], [15, 18]]
 * Explanation: Since intervals [1, 3] and [2, 6] overlaps, merge them into [1, 6].
 *
 * Example 2:
 * Input: intervals = [[1, 4], [4, 5]]
 * Output: [[1, 5]]
 * Explanation: Intervals [1, 4] and [4, 5] are considered overlapping.
 *
 * Constraints:
 * 1 <= intervals.length <= 10 ** 4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10 ** 4
 *
 * https://leetcode.cn/problems/merge-intervals/
*/

export default merge;
