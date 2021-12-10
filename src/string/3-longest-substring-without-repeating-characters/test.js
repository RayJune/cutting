const lengthOfLongestSubstring = require('./index');
// const lengthOfLongestSubstring = require('./template');
// const lengthOfLongestSubstring = require('./template-zh');

test('define lengthOfLongestSubstring function', () => {
    expect(typeof lengthOfLongestSubstring).toBe('function');
});

test('s = "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
});

test('s = "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
});

test('s = "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});

test('s = ""', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
});
