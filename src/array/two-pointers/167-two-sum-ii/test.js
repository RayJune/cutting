import twoSum from './index';
// import twoSum from './template';
// import twoSum from './template-zh';

test('define twoSum function', () => {
    expect(typeof twoSum).toBe('function');
});

test('nums = [2, 7, 11, 15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
});

test('nums = [2, 3, 4], target = 6', () => {

    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
});

test('nums = [-1, 0], target = -1', () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
});

test('nums = [3, 3], target = 7', () => {
    expect(twoSum([3, 3], 7)).toEqual([]);
});
