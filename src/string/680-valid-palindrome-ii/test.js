import validPalindrome from './index';
// import validPalindrome from './template';
// import validPalindrome from './template-zh';

test('define validPalindrome function', () => {
    expect(typeof validPalindrome).toBe('function');
});

test('s = "aba"', () => {
    expect(validPalindrome('aba')).toBe(true);
});

test('s = "abca"', () => {
    expect(validPalindrome('abca')).toBe(true);
});

test('s = "abc"', () => {
    expect(validPalindrome('abc')).toBe(false);
});

test('s = "abcad"', () => {
    expect(validPalindrome('abcad')).toBe(false);
});
