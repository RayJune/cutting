import majorityElement from './index';
// import majorityElement from './template';
// import majorityElement from './template-zh';

test('define permute function', () => {
    expect(typeof majorityElement).toBe('function');
});

test('nums = [3, 2, 3]', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
});

test('nums = [2, 2, 1, 1, 1, 2, 2]', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
});
