const insertionSort = require('./index');

test('define insertionSort function', () => {
    expect(typeof insertionSort).toBe('function');
});

test('arr = [1, 3, 2]', () => {
    expect(insertionSort([1, 3, 2])).toEqual([1, 2, 3]);
});

test('arr = [2, 3, 1]', () => {
    expect(insertionSort([2, 3, 1])).toEqual([1, 2, 3]);
});

test('arr = [3, 1, 2]', () => {
    expect(insertionSort([3, 1, 2])).toEqual([1, 2, 3]);
});

test('arr = [1, 3, 4, 2, 6, 5]', () => {
    expect(insertionSort([1, 3, 4, 2, 6, 5])).toEqual([1, 2, 3, 4, 5, 6]);
});
