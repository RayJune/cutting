// const sortList = require('./index');
const sortList = require('./optimize');
// // const sortList = require('./template');
// // const sortList = require('./template-zh');
const buildListNode = require('utils/buildListNode');

test('define sortList function', () => {
    expect(typeof sortList).toBe('function');
});

test('head = []', () => {
    expect(sortList(buildListNode([]))).toEqual(buildListNode([]));
});

test('head = [1]', () => {
    const head = buildListNode([1]);

    expect(sortList(head)).toEqual(head);
});

test('head = [2, 1]', () => {
    const head = buildListNode([2, 1]);
    const newHead = buildListNode([1, 2]);

    expect(sortList(head)).toEqual(newHead);
});

test('head = [2, 1, 3]', () => {
    const head = buildListNode([2, 1, 3]);
    const newHead = buildListNode([1, 2, 3]);

    expect(sortList(head)).toEqual(newHead);
});

test('head = [4, 2, 1, 3]', () => {
    const head = buildListNode([4, 2, 1, 3]);
    const newHead = buildListNode([1, 2, 3, 4]);

    expect(sortList(head)).toEqual(newHead);
});

test('head = [-1, 5, 3, 4, 0]', () => {
    const head = buildListNode([-1, 5, 3, 4, 0]);
    const newHead = buildListNode([-1, 0, 3, 4, 5]);

    expect(sortList(head)).toEqual(newHead);
});
