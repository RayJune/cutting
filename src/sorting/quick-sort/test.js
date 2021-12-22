const quickSort = require('./index');

test('define quickSort function', () => {
    expect(typeof quickSort).toBe('function');
});

test('arr = [1, 3, 2]', () => {
    expect(quickSort([1, 3, 2])).toEqual([1, 2, 3]);
});

test('arr = [2, 3, 1]', () => {
    expect(quickSort([2, 3, 1])).toEqual([1, 2, 3]);
});

test('arr = [3, 1, 2]', () => {
    expect(quickSort([3, 1, 2])).toEqual([1, 2, 3]);
});

test('arr = [1, 3, 4, 2, 6, 5]', () => {
    expect(quickSort([1, 3, 4, 2, 6, 5])).toEqual([1, 2, 3, 4, 5, 6]);
});
