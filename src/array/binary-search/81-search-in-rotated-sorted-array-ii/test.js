import search from './index';
// import search from './template';
// import search from './template-zh';

test('define search function', () => {
    expect(typeof search).toBe('function');
});

test('nums = [2, 5, 6, 0, 0, 1, 2], target = 0', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toBe(true);
});

test('nums = [2, 5, 6, 0, 0, 1, 2], target = 3', () => {
    expect(search([2, 5, 6, 0, 0, 1], 3)).toBe(false);
});

test('nums = [3, 1, 2, 3, 3], target = 1', () => {
    expect(search([3, 1, 2, 3, 3], 1)).toBe(true);
});

test('nums = [3, 1, 2, 3, 3], target = 1', () => {
    expect(search([3, 3, 1, 2, 3], 2)).toBe(true);
});
