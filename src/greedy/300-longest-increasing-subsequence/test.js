// import lengthOfLIS from './index';
import lengthOfLIS from './optimize';
// import lengthOfLIS from './template';
// import lengthOfLIS from './template-zh';

test('define lengthOfLIS function', () => {
    expect(typeof lengthOfLIS).toBe('function');
});

test('nums = [10, 9, 2, 5, 3, 7, 101, 18]', () => {
    const nums = [10, 9, 2, 5, 3, 7, 101, 18];

    expect(lengthOfLIS(nums)).toBe(4);
});

test('nums = [0, 1, 0, 3, 2, 3]', () => {
    const nums = [0, 1, 0, 3, 2, 3];

    expect(lengthOfLIS(nums)).toBe(4);
});

test('nums = [7, 7, 7, 7, 7, 7, 7]', () => {
    const nums = [7, 7, 7, 7, 7, 7, 7];

    expect(lengthOfLIS(nums)).toBe(1);
});

test('nums = [1, 3, 6, 7, 9, 4, 10, 5, 6]', () => {
    const nums = [1, 3, 6, 7, 9, 4, 10, 5, 6];

    expect(lengthOfLIS(nums)).toBe(6);
});
