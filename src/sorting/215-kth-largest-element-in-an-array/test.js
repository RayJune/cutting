// import findKthLargest from './index';
import findKthLargest from './optimize';
// import findKthLargest from './template';
// import findKthLargest from './template-zh';

test('define findKthLargest function', () => {
    expect(typeof findKthLargest).toBe('function');
});

test('nums = [3, 2, 1, 5, 6, 4], k = 2', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
});

test('nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
});

test('nums = [-1, 2 ,0], k = 2', () => {
    expect(findKthLargest([-1, 2, 0], 2)).toBe(0);
});

test('nums = [3, 1, 2, 4], k = 2', () => {
    expect(findKthLargest([3, 1, 2, 4], 2)).toBe(3);
});
