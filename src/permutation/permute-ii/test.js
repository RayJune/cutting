// const permuteUnique = require('./index');
const permuteUnique = require('./optimize');
// const permuteUnique = require('./template');
// const permuteUnique = require('./template-zh');

test('define permuteUnique function', () => {
    expect(typeof permuteUnique).toBe('function');
});

test('nums = [1]', () => {
    expect(permuteUnique([1])).toEqual([[1]]);
});

test('nums = [1, 2]', () => {
    const nums = [1, 2];
    const permutations = permuteUnique(nums);

    expect(permutations).toHaveLength(2);
    expect(permutations).toEqual(expect.arrayContaining([
        [1, 2],
        [2, 1]
    ]));
});

test('nums = [1, 1, 2]', () => {
    const nums = [1, 2, 1];
    const permutations = permuteUnique(nums);

    expect(permutations).toHaveLength(3);
    expect(permutations).toEqual(expect.arrayContaining([
        [1, 1, 2],
        [2, 1, 1],
        [1, 2, 1]
    ]));
});

test('nums = [1, 1, 2]', () => {
    const nums = [1, 1, 2];
    const permutations = permuteUnique(nums);

    expect(permutations).toHaveLength(3);
    expect(permutations).toEqual(expect.arrayContaining([
        [2, 1, 1],
        [1, 1, 2],
        [1, 2, 1]
    ]));
});

test('nums = [1, 2, 3]', () => {
    const nums = [1, 2, 3];
    const permutations = permuteUnique(nums);

    expect(permutations).toHaveLength(6);
    expect(permutations).toEqual(expect.arrayContaining([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
    ]));
});

test('nums = [1, 1, 2, 2]', () => {
    const nums = [1, 1, 2, 2];
    const permutations = permuteUnique(nums);

    expect(permutations).toHaveLength(6);
    expect(permutations).toEqual(expect.arrayContaining([
        [1, 1, 2, 2],
        [1, 2, 1, 2],
        [1, 2, 2, 1],
        [2, 1 ,1, 2],
        [2, 1, 2, 1],
        [2, 2, 1, 1]
    ]));
});

test('nums = [1, 1, 2, 3]', () => {
    const nums = [1, 1, 2, 3];
    const permutations = permuteUnique(nums);

    expect(permutations).toHaveLength(12);
    expect(permutations).toEqual(expect.arrayContaining([
        [1, 1, 2, 3],
        [1, 1, 3, 2],
        [1, 2, 1, 3],
        [1, 2 ,3, 1],
        [1, 3, 2, 1],
        [1, 3, 1, 2],
        [2, 1, 1, 3],
        [2, 1, 3, 1],
        [2, 3, 1, 1],
        [3, 1, 2, 1],
        [3, 1, 1, 2],
        [3, 2, 1, 1]
    ]));
});

test('nums = [0, 1, 0, 0, 9]', () => {
    const nums = [0, 1, 0, 0, 9];
    const permutations = permuteUnique(nums);

    expect(permutations).toHaveLength(20);
    expect(permutations).toEqual(expect.arrayContaining([
        [0,0,0,1,9],
        [0,0,0,9,1],
        [0,0,1,0,9],
        [0,0,1,9,0],
        [0,0,9,0,1],
        [0,0,9,1,0],
        [0,1,0,0,9],
        [0,1,0,9,0],
        [0,1,9,0,0],
        [0,9,0,0,1],
        [0,9,0,1,0],
        [0,9,1,0,0],
        [1,0,0,0,9],
        [1,0,0,9,0],
        [1,0,9,0,0],
        [1,9,0,0,0],
        [9,0,0,0,1],
        [9,0,0,1,0],
        [9,0,1,0,0],
        [9,1,0,0,0]
    ]));
});
