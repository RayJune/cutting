const maxProduct = require('./index');
// const maxProduct = require('./template');
// const maxProduct = require('./template-zh');

test('define maxProduct function', () => {
    expect(typeof maxProduct).toBe('function');
});

test('nums = [2, 3, -2, 4]', () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6);
});

test('nums = [-2, 0, -1]', () => {
    expect(maxProduct([-2, 0, -1])).toBe(0);
});

test('nums = [-1, 2, -3]', () => {
    expect(maxProduct([-1, 2, -3])).toBe(6);
});

test('nums = [-4, -3, -2]', () => {
    expect(maxProduct([-4, -3, -2])).toBe(12);
});

test('nums = [-1, -2, -9, -6]', () => {
    expect(maxProduct([-1, -2, -9, -6])).toBe(108);
});
