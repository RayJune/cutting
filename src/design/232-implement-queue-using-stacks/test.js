import MyQueue from './index';
// import MyQueue from './template';
// import MyQueue from './template-zh';

test('define MyQueue class', () => {
    expect(typeof MyQueue).toBe('function');
    expect(/^class/.test(MyQueue.toString())).toBe(true);
});

test('Example 1', () => {
    const queue = new MyQueue();

    queue.push(1);
    queue.push(2);
    expect(queue.peek()).toBe(1);
    expect(queue.pop()).toBe(1);
    expect(queue.empty()).toBe(false);
});
