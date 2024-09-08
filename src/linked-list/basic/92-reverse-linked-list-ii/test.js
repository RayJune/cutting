import reverseBetween from './index';
// import reverseBetween from './template';
// import reverseBetween from './template-zh';
import buildListNode from 'utils/buildListNode';

test('define reverseBetween function', () => {
    expect(typeof reverseBetween).toBe('function');
});

test('head = [1, 2, 3, 4, 5], left = 2, right = 4', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);

    expect(reverseBetween(head, 2, 4))
        .toEqual(buildListNode([1, 4, 3, 2, 5]));
});

test('head = [5], left = 1, right = 1', () => {
    const head = buildListNode([5]);

    expect(reverseBetween(head, 1, 1))
        .toEqual(buildListNode([5]));
});

test('head = [3, 5], left = 1, right = 2', () => {
    const head = buildListNode([3, 5]);

    expect(reverseBetween(head, 1, 2))
        .toEqual(buildListNode([5, 3]));
});
