// const containsNearbyAlmostDuplicate = require('./index');
// const containsNearbyAlmostDuplicate = require('./optimize');
const containsNearbyAlmostDuplicate = require('./optimize2');
// const containsNearbyAlmostDuplicate = require('./template');
// const containsNearbyAlmostDuplicate = require('./template-zh');

test('define containsNearbyAlmostDuplicate function', () => {
    expect(typeof containsNearbyAlmostDuplicate).toBe('function');
});

test('nums = [1, 2, 3, 1], k = 3, t = 0', () => {
    expect(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)).toBe(true);
});

test('nums = [1, 0, 1, 1], k = 1, t = 2', () => {
    expect(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)).toBe(true);
});

test('nums = [1, 5, 9, 1, 5, 9], k = 2, t = 3', () => {
    expect(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)).toBe(false);
});

test('nums = [-3, 3, -6], k = 2, t = 3', () => {
    expect(containsNearbyAlmostDuplicate([-3, 3, -6], 2, 3)).toBe(true);
});

test('nums = [0, 5, 0], k = 2, t = 4', () => {
    expect(containsNearbyAlmostDuplicate([0, 5, 0], 2, 4)).toBe(true);
});

test('nums = [7, 1, 3], k = 2, t = 3', () => {
    expect(containsNearbyAlmostDuplicate([7, 1, 3], 2, 3)).toBe(true);
});

test('nums = [3, 6, 0, 2], k = 2, t = 2', () => {
    expect(containsNearbyAlmostDuplicate([3, 6, 0, 2], 2, 2)).toBe(true);
});

test('nums = [3, 6, 0, 2], k = 2, t = 2', () => {
    expect(containsNearbyAlmostDuplicate([49303013, 49311742], 2, 12886)).toBe(true);
});
