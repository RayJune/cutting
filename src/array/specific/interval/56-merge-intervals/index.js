/*
 * 56. Merge Intervals
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
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
 * https://leetcode.com/problems/merge-intervals/
*/

/**
 * sort
 *
 * Time Complexity: O(n * log(n)) = 排序 O(n * log(n)) + for 循环次数 O(n)
 * Space complexity: O(n) = merged 数组长度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(log(n)) = 排序 O(log(n))
 * 其中 n 是 intervals 数组的长度
 *
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
function merge(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i];
        const prev = merged[merged.length - 1];

        if (prev[1] >= curr[0]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            merged.push(curr);
        }
    }

    return merged;
}

module.exports = merge;
