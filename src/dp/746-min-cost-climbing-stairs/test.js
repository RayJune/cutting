// import minCostClimbingStairs from './index';
import minCostClimbingStairs from './optimize';
// import minCostClimbingStairs from './template';
// import minCostClimbingStairs from './template-zh';

test('define minCostClimbingStairs function', () => {
    expect(typeof minCostClimbingStairs).toBe('function');
});

test('cost = [10, 15, 20]', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
});

test('cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]', () => {
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
});
