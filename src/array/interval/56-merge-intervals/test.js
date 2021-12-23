const merge = require('./index');
// // const merge = require('./template');
// // const merge = require('./template-zh');

test('define merge function', () => {
    expect(typeof merge).toBe('function');
});

test('intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]', () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
});

test('intervals = [[1, 4], [4, 5]]', () => {
    expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
});

test('intervals = [[1, 2]]', () => {
    expect(merge([[1, 2]])).toEqual([[1, 2]]);
});
