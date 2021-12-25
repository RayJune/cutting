const removeDuplicates = require('./index');
// const removeDuplicates = require('./template');
// const removeDuplicates = require('./template-zh');

test('define removeDuplicates function', () => {
    expect(typeof removeDuplicates).toBe('function');
});

test('nums = []', () => {
    expect(removeDuplicates([])).toBe(0);
});

test('nums = [1, 1, 1, 2, 2, 3]', () => {
    expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toBe(5);
});

test('nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])).toBe(7);
});
