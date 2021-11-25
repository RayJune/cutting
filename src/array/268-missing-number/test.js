const missingNumber = require('./index');
// const missingNumber = require('./template');
// const missingNumber = require('./template-zh');

test('define missingNumber function', () => {
    expect(typeof missingNumber).toBe('function');
});

test('nums = [3, 0, 1]', () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
});

test('nums = [0, 1]', () => {
    expect(missingNumber([0, 1])).toBe(2);
});

test('nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});

test('nums = [0]', () => {
    expect(missingNumber([0])).toBe(1);
});
