// const repeatedSubstringPattern = require('./index');
const repeatedSubstringPattern = require('./optimize');
// const repeatedSubstringPattern = require('./template');
// const repeatedSubstringPattern = require('./template-zh');

test('define repeatedSubstringPattern function', () => {
    expect(typeof repeatedSubstringPattern).toBe('function');
});

test('s = "abab"', () => {
    expect(repeatedSubstringPattern('abab')).toBe(true);
});

test('s = "aba"', () => {
    expect(repeatedSubstringPattern('aba')).toBe(false);
});

test('s = "abcabcabcabc"', () => {
    expect(repeatedSubstringPattern('abcabcabcabc')).toBe(true);
});

test('s = "', () => {
    expect(repeatedSubstringPattern('')).toBe(true);
});

test('s = "aad', () => {
    expect(repeatedSubstringPattern('aad')).toBe(false);
});
