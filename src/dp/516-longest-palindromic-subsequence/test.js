// const longestPalindromeSubseq = require('./index');
const longestPalindromeSubseq = require('./optimize');
// const longestPalindromeSubseq = require('./template');
// const longestPalindromeSubseq = require('./template-zh');

test('define longestPalindromeSubseq function', () => {
    expect(typeof longestPalindromeSubseq).toBe('function');
});

test('s = "bbbab"', () => {
    expect(longestPalindromeSubseq('bbbab')).toBe(4);
});

test('s = "cbbd"', () => {
    expect(longestPalindromeSubseq('cbbd')).toBe(2);
});

test('s = "a"', () => {
    expect(longestPalindromeSubseq('a')).toBe(1);
});
