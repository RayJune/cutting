const containsDuplicate = require('./index');
// const containsDuplicate = require('./template');
// const containsDuplicate = require('./template-zh');

test('define containsDuplicate function', () => {
    expect(typeof containsDuplicate).toBe('function');
});

test('input nums = [1, 2, 3, 1]', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test('input nums = [1, 2, 3, 4]', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test('input nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});
