// const subsetsWithDup = require('./index');
// const subsetsWithDup = require('./optimize');
const subsetsWithDup = require('./optimize2');
// const subsetsWithDup = require('./template');
// const subsetsWithDup = require('./template-zh');

test('define subsetsWithDup function', () => {
    expect(typeof subsetsWithDup).toBe('function');
});

test('nums = [0]', () => {
    const output = subsetsWithDup([0]);

    expect(output).toHaveLength(2);
    expect(output).toEqual(expect.arrayContaining([
        [],
        [0]
    ]));
});

test('nums = [1, 2, 2]', () => {
    const output = subsetsWithDup([1, 2, 2]);

    expect(output).toHaveLength(6);
    expect(output).toEqual(expect.arrayContaining([
        [],
        [1],
        [1, 2],
        [1, 2, 2],
        [2],
        [2, 2]
    ]))
});

test('nums = [1, 2, 3]', () => {
    const output = subsetsWithDup([1, 2, 3]);

    expect(output).toHaveLength(8);
    expect(output).toEqual(expect.arrayContaining([
        [],
        [1],
        [1, 2],
        [1, 2, 3],
        [1, 3],
        [2],
        [2, 3],
        [3]
    ]))
});

test('nums = [1, 4, 4, 4, 4]', () => {
    const output = subsetsWithDup([1, 4, 4, 4, 4]);

    expect(output).toHaveLength(10);
    expect(output).toEqual(expect.arrayContaining([
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
    ]))
});

test('nums = [4, 4, 4, 1, 1]', () => {
    const output = subsetsWithDup([4, 4, 4, 4, 1]);

    expect(output).toHaveLength(10);
    expect(output).toEqual(expect.arrayContaining([
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
    ]))
});