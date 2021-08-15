const getPermutations = require('./index');

test('define getPermutations function', () => {
    expect(typeof getPermutations).toEqual('function');
});

test('empty array', () => {
    expect(getPermutations([])).toEqual([]);
});

test('1! array', () => {
    expect(getPermutations([1])).toEqual([[1]]);
});

test('2! array', () => {
    const inputArr = [1, 2];
    const permutations = getPermutations(inputArr);

    expect(permutations).toHaveLength(2);
    expect(permutations).toEqual(expect.arrayContaining([[1, 2], [2, 1]]));
});

test('3! array', () => {
    const inputArr = [1, 2, 3];
    const permutations = getPermutations(inputArr);

    expect(permutations).toHaveLength(6);
    expect(permutations).toEqual(expect.arrayContaining([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
    ]));
})

test('4! array', () => {
    const inputArr = [1, 2, 3, 4];
    const permutations = getPermutations(inputArr);

    expect(permutations).toHaveLength(24);
    expect(permutations).toEqual(expect.arrayContaining([
        [1, 2, 3, 4],
        [1, 2, 4, 3],
        [1, 3, 2, 4],
        [1, 3, 4, 2],
        [1, 4, 3, 2],
        [1, 4, 2, 3],
        [2, 1, 3, 4],
        [2, 1, 4, 3],
        [2, 3, 1, 4],
        [2, 3, 4, 1],
        [2, 4, 3, 1],
        [2, 4, 1, 3],
        [3, 2, 1, 4],
        [3, 2, 4, 1],
        [3, 1, 2, 4],
        [3, 1, 4, 2],
        [3, 4, 1, 2],
        [3, 4, 2, 1],
        [4, 2, 3, 1],
        [4, 2, 1, 3],
        [4, 3, 2, 1],
        [4, 3, 1, 2],
        [4, 1, 3, 2],
        [4, 1, 2, 3]
    ]));
})