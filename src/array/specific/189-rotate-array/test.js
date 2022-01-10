// const rotate = require('./index');
// const rotate = require('./optimize');
const rotate = require('./optimize2');
// const rotate = require('./template');
// const rotate = require('./template-zh');

test('define permute function', () => {
    expect(typeof rotate).toBe('function');
});

test('nums = [1, 2, 3, 4, 5, 6, 7], k = 3', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];

    rotate(nums, 3);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
});

test('nums = [-1, -100, 3, 99], k = 2', () => {
    const nums = [-1, -100, 3, 99];

    rotate(nums, 2);
    expect(nums).toEqual([3, 99, -1, -100]);
});

test('nums = [-1, -100, 3, 99], k = 0', () => {
    const nums = [-1, -100, 3, 99];

    rotate(nums, 0);
    expect(nums).toEqual([-1, -100, 3, 99]);
});
