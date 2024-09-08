import moveZeroes from './index';
// import moveZeroes from './template';
// import moveZeroes from './template-zh';

test('define moveZeroes function', () => {
    expect(typeof moveZeroes).toBe('function');
});

test('nums = [0, 1, 0, 3 ,12]', () => {
    const nums = [0, 1, 0, 3, 12];

    moveZeroes(nums);

    expect(nums).toEqual([1, 3, 12, 0, 0]);
});

test('nums = [0]', () => {
    const nums = [0];

    moveZeroes(nums);

    expect(nums).toEqual([0]);
});
