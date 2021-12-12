const isPalindrome = require('./index');
// const isPalindrome = require('./template');
// const isPalindrome = require('./template-zh');

test('define isPalindrome function', () => {
    expect(typeof isPalindrome).toBe('function');
});

test('x = 0', () => {
    expect(isPalindrome(0)).toBe(true);
});

test('x = 121', () => {
    expect(isPalindrome(121)).toBe(true);
});

test('x = 10', () => {
    expect(isPalindrome(10)).toBe(false);
});

test('x = -101', () => {
    expect(isPalindrome(-101)).toBe(false);
});

test('x = 1011', () => {
    expect(isPalindrome(1011)).toBe(false);
});
