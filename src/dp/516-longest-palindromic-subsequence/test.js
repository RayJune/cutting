// import longestPalindromeSubseq from './index';
import longestPalindromeSubseq from './optimize';
// import longestPalindromeSubseq from './template';
// import longestPalindromeSubseq from './template-zh';

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
