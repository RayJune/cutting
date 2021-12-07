// const climbStairs = require('./index');
const climbStairs = require('./optimize');
// const climbStairs = require('./template');
// const climbStairs = require('./template-zh');

test('define climbStairs function', () => {
    expect(typeof climbStairs).toBe('function');
});

test('n = 2', () => {
    expect(climbStairs(2)).toBe(2);
});

test('n = 3', () => {
    expect(climbStairs(3)).toBe(3);
});
