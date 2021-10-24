const findMaxLength = require('./index');
// const findMaxLength = require('./template');
// const findMaxLength = require('./template-zh');

test('define findMaxLength function', () => {
    expect(typeof findMaxLength).toBe('function');
});

test('nums = [0, 1]', () => {
    expect(findMaxLength([0, 1])).toBe(2);
});

test('nums = [0, 1, 0]', () => {
    expect(findMaxLength([0, 1, 0])).toBe(2);
});
