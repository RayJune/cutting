import addToArrayForm from './index';
// import addToArrayForm from './template';
// import addToArrayForm from './template-zh';

test('define addToArrayForm function', () => {
    expect(typeof addToArrayForm).toBe('function');
});

test('num = [1, 2, 0, 0], k = 34', () => {
    expect(addToArrayForm([1, 2, 0, 0], 34)).toEqual([1, 2, 3, 4]);
});

test('num = [2, 7, 4], k = 181', () => {
    expect(addToArrayForm([2, 7, 4], 181)).toEqual([4, 5, 5]);
});

test('num = [2, 1, 5], k = 806', () => {
    expect(addToArrayForm([2, 1, 5], 806)).toEqual([1, 0, 2, 1]);
});

test('num = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], k = 1', () => {
    expect(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1)).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});
