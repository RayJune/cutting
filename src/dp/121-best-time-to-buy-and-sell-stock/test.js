const maxProfit = require('./index');
// const maxProfit = require('./template');
// const maxProfit = require('./template-zh');

test('define maxProfit function', () => {
    expect(typeof maxProfit).toBe('function');
});

test('prices = [7, 1, 5, 3, 6, 4]', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test('prices = [7, 6, 4, 3, 1]', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});
