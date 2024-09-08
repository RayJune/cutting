// import merge from './index';
import merge from './optimize';
// import merge from './template';
// import merge from './template-zh';

test('define merge function', () => {
    expect(typeof merge).toEqual('function');
});

test('nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];

    merge(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test('nums1 = [1], m = 1, nums2 = [], n = 0', () => {
    const nums1 = [1];

    merge(nums1, 1, [], 0);
    expect(nums1).toEqual([1]);
});

test('nums1 = [0], m = 0, nums2 = [1], n = 1', () => {
    const nums1 = [0];

    merge(nums1, 0, [1], 1);
    expect(nums1).toEqual([1]);
});
