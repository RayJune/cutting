const validPalindrome = require('./index');
// const validPalindrome = require('./template');
// const validPalindrome = require('./template-zh');

test('define validPalindrome function', () => {
    expect(typeof validPalindrome).toBe('function');
});

test('s = "aba"', () => {
    expect(validPalindrome('aba')).toBe(true);
});

test('s = "abca"', () => {
    expect(validPalindrome('abca')).toBe(true);
});

test('s = "abc"', () => {
    expect(validPalindrome('abc')).toBe(false);
});

test('s = "abcad"', () => {
    expect(validPalindrome('abcad')).toBe(false);
});
