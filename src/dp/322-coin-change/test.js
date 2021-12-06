const coinChange = require('./index');
// const coinChange = require('./template');
// const coinChange = require('./template-zh');

test('define coinChange function', () => {
    expect(typeof coinChange).toBe('function');
});

test('coins = [1, 2, 5], amount = 11', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
});

test('coins = [2], amount = 3', () => {
    expect(coinChange([2], 3)).toBe(-1);
});

test('coins = [1], amount = 0', () => {
    expect(coinChange([1, 0], 0)).toBe(0);
});

test('coins = [1], amount = 1', () => {
    expect(coinChange([1], 1)).toBe(1);
});
