import jump from './index';
// import jump from './template';
// import jump from './template-zh';

test('define jump function', () => {
    expect(typeof jump).toBe('function');
});

test('nums = [2, 3, 1, 1, 4]', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
});

test('[2, 3, 0, 1, 4]', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
});
