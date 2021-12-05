// const maximumProduct = require('./index');
const maximumProduct = require('./optimize');
// const maximumProduct = require('./template');
// const maximumProduct = require('./template-zh');

test('define maximumProduct function', () => {
    expect(typeof maximumProduct).toBe('function');
});

test('nums = [1, 2, 3]', () => {
    expect(maximumProduct([1, 2, 3])).toBe(6);
});

test('nums = [1, 2, 3, 4]', () => {
    expect(maximumProduct([1, 2, 3, 4])).toBe(24);
});

test('nums = [-1, -2, -3]', () => {
    expect(maximumProduct([-1, -2, -3])).toBe(-6);
});

test('nums = [-100, -98, -1, 2, 3, 4]', () => {
    expect(maximumProduct([-100, -98, -1, 2, 3, 4])).toBe(39200);
});

test('nums = [3, 2, 1, 0, -1, -2, -3]', () => {
    expect(maximumProduct([3, 2, 1, 0, -1, -2, -3])).toBe(18);
});
