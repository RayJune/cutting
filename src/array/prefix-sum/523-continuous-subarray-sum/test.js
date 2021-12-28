const checkSubarraySum = require('./index');
// const checkSubarraySum = require('./template');
// const checkSubarraySum = require('./template-zh');

test('define checkSubarraySum function', () => {
    expect(typeof checkSubarraySum).toBe('function');
});

test('nums = [23, 2, 4, 6, 7], k = 6', () => {
    expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).toBe(true);
});

test('nums = [23, 2, 6, 4, 7], k = 6', () => {
    expect(checkSubarraySum([23, 2, 6, 4, 7], 6)).toBe(true);
});

test('nums = [23, 2, 6, 4, 7], k = 13', () => {
    expect(checkSubarraySum([23, 2, 6, 4, 7], 13)).toBe(false);
});

test('nums = [5, 0, 0, 0], k = 3', () => {
    expect(checkSubarraySum([5, 0, 0, 3], 3)).toBe(true);
});

test('nums = [23], k = 13', () => {
    expect(checkSubarraySum([23], 13)).toBe(false);
});

test('nums = [23, 2, 4, 6, 6], k = 7', () => {
    expect(checkSubarraySum([23, 2, 4, 6, 6], 7)).toBe(true);
});
