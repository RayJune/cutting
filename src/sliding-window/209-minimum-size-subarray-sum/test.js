const minSubArrayLen = require('./index');
// const minSubArrayLen = require('./template');
// const minSubArrayLen = require('./template-zh');

test('define minSubArrayLen function', () => {
    expect(typeof minSubArrayLen).toBe('function');
});

test('target = 7, nums = [2, 3, 1, 2, 4, 3]', () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
});

test('target = 4, nums = [1, 4, 4]', () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
});

test('target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1]', () => {
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
});
