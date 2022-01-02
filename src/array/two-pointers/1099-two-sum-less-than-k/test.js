const twoSumLessThanK = require('./index');
// const twoSumLessThanK = require('./template');
// const twoSumLessThanK = require('./template-zh');

test('define twoSumLessThanK function', () => {
    expect(typeof twoSumLessThanK).toBe('function');
});

test('nums = [34, 23, 1, 24, 75, 33, 54, 8], k = 60', () => {
    expect(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60)).toBe(58);
});

test('nums = [10, 20, 30], k = 15', () => {
    expect(twoSumLessThanK([10, 20, 30], 15)).toBe(-1);
});

test('nums = [1], k = 1', () => {
    expect(twoSumLessThanK([1], 1)).toBe(-1);
});
