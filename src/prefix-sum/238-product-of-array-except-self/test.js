const productExceptSelf = require('./index');
// const productExceptSelf = require('./template');
// const productExceptSelf = require('./template-zh');

test('define productExceptSelf function', () => {
    expect(typeof productExceptSelf).toBe('function');
});

test('nums = [1, 2, 3, 4]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('nums = [-1, 1, 0, -3, 3]', () => {
    const result = productExceptSelf([-1, 1, 0, -3, 3])
        .map(num => num === 0 ? Math.abs(num) : num);

    expect(result).toEqual([0, 0, 9, 0, 0]);
});
