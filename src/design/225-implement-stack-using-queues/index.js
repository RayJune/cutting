/*
 * 225. Implement Stack using Queues
 *
 * Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
 *
 * Implement the MyStack class:
 *
 * void push(int x) Pushes element x to the top of the stack.
 * int pop() Removes the element on the top of the stack and returns it.
 * int top() Returns the element on the top of the stack.
 * boolean empty() Returns true if the stack is empty, false otherwise.
 *
 * Notes:
 *
 * You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
 * Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 *
 * Example 1:
 * ["MyStack", "push", "push", "top", "pop", "empty"]
 * [[], [1], [2], [], [], []]
 * Output
 * [null, null, null, 2, 2, false]
 *
 * Explanation
 * MyStack myStack = new MyStack();
 * myStack.push(1);
 * myStack.push(2);
 * myStack.top(); // return 2
 * myStack.pop(); // return 2
 * myStack.empty(); // return False
 *
 * Constraints:
 * 1 <= x <= 9
 * At most 100 calls will be made to push, pop, top, and empty.
 * All the calls to pop and top are valid.
 *
 * https://leetcode.com/problems/implement-stack-using-queues/
*/

// 因为 JS 里没有 queue 数据结构，这里用 array 来模拟 queue，并加入 queue 的 peek 方法
// 这里没有用箭头函数来写是因为 this 的绑定问题
Array.prototype.peek = function peek() {
    return this[0];
}

// 在 push 操作时，先 push 进去，然后执行 n - 1 次 push(shift) 操作，这样刚 push 进去的就成为第一个要出来的元素
class MyStack {
    #queue = [];

    /**
     * Time Complexity: O(n) = while 循环次数
     * Space complexity: O(n) = this.#queue 的长度
     * Auxiliary complexity: O(1)
     * 其中 n 是栈内元素的个数
     *
     * @param {number} x
     */
    push(x) {
        this.#queue.push(x);
        for (let i = this.#queue.length - 1; i > 0; i--) {
            this.#queue.push(this.#queue.shift());
        }
    }

    /**
     * Time Complexity: O(1)
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     * 其中 n 是栈内元素的个数
     *
     * @returns {number}
     */
    pop() {
        return this.#queue.shift();
    }

    /**
     * Time Complexity: O(1)
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     *
     * @returns {number}
     */
    top() {
        return this.#queue.peek();
    }

    /**
     * Time Complexity: O(1)
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     *
     * @returns {boolean}
     */
    empty() {
        return this.#queue.length === 0;
    }
}

export default MyStack;
