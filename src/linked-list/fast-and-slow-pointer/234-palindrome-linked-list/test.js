// const isPalindrome = require('./index');
const isPalindrome = require('./optimize');
// const isPalindrome = require('./template');
// const isPalindrome = require('./template-zh');
const buildListNode = require('../../../utils/buildListNode');

test('define isPalindrome function', () => {
    expect(typeof isPalindrome).toBe('function');
});

test('head = [1, 2]', () => {
    const head = buildListNode([1, 2]);

    expect(isPalindrome(head)).toBe(false);
    expect(head).toEqual(buildListNode([1, 2]));
});

test('head = [1, 2, 3]', () => {
    const head = buildListNode([1, 2, 3]);

    expect(isPalindrome(head)).toBe(false);
    expect(head).toEqual(buildListNode([1, 2, 3]));
});

test('head = [1, 2, 2, 1]', () => {
    const head = buildListNode([1, 2, 2, 1]);

    expect(isPalindrome(head)).toBe(true);
    expect(head).toEqual(buildListNode([1, 2, 2, 1]));
});
