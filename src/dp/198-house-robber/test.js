import rob from './index';
// import rob from './template';
// import rob from './template-zh';

test('define rob function', () => {
    expect(typeof rob).toBe('function');
});

test('nums = [1, 2, 3, 1]', () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
});

test('nums = [2, 7, 9, 3, 1]', () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
});

test('nums = [1]', () => {
    expect(rob([1])).toBe(1);
});
