// import singleNumber from './index';
import singleNumber from './optimize';
// import singleNumber from './template';
// import singleNumber from './template-zh';

test('define singleNumber function', () => {
    expect(typeof singleNumber).toBe('function');
});

test('nums = [2, 2, 1]', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
});

test('nums = [4, 1, 2, 1, 2]', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});

test('nums = [1]', () => {
    expect(singleNumber([1])).toBe(1);
});
