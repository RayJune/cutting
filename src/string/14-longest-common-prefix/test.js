// const longestCommonPrefix = require('./index');
// const longestCommonPrefix = require('./reduce');
const longestCommonPrefix = require('./optimize');
// const longestCommonPrefix = require('./binary-search');
// const longestCommonPrefix = require('./template');
// const longestCommonPrefix = require('./template-zh');

test('define longestCommonPrefix function', () => {
    expect(typeof longestCommonPrefix).toBe('function');
});

test('strs = ["flower", "flow", "flight"]', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe('fl');
});

test('strs = ["dog", "racecar", "car"]', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe('');
});

test('strs = ["abb", "abc"]', () => {
    expect(longestCommonPrefix(["abb", "abc"])).toBe('ab');
});

test('strs = ["a", "abc"]', () => {
    expect(longestCommonPrefix(["a", "abc"])).toBe('a');
});
