// const strStr = require('./index');
const strStr = require('./optimize');
// const strStr = require('./template');
// const strStr = require('./template-zh');

test('define strStr function', () => {
    expect(typeof strStr).toBe('function');
});

test('haystack = "hello", needle = "ll"', () => {
    expect(strStr('hello', 'll')).toBe(2);
});

test('haystack = "aaaaa", needle = "bba"', () => {
    expect(strStr('aaaaa', 'bba')).toBe(-1);
});

test('haystack = "", needle = ""', () => {
    expect(strStr('', '')).toBe(0);
});

test('haystack = "ababaf", needle = "abaf"', () => {
    expect(strStr('ababaf', 'abaf')).toBe(2);
});
