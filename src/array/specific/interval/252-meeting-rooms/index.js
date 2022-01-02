/*
 * 252. Meeting Rooms
 *
 * Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
 *
 * Example 1:
 * Input: intervals = [[0, 30], [5, 10], [15, 20]]
 * Output: false
 *
 * Example 2:
 * Input: intervals = [[7, 10], [2, 4]]
 * Output: true
 *
 * Constraints:
 * 1 <= intervals.length <= 10 ** 4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10 ** 6
 *
 * https://leetcode.com/problems/meeting-rooms/
*/

/**
 * sort
 *
 * Time Complexity: O(n * log(n)) = 排序 O(n * log(n)) + for 循环次数 O(n)
 * Space complexity: O(log(n)) = 排序
 * Auxiliary complexity: O(log(n)) = 排序
 *
 * @param {number[][]} intervals
 * @return {boolean}
 */
function canAttendMeetings(intervals) {
    if (intervals.length < 2) {
        return true;
    }

    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) {
            return false;
        }
    }

    return true;
}

module.exports = canAttendMeetings;
