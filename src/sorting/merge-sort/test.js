// import mergeSort from './index';
import mergeSort from './optimize';

test('define mergeSort function', () => {
    expect(typeof mergeSort).toBe('function');
});

test('arr = [1, 3, 2]', () => {
    expect(mergeSort([1, 3, 2])).toEqual([1, 2, 3]);
});

test('arr = [2, 3, 1]', () => {
    expect(mergeSort([2, 3, 1])).toEqual([1, 2, 3]);
});

test('arr = [3, 1, 2]', () => {
    expect(mergeSort([3, 1, 2])).toEqual([1, 2, 3]);
    // expect(mergeSort([3, 1, 2])).toEqual([2, 1, 3]);
});

test('arr = [1, 3, 4, 2, 6, 5]', () => {
    expect(mergeSort([1, 3, 4, 2, 6, 5])).toEqual([1, 2, 3, 4, 5, 6]);
});
