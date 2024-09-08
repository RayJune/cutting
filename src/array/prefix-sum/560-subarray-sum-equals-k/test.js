import subarraySum from './index';
// import subarraySum from './template';
// import subarraySum from './template-zh';

test('define subarraySum function', () => {
    expect(typeof subarraySum).toBe('function');
});

test('nums = [1, 1, 1], k = 2', () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2);
});

test('nums = [1, 2, 3], k = 3', () => {
    expect(subarraySum([1, 2, 3], 3)).toBe(2);
});

test('nums = [1, 2, 1, 2, 1], k = 3', () => {
    expect(subarraySum([1, 2, 1, 2, 1], 3)).toBe(4);
});

test('nums = [100, 1, 2, 3, 100, 1, 2, 3, 4], k = 3', () => {
    expect(subarraySum([100, 1, 2, 3, 100, 1, 2, 3, 4], 3)).toBe(4);
});

test('nums = [1, 2, 3, 0], k = 3', () => {
    expect(subarraySum([1, 2, 3, 0], 3)).toBe(3);
});
