import getKthFromEnd from './index';
// import getKthFromEnd from './template-zh';
import buildListNode from 'utils/buildListNode';

test('define getKthFromEnd function', () => {
    expect(typeof getKthFromEnd).toBe('function');
});

test('head = [1], n = 1', () => {
    const head = buildListNode([1]);

    expect(getKthFromEnd(head, 1)).toBe(head);
});

test('head = [1, 2, 3, 4, 5], n = 2', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);

    expect(getKthFromEnd(head, 2))
        .toEqual(buildListNode([4, 5]));
});
