import findMin from './index';
// import findMin from './template';
// import findMin from './template-zh';

test('define findMin function', () => {
    expect(typeof findMin).toBe('function');
});

test('nums = [3, 4, 5, 1, 2]', () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
});

test('nums = [4, 5, 6, 7, 0, 1, 2]', () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
});

test('nums = [11, 13, 15, 17]', () => {
    expect(findMin([11, 13, 15, 17])).toBe(11);
});
