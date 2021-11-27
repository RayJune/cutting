// const isPowerOfFour = require('./index');
// const isPowerOfFour = require('./optimize');
const isPowerOfFour = require('./regex');
// const isPowerOfFour = require('./template');
// const isPowerOfFour = require('./template-zh');

test('define isPowerOfFour function', () => {
    expect(typeof isPowerOfFour).toBe('function');
});

test('n = 0', () => {
    expect(isPowerOfFour(0)).toBe(false);
});

test('n = 1', () => {
    expect(isPowerOfFour(1)).toBe(true);
});

test('n = 16', () => {
    expect(isPowerOfFour(16)).toBe(true);
});

test('n = 5', () => {
    expect(isPowerOfFour(5)).toBe(false);
});
