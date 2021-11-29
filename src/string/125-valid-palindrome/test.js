// const isPalindrome = require('./index');
// const isPalindrome = require('./optimize');
const isPalindrome = require('./optimize2');
// const isPalindrome = require('./template');
// const isPalindrome = require('./template-zh');

test('define isPalindrome function', () => {
    expect(typeof isPalindrome).toBe('function');
});

test('s = "A man, a plan, a canal: Panama"', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});

test('s = "race a car"', () => {
    expect(isPalindrome('race a car')).toBe(false);
});

test('s = " "', () => {
    expect(isPalindrome(' ')).toBe(true);
});
