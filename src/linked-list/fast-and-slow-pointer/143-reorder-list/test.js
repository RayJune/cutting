import reorderList from './index';
// import reorderList from './template';
// import reorderList from './template-zh';
import buildListNode from 'utils/buildListNode';

test('define reorderList function', () => {
    expect(typeof reorderList).toBe('function');
});

test('head = [1, 2, 3, 4]', () => {
    const head = buildListNode([1, 2, 3, 4]);

    expect(reorderList(head))
        .toEqual(buildListNode([1, 4, 2, 3]));
});

test('head = [1, 2, 3, 4, 5]', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);

    expect(reorderList(head))
        .toEqual(buildListNode([1, 5, 2, 4, 3]));
});

test('head = [1]', () => {
    const head = buildListNode([1]);

    expect(reorderList(head))
        .toEqual(buildListNode([1]));
});

test('head = [1, 2]', () => {
    const head = buildListNode([1, 2]);

    expect(reorderList(head))
        .toEqual(buildListNode([1, 2]));
});
