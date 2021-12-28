const pivotIndex = require('./index');
// const pivotIndex = require('./template');
// const pivotIndex = require('./template-zh');

test('define pivotIndex function', () => {
    expect(typeof pivotIndex).toBe('function');
});

test('nums = [1, 7, 3, 6, 5, 6]', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
});

test('nums = [1, 2, 3]', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1);
});

test('nums = [2, 1, -1]', () => {
    expect(pivotIndex([2, 1, -1])).toBe(0);
});
