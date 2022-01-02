const minMeetingRooms = require('./index');
// // const minMeetingRooms = require('./template');
// // const minMeetingRooms = require('./template-zh');

test('define minMeetingRooms function', () => {
    expect(typeof minMeetingRooms).toBe('function');
});

test('intervals = [[0, 30], [5, 10], [15, 20]]', () => {
    expect(minMeetingRooms([[0, 30], [5, 10], [15, 20]])).toBe(2);
});

test('intervals = [[7, 10], [2, 4]]', () => {
    expect(minMeetingRooms([[7, 10], [2, 4]])).toBe(1);
});
