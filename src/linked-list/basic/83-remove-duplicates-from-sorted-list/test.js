import deleteDuplicates from './index';
// import deleteDuplicates from './template';
// import deleteDuplicates from './template-zh';
import buildListNode from 'utils/buildListNode';

test('define deleteDuplicates function', () => {
    expect(typeof deleteDuplicates).toBe('function');
});

test('head = [1, 1, 2]', () => {
    const head = buildListNode([1, 1, 2]);

    expect(deleteDuplicates(head))
        .toEqual(buildListNode([1, 2]));
});

test('head = [1, 1, 2, 3, 3]', () => {
    const head = buildListNode([1, 1, 2, 3, 3]);

    expect(deleteDuplicates(head))
        .toEqual(buildListNode([1, 2, 3]));
});

test('head = [1, 1, 1]', () => {
    const head = buildListNode([1, 1, 1]);

    expect(deleteDuplicates(head))
        .toEqual(buildListNode([1]));
});
