const insert = require('./index');
// // const insert = require('./template');
// // const insert = require('./template-zh');

test('define insert function', () => {
    expect(typeof insert).toBe('function');
});

test('intervals = [[1, 3], [6, 9]], newInterval = [2, 5]', () => {
    expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]);
});

test('intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]', () => {
    expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1, 2], [3, 10], [12, 16]]);
});
