const nextPermutation = require('./index');
// const nextPermutation = require('./template');
// const nextPermutation = require('./template-zh');

test('define permute function', () => {
    expect(typeof nextPermutation).toBe('function');
});

test('input nums = [1]', () => {
    expect(nextPermutation([1])).toEqual([1]);
});

test('input nums = [2, 1]', () => {
    expect(nextPermutation([2, 1])).toEqual([1, 2]);
});

test('input nums = [1, 2, 3]', () => {
    expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
});

test('input nums = [1, 2, 3]', () => {
    expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
});

test('input nums = [3, 2, 1]', () => {
    expect(nextPermutation([3, 2, 1])).toEqual([1, 2, 3]);
});

test('input nums = [1, 1, 5]', () => {
    expect(nextPermutation([1, 1, 5])).toEqual([1, 5, 1]);
});

test('input nums = [1, 2, 3, 4]', () => {
    expect(nextPermutation([1, 2, 3, 4])).toEqual([1, 2, 4, 3]);
});

test('input nums = [1, 2, 3, 2, 1]', () => {
    expect(nextPermutation([1, 2, 3, 2, 1])).toEqual([1, 3, 1, 2, 2]);
});
