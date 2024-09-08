// import lengthOfLongestSubstringTwoDistinct from './index';
import lengthOfLongestSubstringTwoDistinct from './optimize';
// import lengthOfLongestSubstringTwoDistinct from './template';
// import lengthOfLongestSubstringTwoDistinct from './template-zh';

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

test('s = "abbbaccccc"', () => {
    expect(lengthOfLongestSubstringTwoDistinct('abbbaccccc')).toBe(6);
});
