// const removeElement = require('./index');
const removeElement = require('./optimize');
// const removeElement = require('./template');
// const removeElement = require('./template-zh');

test('define removeElement function', () => {
    expect(typeof removeElement).toBe('function');
});

test('nums = [], val = 0', () => {
    expect(removeElement([], 0)).toBe(0);
});

test('nums = [3, 2, 2, 3], val = 3', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
});

test('nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2', () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});
