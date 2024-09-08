import searchInsert from './index';
// import searchInsert from './template';
// import searchInsert from './template-zh';

test('define searchInsert function', () => {
    expect(typeof searchInsert).toBe('function');
});

test('nums = [1, 3, 5, 6], target = 5', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test('nums = [1, 3, 5, 6], target = 2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test('nums = [1, 3, 5, 6], target = 7', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});
