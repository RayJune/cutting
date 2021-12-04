const findNumberOfLIS = require('./index');
// const findNumberOfLIS = require('./template');
// const findNumberOfLIS = require('./template-zh');

test('define findNumberOfLIS function', () => {
    expect(typeof findNumberOfLIS).toBe('function');
});

test('nums = [1, 3, 5, 4, 7]', () => {
    expect(findNumberOfLIS([1, 3, 5, 4, 7])).toBe(2);
});

test('nums = [2, 2, 2, 2, 2]', () => {
    expect(findNumberOfLIS([2, 2, 2, 2, 2])).toBe(5);
});

test('nums = [1, 2, 3, 1, 2, 3, 1, 2, 3]', () => {
    expect(findNumberOfLIS([1, 2, 3, 1, 2, 3, 1, 2 , 3])).toBe(10);
});
