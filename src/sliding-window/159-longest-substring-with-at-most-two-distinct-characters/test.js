const lengthOfLongestSubstringTwoDistinct = require('./index');
// const lengthOfLongestSubstringTwoDistinct = require('./template');
// const lengthOfLongestSubstringTwoDistinct = require('./template-zh');

test('define lengthOfLongestSubstringTwoDistinct function', () => {
    expect(typeof lengthOfLongestSubstringTwoDistinct).toBe('function');
});

test('s = "eceba"', () => {
    expect(lengthOfLongestSubstringTwoDistinct('eceba')).toBe(3);
});

test('s = "ccaabbb"', () => {
    expect(lengthOfLongestSubstringTwoDistinct('ccaabbb')).toBe(5);
});

test('s = "cdaba"', () => {
    expect(lengthOfLongestSubstringTwoDistinct('cdaba')).toBe(3);
});
