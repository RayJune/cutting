import change from './index';
// import change from './template';
// import change from './template-zh';

test('define change function', () => {
    expect(typeof change).toBe('function');
});

test('amount = 5, coins = [1, 2, 5]', () => {
    expect(change(5, [1, 2, 5])).toBe(4);
});

test('amount = 3, coins = [2]', () => {
    expect(change(3, [2])).toBe(0);
});

test('amount = 10, coins = [10]', () => {
    expect(change(10, [10])).toBe(1);
});
