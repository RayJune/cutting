import containsDuplicate from './index';
// import containsDuplicate from './template';
// import containsDuplicate from './template-zh';

test('define containsDuplicate function', () => {
    expect(typeof containsDuplicate).toBe('function');
});

test('nums = nums = [1, 2, 3, 1]', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test('nums = [1, 2, 3, 4]', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test('nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});
