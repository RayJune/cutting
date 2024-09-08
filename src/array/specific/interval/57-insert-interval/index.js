/*
 * 57. Insert Interval
 *
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
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
 * https://leetcode.com/problems/insert-interval/
*/

/**
 * 一次遍历
 *
 * Time Complexity: O(n) = while 循环次数之和
 * Space complexity: O(n) = result 长度
 * Auxiliary complexity: O(1)
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @returns {number[][]}
 */
function insert(intervals, newInterval) {
    const result = [];
    const len = intervals.length;
    let i = 0;

    while (i < len && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i += 1;
    }
    while (i < len && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i += 1;
    }

    return result.concat([newInterval], intervals.slice(i));
}

export default insert;
