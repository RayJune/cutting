import searchRange from './index';
// import searchRange from './template';
// import searchRange from './template-zh';

test('define searchRange function', () => {
    expect(typeof searchRange).toBe('function');
});

test('nums = [5, 7, 7, 8, 8, 10], target = 8', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
});

test('nums = [5, 7, 7, 8, 8, 10], target = 6', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
});

test('nums = [], target = 0', () => {
    expect(searchRange([], 0)).toEqual([-1, -1]);
});
