import solution from './index';
// import solution from './template';
// import solution from './template-zh';

test('define solution function', () => {
    expect(typeof solution).toBe('function');
});

test('n = 5, bad = 4', () => {
    const isBadVersion = n => [4, 5].indexOf(n) !== -1;
    const firstBadVersion = solution(isBadVersion);

    expect(firstBadVersion(5)).toBe(4);
});

test('n = 1, bad = 1', () => {
    const isBadVersion = n => [1].indexOf(n) !== -1;
    const firstBadVersion = solution(isBadVersion);

    expect(firstBadVersion(1)).toBe(1);
});
