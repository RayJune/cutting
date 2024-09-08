import rob from './index';
// import rob from './template';
// import rob from './template-zh';

test('define rob function', () => {
    expect(typeof rob).toBe('function');
});

test('nums = [2, 3, 2]', () => {
    expect(rob([2, 3, 2])).toEqual(3);
});

test('nums = [1, 2, 3, 1]', () => {
    expect(rob([1, 2, 3, 1])).toEqual(4);
});

test('nums = [1, 2, 3]', () => {
    expect(rob([1, 2, 3])).toEqual(3);
});

test('nums = [1]', () => {
    expect(rob([1])).toEqual(1);
});

test('nums = [1, 2]', () => {
    expect(rob([1, 2])).toEqual(2);
});
