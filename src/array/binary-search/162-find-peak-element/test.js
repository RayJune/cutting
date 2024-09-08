import findPeakElement from './index';
// import findPeakElement from './template';
// import findPeakElement from './template-zh';

test('define findPeakElement function', () => {
    expect(typeof findPeakElement).toBe('function');
});

test('nums = [1, 2, 3, 1]', () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
});

test('nums = [1, 2, 1, 3, 5, 6, 4]', () => {
    const set = new Set([1, 5]);

    expect(set.has(findPeakElement([1, 2, 1, 3, 5, 6, 4]))).toBe(true);
});
