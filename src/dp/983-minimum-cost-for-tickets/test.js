import mincostTickets from './index';
// import mincostTickets from './template';
// import mincostTickets from './template-zh';

test('define mincostTickets function', () => {
    expect(typeof mincostTickets).toBe('function');
});

test('days = [1, 4, 6, 7, 8, 20], costs = [2, 7, 15]', () => {
    const days = [1, 4, 6, 7, 8, 20];
    const costs = [2, 7, 15];

    expect(mincostTickets(days, costs)).toBe(11);
});

test('days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], costs = [2, 7, 15]', () => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31];
    const costs = [2, 7, 15];

    expect(mincostTickets(days, costs)).toBe(17);
});
