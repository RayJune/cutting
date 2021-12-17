const findMin = require('./index');
// const findMin = require('./template');
// const findMin = require('./template-zh');

test('define findMin function', () => {
    expect(typeof findMin).toBe('function');
});

test('nums = [1, 3, 5]', () => {
    expect(findMin([1, 3, 5])).toBe(1);
});

test('nums = [2, 2, 2, 0, 1]', () => {
    expect(findMin([2, 2, 2, 0, 1])).toBe(0);
});

test('nums = [1, 3, 3]', () => {
    expect(findMin([1, 3, 3])).toBe(1);
});
