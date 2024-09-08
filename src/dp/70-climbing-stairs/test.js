// import climbStairs from './index';
import climbStairs from './optimize';
// import climbStairs from './template';
// import climbStairs from './template-zh';

test('define climbStairs function', () => {
    expect(typeof climbStairs).toBe('function');
});

test('n = 2', () => {
    expect(climbStairs(2)).toBe(2);
});

test('n = 3', () => {
    expect(climbStairs(3)).toBe(3);
});
