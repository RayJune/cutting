const threeSumSmaller = require('./index');
// const threeSumSmaller = require('./template');
// const threeSumSmaller = require('./template-zh');

test('define threeSumSmaller function', () => {
    expect(typeof threeSumSmaller).toBe('function');
});

test('nums = [], target = 0', () => {
    expect(threeSumSmaller([], 0)).toBe(0);
});

test('nums = [0], target = 0', () => {
    expect(threeSumSmaller([0], 0)).toBe(0);
});

test('nums = [-2, 0, 1, 3], target = 2', () => {
    expect(threeSumSmaller([-2, 0, 1, 3], 2)).toBe(2);
});

test('nums = [1, -2, 2, 1, 0], target = 1', () => {
    expect(threeSumSmaller([1, -2, 2, 1, 0], 1)).toBe(4);
});
