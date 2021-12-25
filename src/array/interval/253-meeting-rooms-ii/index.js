/*
 * 253. Meeting Rooms II
 *
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
 *
 * Example 1:
 * Input: intervals = [[0, 30], [5, 10], [15, 20]]
 * Output: 2
 *
 * Example 2:
 * Input: intervals = [[7, 10], [2, 4]]
 * Output: 1
 *
 * Constraints:
 * 1 <= intervals.length <= 10 ** 4
 * 0 <= starti <= endi <= 10 ** 6
 *
 * https://leetcode.com/problems/meeting-rooms-ii/
*/

/**
 * Chronological Ordering
 *
 * Time Complexity: O(n * log(n)) = 排序 O(n * log(n)) + for 循环次数 O(n)
 * Space complexity: O(n) = start 和 end 数组长度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(n) = start 和 end 数组长度 O(n) + 排序 O(log(n))
 *
 * @param {number[][]} intervals
 * @returns {number}
 */
function minMeetingRooms(intervals) {
    const start = [];
    const end = [];

    for (const item of intervals) {
        start.push(item[0])
        end.push(item[1])
    }
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let i = 0;
    let usedRooms = 0;

    for (const item of start) {
        if (item < end[i]) {
            usedRooms += 1;
        } else {
            i += 1;
        }
    }

    return usedRooms;
}

module.exports = minMeetingRooms;
