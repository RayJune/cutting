import sortColors from './index';
// import sortColors from './template';
// import sortColors from './template-zh';

test('define sortColors function', () => {
    expect(typeof sortColors).toBe('function');
});

test('nums = [2, 0, 2, 1, 1, 0]', () => {
    const nums = [2, 0, 2, 1, 1, 0];

    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
});

test('nums = [2, 0, 1]', () => {
    const nums = [2, 0, 1];

    sortColors(nums);
    expect(nums).toEqual([0, 1, 2]);
});
