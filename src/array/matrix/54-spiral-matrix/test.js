const spiralOrder = require('./index');
// // const spiralOrder = require('./template');
// // const spiralOrder = require('./template-zh');

test('define spiralOrder function', () => {
    expect(typeof spiralOrder).toBe('function');
});

test('matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', () => {
    expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

test('matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]', () => {
    expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});
