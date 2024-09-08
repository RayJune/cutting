/*
 * 252. 会议室
 *
 * 给定一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，请你判断一个人是否能够参加这里面的全部会议。
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
 * https://leetcode.cn/problems/meeting-rooms/
*/

export default canAttendMeetings;
