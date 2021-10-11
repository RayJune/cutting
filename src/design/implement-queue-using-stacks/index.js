/*
 * 232. Implement Queue using Stacks
 *
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 *
 * Implement the MyQueue class:
 *
 * void push(int x) Pushes element x to the back of the queue.
 * int pop() Removes the element from the front of the queue and returns it.
 * int peek() Returns the element at the front of the queue.
 * boolean empty() Returns true if the queue is empty, false otherwise.
 *
 * Notes:
 *
 * You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
 * Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 *
 * Example 1:
 * Input
 * ["MyQueue", "push", "push", "peek", "pop", "empty"]
 * [[], [1], [2], [], [], []]
 * Output
 * [null, null, null, 1, 1, false]
 *
 * Explanation
 * MyQueue myQueue = new MyQueue();
 * myQueue.push(1); // queue is: [1]
 * myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
 * myQueue.peek(); // return 1
 * myQueue.pop(); // return 1, queue is [2]
 * myQueue.empty(); // return false
 *
 * Constraints:
 *
 * 1 <= x <= 9
 * At most 100 calls will be made to push, pop, peek, and empty.
 * All the calls to pop and peek are valid.
 *
 * https://leetcode.com/problems/implement-queue-using-stacks/
*/

class MyQueue {
    #stack1 = [];
    #stack2 = [];

    /**
     * Time Complexity: O(1)
     * Space complexity: O(n) = #stack1 的长度
     * Auxiliary complexity: O(1)
     * n 代表 stack 的长度
     *
     * @param {number} x
     */
    push(x) {
        this.#stack1.push(x);
    }

    /**
     * Time Complexity: O(n) = 均摊时间复杂度 O(1), 最坏情况下 O(n)
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     * n 代表 stack 的长度
     *
     * @returns {number}
     */
    pop() {
        if (this.#stack2.length === 0) {
            while (this.#stack1.length) {
                this.#stack2.push(this.#stack1.pop());
            }
        }

        return this.#stack2.pop();
    }

    /**
     * Time Complexity: O(1)
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     *
     * @returns {number}
     */
    peek() {
        const item = this.pop();

        this.#stack2.push(item);

        return item;
    }

    /**
     * Time Complexity: O(1)
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     *
     * @returns {boolean}
     */
    empty() {
        return !this.#stack1.length && !this.#stack2.length;
    }
}

module.exports = MyQueue;
