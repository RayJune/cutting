const search = require('./index');
// const search = require('./template');
// const search = require('./template-zh');

test('define search function', () => {
    expect(typeof search).toBe('function');
});

test('nums = [4, 5, 6, 7, 0, 1, 2], target = 0', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});

test('nums = [4, 5, 6, 7, 0, 1, 2], target = 3', () => {
    expect(search([4, 5, 6, 7, 0, 1], 3)).toBe(-1);
});

test('nums = [1], target = 0', () => {
    expect(search([1], 0)).toBe(-1);
});

test('nums = [4, 5, 1, 2, 3, 4], target = 2', () => {
    expect(search([4, 5, 1, 2, 3, 4], 2)).toBe(3);
});
