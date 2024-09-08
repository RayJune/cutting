import insertionSortList from './index';
// import insertionSortList from './template';
// import insertionSortList from './template-zh';
import buildListNode from 'utils/buildListNode';

test('define insertionSortList function', () => {
    expect(typeof insertionSortList).toBe('function');
});

test('head = []', () => {
    expect(insertionSortList(buildListNode([])))
        .toEqual(buildListNode([]));
});

test('head = [1]', () => {
    const head = buildListNode([1]);

    expect(insertionSortList(head)).toEqual(head);
});

test('head = [2, 1]', () => {
    const head = buildListNode([2, 1]);
    const newHead = buildListNode([1, 2]);

    expect(insertionSortList(head)).toEqual(newHead);
});

test('head = [4, 2, 1, 3]', () => {
    const head = buildListNode([4, 2, 1, 3]);
    const newHead = buildListNode([1, 2, 3, 4]);

    expect(insertionSortList(head)).toEqual(newHead);
});

test('head = [-1, 5, 3, 4, 0]', () => {
    const head = buildListNode([-1, 5, 3, 4, 0]);
    const newHead = buildListNode([-1, 0, 3, 4, 5]);

    expect(insertionSortList(head)).toEqual(newHead);
});
