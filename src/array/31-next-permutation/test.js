const nextPermutation = require('./index');
// const nextPermutation = require('./template');
// const nextPermutation = require('./template-zh');

test('define permute function', () => {
    expect(typeof nextPermutation).toBe('function');
});

test('nums = [1]', () => {
    const nums = [1];

    nextPermutation(nums);
    expect(nums).toEqual([1]);
});

test('nums = [2, 1]', () => {
    const nums = [2, 1];

    nextPermutation(nums);
    expect(nums).toEqual([1, 2]);
});

test('nums = [1, 2, 3]', () => {
    const nums = [1, 2, 3];

    nextPermutation(nums);
    expect(nums).toEqual([1, 3, 2]);
});

test('nums = [3, 2, 1]', () => {
    const nums = [3, 2, 1];

    nextPermutation(nums);
    expect(nums).toEqual([1, 2, 3]);
});

test('nums = [1, 1, 5]', () => {
    const nums = [1, 1, 5];

    nextPermutation(nums);
    expect(nums).toEqual([1, 5, 1]);
});

test('nums = [1, 2, 3, 4]', () => {
    const nums = [1, 2, 3, 4];

    nextPermutation(nums);
    expect(nums).toEqual([1, 2, 4, 3]);
});

test('nums = [1, 2, 3, 2, 1]', () => {
    const nums = [1, 2, 3, 2, 1];

    nextPermutation(nums);
    expect(nums).toEqual([1, 3, 1, 2, 2]);
});
