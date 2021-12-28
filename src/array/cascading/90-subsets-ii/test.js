// const subsetsWithDup = require('./index');
const subsetsWithDup = require('./optimize');
// const subsetsWithDup = require('./template');
// const subsetsWithDup = require('./template-zh');

test('define subsetsWithDup function', () => {
    expect(typeof subsetsWithDup).toBe('function');
});

test('nums = [0]', () => {
    const sortedSubsets = subsetsWithDup([0]).map(item => item.sort()).sort();

    expect(sortedSubsets).toEqual([[], [0]]);
});

test('nums = [1, 2, 2]', () => {
    const sortedSubsets = subsetsWithDup([1, 2, 2]).map(item => item.sort()).sort();

    expect(sortedSubsets).toEqual([
        [],
        [1],
        [1, 2],
        [1, 2, 2],
        [2],
        [2, 2]
    ]);
});

test('nums = [1, 2, 3]', () => {
    const sortedSubsets = subsetsWithDup([1, 2, 3]).map(item => item.sort()).sort();

    expect(sortedSubsets).toEqual([
        [],
        [1],
        [1, 2],
        [1, 2, 3],
        [1, 3],
        [2],
        [2, 3],
        [3]
    ]);
});

test('nums = [1, 4, 4, 4, 4]', () => {
    const sortedSubsets = subsetsWithDup([1, 4, 4, 4, 4]).map(item => item.sort()).sort();

    expect(sortedSubsets).toEqual([
        [],
        [1],
        [1, 4],
        [1, 4, 4],
        [1, 4, 4, 4],
        [1, 4, 4, 4, 4],
        [4],
        [4, 4],
        [4, 4, 4],
        [4, 4, 4, 4]
    ]);
});

test('nums = [4, 4, 4, 1, 1]', () => {
    const sortedSubsets = subsetsWithDup([4, 4, 4, 4, 1]).map(item => item.sort()).sort();

    expect(sortedSubsets).toEqual([
        [],
        [1],
        [1, 4],
        [1, 4, 4],
        [1, 4, 4, 4],
        [1, 4, 4, 4, 4],
        [4],
        [4, 4],
        [4, 4, 4],
        [4, 4, 4, 4]
    ]);
});