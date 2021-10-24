const maxSubArrayLen = require('./index');
// const maxSubArrayLen = require('./template');
// const maxSubArrayLen = require('./template-zh');

test('define maxSubArrayLen function', () => {
    expect(typeof maxSubArrayLen).toBe('function');
});

test('nums = [1, -1, 5, -2, 3], k = 3', () => {
    expect(maxSubArrayLen([1, -1, 5, -2, 3], 3)).toBe(4);
});

test('nums = [-2, -1, 2, 1], k = 1', () => {
    expect(maxSubArrayLen([-2, -1, 2, 1], 1)).toBe(2);
});
