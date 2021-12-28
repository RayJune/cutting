const search = require('./index');
// const search = require('./template');
// const search = require('./template-zh');

test('define search function', () => {
    expect(typeof search).toBe('function');
});

test('nums = [-1, 0, 3, 5, 9, 12], target = 9', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test('nums = [-1, 0, 3, 5, 9, 12], target = 2', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});
