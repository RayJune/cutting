import productExceptSelf from './index';
// import productExceptSelf from './template';
// import productExceptSelf from './template-zh';

test('define productExceptSelf function', () => {
    expect(typeof productExceptSelf).toBe('function');
});

test('nums = [1, 2, 3, 4]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('nums = [-1, 1, 0, -3, 3]', () => {
    const answer = productExceptSelf([-1, 1, 0, -3, 3])
        .map(num => num === 0 ? Math.abs(num) : num);

    expect(answer).toEqual([0, 0, 9, 0, 0]);
});
