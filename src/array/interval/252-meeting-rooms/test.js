const canAttendMeetings = require('./index');
// // const canAttendMeetings = require('./template');
// // const canAttendMeetings = require('./template-zh');

test('define canAttendMeetings function', () => {
    expect(typeof canAttendMeetings).toBe('function');
});

test('intervals = [[0, 30], [5, 10], [15, 20]]', () => {
    expect(canAttendMeetings([[0, 30], [5, 10], [15, 20]])).toBe(false);
});

test('intervals = [[7, 10], [2, 4]]', () => {
    expect(canAttendMeetings([[7, 10], [2, 4]])).toBe(true);
});

test('intervals = [[1, 2]]', () => {
    expect(canAttendMeetings([[1, 2]])).toBe(true);
});
