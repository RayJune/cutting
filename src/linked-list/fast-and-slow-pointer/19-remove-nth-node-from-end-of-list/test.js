import removeNthFromEnd from './index';
// import removeNthFromEnd from './template';
// import removeNthFromEnd from './template-zh';
import buildListNode from 'utils/buildListNode';

test('define removeNthFromEnd function', () => {
    expect(typeof removeNthFromEnd).toBe('function');
});

test('head = [1], n = 1', () => {
    const head = buildListNode([1]);

    expect(removeNthFromEnd(head, 1)).
        toEqual(buildListNode([]));
});

test('head = [1, 2], n = 1', () => {
    const head = buildListNode([1, 2]);

    expect(removeNthFromEnd(head, 1))
        .toEqual(buildListNode([1]));
});

test('head = [1, 2, 3, 4, 5], n = 2', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);

    expect(removeNthFromEnd(head, 2))
        .toEqual(buildListNode([1, 2, 3, 5]));
});
