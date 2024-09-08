// import lengthOfLongestSubstringKDistinct from './index';
import lengthOfLongestSubstringKDistinct from './optimize';
// import lengthOfLongestSubstringKDistinct from './template';
// import lengthOfLongestSubstringKDistinct from './template-zh';

test('define lengthOfLongestSubstringKDistinct function', () => {
    expect(typeof lengthOfLongestSubstringKDistinct).toBe('function');
});

test('s = "eceba", k = 2', () => {
    expect(lengthOfLongestSubstringKDistinct('eceba', 2)).toBe(3);
});

test('s = "aa", k = 1', () => {
    expect(lengthOfLongestSubstringKDistinct('aa', 1)).toBe(2);
});

test('s = "abaccc", k = 2', () => {
    expect(lengthOfLongestSubstringKDistinct('abaccc', 2)).toBe(4);
});
