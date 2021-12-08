// const longestPalindrome = require('./index');
const longestPalindrome = require('./optimize');
// const longestPalindrome = require('./template');
// const longestPalindrome = require('./template-zh');

test('define longestPalindrome function', () => {
    expect(typeof longestPalindrome).toBe('function');
});

test('s = "babad"', () => {
    expect(longestPalindrome('babad')).toMatch(/bab|aba/);
});

test('s = "cbbd"', () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
});

test('s = "a"', () => {
    expect(longestPalindrome('a')).toBe('a');
});

test('s = "ac"', () => {
    expect(longestPalindrome('ac')).toMatch(/a|c/);
});
