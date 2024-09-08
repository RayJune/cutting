import threeSumClosest from './index';
// import threeSumClosest from './template';
// import threeSumClosest from './template-zh';

test('define threeSumClosest function', () => {
    expect(typeof threeSumClosest).toBe('function');
});

test('nums = [-1, 2, 1, -4], target = 1', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
});

test('nums = [1, 1, 1, 1], target = -100', () => {
    expect(threeSumClosest([1, 1, 1, 1], -100)).toBe(3);
});

test('nums = [1, 1, 1, 1], target = 3', () => {
    expect(threeSumClosest([1, 1, 1, 1], 3)).toBe(3);
});

test('nums = [1, 1, -1, -1, 2], target = 1', () => {
    expect(threeSumClosest([1, 1, -1, -1, -1, 2], 1)).toBe(1);
});
