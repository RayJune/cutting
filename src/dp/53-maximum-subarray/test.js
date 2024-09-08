import maxSubArray from './index';
// import maxSubArray from './template';
// import maxSubArray from './template-zh';

test('define maxSubArray function', () => {
    expect(typeof maxSubArray).toBe('function');
});

test('nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

    expect(maxSubArray(nums)).toBe(6);
});

test('nums = [1]', () => {
    expect(maxSubArray([1])).toBe(1);
});

test('nums = [5, 4, -1, 7, 8]', () => {
    const nums = [5, 4, -1, 7, 8];

    expect(maxSubArray(nums)).toBe(23);
});
