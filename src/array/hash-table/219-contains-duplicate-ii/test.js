// import containsNearbyDuplicate from './index';
import containsNearbyDuplicate from './optimize';
// import containsNearbyDuplicate from './template';
// import containsNearbyDuplicate from './template-zh';

test('define containsNearbyDuplicate function', () => {
    expect(typeof containsNearbyDuplicate).toBe('function');
});

test('nums = [1, 2, 3, 1], k = 3', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
});

test('nums = [1, 0, 1, 1], k = 1', () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
});

test('nums = [1, 2, 3, 1, 2, 3], k = 2', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
});
