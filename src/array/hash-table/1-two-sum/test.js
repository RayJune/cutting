import twoSum from './index';
// import twoSum from './template';
// import twoSum from './template-zh';

test('define twoSum function', () => {
    expect(typeof twoSum).toBe('function');
});

test('nums = [2, 7, 11, 15], target = 9', () => {
    const indexArr = twoSum([2, 7, 11, 15], 9);

    expect(indexArr).toHaveLength(2);
    expect(indexArr).toEqual(expect.arrayContaining([0, 1]))
});

test('nums = [3, 2, 4], target = 6', () => {
    const indexArr = twoSum([3, 2, 4], 6);

    expect(indexArr).toHaveLength(2);
    expect(indexArr).toEqual(expect.arrayContaining([1, 2]));
});

test('nums = [3, 3], target = 6', () => {
    const indexArr = twoSum([3, 3], 6);

    expect(indexArr).toHaveLength(2);
    expect(indexArr).toEqual(expect.arrayContaining([0, 1]));
});

test('nums = [3, 3], target = 7', () => {
    const indexArr = twoSum([3, 3], 7);

    expect(indexArr).toHaveLength(0);
    expect(indexArr).toEqual(expect.arrayContaining([]));
});

test('nums = [3, 3, 0], target = 3', () => {
    const indexArr = twoSum([3, 3, 0], 3);

    expect(indexArr).toHaveLength(2);
    expect(indexArr).toEqual(expect.arrayContaining([1, 2]));
});
