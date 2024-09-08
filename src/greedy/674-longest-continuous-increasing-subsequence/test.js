import findLengthOfLCIS from './index';
// import findLengthOfLCIS from './template';
// import findLengthOfLCIS from './template-zh';

test('define findLengthOfLCIS function', () => {
    expect(typeof findLengthOfLCIS).toBe('function');
});

test('nums = [1, 3, 5, 4, 7]', () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
});

test('nums = [2, 2, 2, 2, 2]', () => {
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
});
