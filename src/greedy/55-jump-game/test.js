import canJump from './index';
// import canJump from './template';
// import canJump from './template-zh';

test('define canJump function', () => {
    expect(typeof canJump).toBe('function');
});

test('nums = [2, 3, 1, 1, 4]', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
});

test('nums = [3, 2, 1, 0, 4]', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
});
