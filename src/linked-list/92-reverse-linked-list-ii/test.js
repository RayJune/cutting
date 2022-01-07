// const reverseBetween = require('./index');
const reverseBetween = require('./optimize');
// const reverseBetween = require('./template');
// const reverseBetween = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define reverseBetween function', () => {
    expect(typeof reverseBetween).toBe('function');
});

test('head = [1, 2, 3, 4, 5], left = 2, right = 4', () => {
    expect(reverseBetween(buildListNode([1, 2, 3, 4, 5]), 2, 4))
        .toEqual(buildListNode([1, 4, 3, 2, 5]));
});

test('head = [5], left = 1, right = 1', () => {
    expect(reverseBetween(buildListNode([5]), 1, 1))
        .toEqual(buildListNode([5]));
});

test('head = [3, 5], left = 1, right = 2', () => {
    expect(reverseBetween(buildListNode([3, 5]), 1, 2))
        .toEqual(buildListNode([5, 3]));
});
