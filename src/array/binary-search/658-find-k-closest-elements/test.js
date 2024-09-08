import findClosestElements from './index';
// import findClosestElements from './template';
// import findClosestElements from './template-zh';

test('define findClosestElements function', () => {
    expect(typeof findClosestElements).toBe('function');
});

test('arr = [1, 2, 3, 4, 5], k = 4, x = 3', () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4]);
});

test('arr = [1, 2, 3, 4, 5], k = 4, x = -1', () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4]);
});

test('arr = [0, 0, 0, 1, 1], k = 2, x = 1', () => {
    expect(findClosestElements([0, 0, 0, 1, 1], 2, 1)).toEqual([1, 1]);
});
