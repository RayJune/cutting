import threeSum from './index';
// import threeSum from './template';
// import threeSum from './template-zh';

test('define threeSum function', () => {
    expect(typeof threeSum).toBe('function');
});

test('nums = []', () => {
    expect(threeSum([])).toEqual([]);
});

test('nums = [0]', () => {
    expect(threeSum([0])).toEqual([]);
});

test('nums = [0, -2, 2]', () => {
    expect(threeSum([0, -2, 2])).toEqual([[-2, 0, 2]]);
});

test('nums = [-1, 0, 1, 2, -1, -4]', () => {
    const indexArr = threeSum([-1, 0, 1, 2, -1, -4]);

    expect(indexArr).toHaveLength(2);
    expect(indexArr).toEqual(expect.arrayContaining([
        [-1, -1, 2],
        [-1, 0, 1]
    ]));
});

test('nums = [-1, 0, 1, 1, 1, 2, -1, -1, -4]', () => {
    const indexArr = threeSum([-1, 0, 1, 1, 1, 2, -1, -1, -4]);

    expect(indexArr).toHaveLength(2);
    expect(indexArr).toEqual(expect.arrayContaining([
        [-1, -1, 2],
        [-1, 0, 1]
    ]));
});