import reverseList from './index';
// import reverseList from './template';
// import reverseList from './template-zh';
import buildListNode from 'utils/buildListNode';

test('define reverseList function', () => {
    expect(typeof reverseList).toBe('function');
});

test('head = [1, 2, 3, 4, 5]', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);

    expect(reverseList(head))
        .toEqual(buildListNode([5, 4, 3, 2, 1]));
});

test('head = [1, 2]', () => {
    const head = buildListNode([1, 2]);

    expect(reverseList(head))
        .toEqual(buildListNode([2, 1]));
});

test('head = []', () => {
    const head = buildListNode([]);

    expect(reverseList(head))
        .toEqual(buildListNode([]));
});
