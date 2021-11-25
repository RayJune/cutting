const removeDuplicates = require('./index');
// const removeDuplicates = require('./template');
// const removeDuplicates = require('./template-zh');

test('define removeDuplicates function', () => {
    expect(typeof removeDuplicates).toBe('function');
});

test('nums = []', () => {
    expect(removeDuplicates([])).toBe(0);
});

test('nums = [1]', () => {
    expect(removeDuplicates([1])).toBe(1);
});

test('nums = [1, 1, 2]', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test('nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});
