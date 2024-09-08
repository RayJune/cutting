import fourSum from './index';
// import fourSum from './template';
// import fourSum from './template-zh';

test('define fourSum function', () => {
    expect(typeof fourSum).toBe('function');
});

test('nums = [2], target = 1', () => {
    expect(fourSum([2], 1)).toEqual([]);
});

test('nums = [2, 2, 2, 2, 2], target = 8', () => {
    expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
})

test('nums = [1, 2, 2, 2, 2], target = 8', () => {
    expect(fourSum([1, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
})

test('nums = [1, 0, -1, 0, -2, 2], target = 0', () => {
    const result = fourSum([1, 0, -1, 0, -2, 2], 0);

    expect(result).toHaveLength(3);
    expect(result).toEqual(expect.arrayContaining([
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1]
    ]));
});

test('nums = [-1, -1, 0, 0, 1, 1], target = 0', () => {
    const result = fourSum([-2, -2, -1, -1, 1, 1, 2, 2], 0);

    expect(result).toHaveLength(3);
    expect(result).toEqual(expect.arrayContaining([
        [-2, -2, 2, 2],
        [-1, -1, 1, 1],
        [-2, -1, 1, 2]
    ]));
});
