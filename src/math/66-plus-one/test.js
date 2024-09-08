import plusOne from './index';
// import plusOne from './template';
// import plusOne from './template-zh';

test('define plusOne function', () => {
    expect(typeof plusOne).toBe('function');
});

test('digits = [1, 2, 3]', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});

test('[4, 3, 2, 1]', () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});

test('digits = [0]', () => {
    expect(plusOne([0])).toEqual([1]);
});

test('digits = [9]', () => {
    expect(plusOne([9])).toEqual([1, 0]);
});
