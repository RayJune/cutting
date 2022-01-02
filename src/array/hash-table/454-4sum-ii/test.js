const fourSumCount = require('./index');
// const fourSumCount = require('./template');
// const fourSumCount = require('./template-zh');

test('define fourSumCount function', () => {
    expect(typeof fourSumCount).toBe('function');
});

test('nums1 = [1, 2], nums2 = [-2, -1], nums3 = [-1, 2], nums4 = [0, 2]', () => {
    expect(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])).toBe(2);
});

test('nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]', () => {
    expect(fourSumCount([0], [0], [0], [0])).toBe(1);
});
