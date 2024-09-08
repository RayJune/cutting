import partition from './index';
// import partition from './template';
// import partition from './template-zh';
import buildListNode from 'utils/buildListNode';

test('define partition function', () => {
    expect(typeof partition).toBe('function');
});

test('head = [], x = 1', () => {
    const head = buildListNode([]);

    expect(partition(head, 1))
        .toEqual(buildListNode([]));
});

test('head = [1], x = 2', () => {
    const head = buildListNode([1]);

    expect(partition(head, 2))
        .toEqual(buildListNode([1]));
});

test('head = [2, 1], x = 2', () => {
    const head = buildListNode([2, 1]);

    expect(partition(head, 2))
        .toEqual(buildListNode([1, 2]));
});

test('head = [1, 4, 3, 2, 5, 2], x = 3', () => {
    const head = buildListNode([1, 4, 3, 2, 5, 2]);

    expect(partition(head, 3))
        .toEqual(buildListNode([1, 2, 2, 4, 3, 5]));
});
