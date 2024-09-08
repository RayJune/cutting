// import longestPalindrome from './index';
import longestPalindrome from './optimize';
// import longestPalindrome from './template';
// import longestPalindrome from './template-zh';

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
