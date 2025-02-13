import MyStack from './index';
// import MyStack from './template';
// import MyStack from './template-zh';

test('define MyStack class', () => {
    expect(typeof MyStack).toBe('function');
    expect(/^class/.test(MyStack.toString())).toBe(true);
});

test('Example 1', () => {
    const stack = new MyStack();

    stack.push(1);
    stack.push(2);
    expect(stack.top()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.empty()).toBe(false);
});
