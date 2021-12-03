// const subsets = require('./index');
const subsets = require('./optimize');
// const subsets = require('./template');
// const subsets = require('./template-zh');

test('define subsets function', () => {
    expect(typeof subsets).toBe('function');
});

test('nums = [0]', () => {
    const sortedSubsets = subsets([0]).map(item => item.sort()).sort();

    expect(sortedSubsets).toEqual([[], [0]])
});

test('nums = [1, 2]', () => {
    const sortedSubsets = subsets([1, 2]).map(item => item.sort()).sort();

    expect(sortedSubsets).toEqual([[], [1], [1, 2], [2]]);
});

test('nums = [1, 2, 3]', () => {
    const sortedSubsets = subsets([1, 2, 3]).map(item => item.sort()).sort();

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
