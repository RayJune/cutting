const moveZeroes = require('./index');
// const moveZeroes = require('./template');
// const moveZeroes = require('./template-zh');

test('define moveZeroes function', () => {
    expect(typeof moveZeroes).toBe('function');
});

test('nums = [0, 1, 0, 3 ,12]', () => {
    const nums = [0, 1, 0, 3, 12];

    moveZeroes(nums);

    expect(nums).toEqual([1, 3, 12, 0, 0]);
});

test('nums = [0]', () => {
    const nums = [0];

    moveZeroes(nums);

    expect(nums).toEqual([0]);
});
