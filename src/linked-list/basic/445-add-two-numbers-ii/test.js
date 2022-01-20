// const addTwoNumbers = require('./index');
// const addTwoNumbers = require('./optimize');
const addTwoNumbers = require('./optimize2');
// const addTwoNumbers = require('./template');
// const addTwoNumbers = require('./template-zh');
const buildListNode = require('../../../utils/buildListNode');

test('define addTwoNumbers function', () => {
    expect(typeof addTwoNumbers).toBe('function');
});

test('l1 = [7, 2, 4, 3], l2 = [5, 6, 4]', () => {
    const l1 = buildListNode([7, 2, 4, 3]);
    const l2 = buildListNode([5, 6, 4]);

    expect(addTwoNumbers(l1, l2))
        .toEqual(buildListNode([7, 8, 0, 7]));
});

test('l1 = [0], l2 = [0]', () => {
    const l1 = buildListNode([0]);
    const l2 = buildListNode([0]);

    expect(addTwoNumbers(l1, l2))
        .toEqual(buildListNode([0]));
});

test('l1 = [2, 4, 3], l2 = [5, 6, 4]', () => {
    const l1 = buildListNode([2, 4, 3]);
    const l2 = buildListNode([5, 6, 4]);

    expect(addTwoNumbers(l1, l2))
        .toEqual(buildListNode([8, 0, 7]));
});

test('l1 = [1, 1], l2 = [0]', () => {
    const l1 = buildListNode([1, 1]);
    const l2 = buildListNode([0]);

    expect(addTwoNumbers(l1, l2))
        .toEqual(buildListNode([1, 1]));
});

test('l1 = [0], l2 = [1, 1]', () => {
    const l1 = buildListNode([0]);
    const l2 = buildListNode([1, 1]);

    expect(addTwoNumbers(l1, l2))
        .toEqual(buildListNode([1, 1]));
});

test('l1 = [9], l2 = [9]', () => {
    const l1 = buildListNode([9]);
    const l2 = buildListNode([9]);

    expect(addTwoNumbers(l1, l2))
        .toEqual(buildListNode([1, 8]));
});
