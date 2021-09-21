/*
 * 138. Copy List with Random pointer
 *
 * A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
 *
 * Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
 *
 * For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
 *
 * Return the head of the copied linked list.
 *
 * The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
 * val: an integer representing Node.val
 * random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
 *
 * Your code will only be given the head of the original linked list.
 *
 * Example 1:
 * Input: head = [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
 * Output: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
 *
 * Example 2:
 * Input: head = [[1, 1], [2, 1]]
 * Output: [[1, 1], [2, 1]]
 *
 * Example 3:
 * Input: head = [[3, null], [3, 0], [3, null]]
 * Output: [[3, null], [3, 0], [3, null]]
 *
 * Example 4:
 * Input: head = []
 * Output: []
 * Explanation: The given linked list is empty (null pointer), so return null.
 *
 * Constraints:
 *
 * 0 <= n <= 1000
 * -10000 <= Node.val <= 10000
 * Node.random is null or is pointing to some node in the linked list.
 *
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 *
*/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
class Node {
    /**
     * @param {number} val
     * @param {Node} next
     * @param {Node} random
     */
    constructor(val, next, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

/**
 * 用递归来做，优化空间复杂度
 * 1. 构建链表 a -> a' -> b -> b' -> c -> c'，并给 a', b', c' 的 next 赋值
 * 2. 给 a', b', c' 的 random 赋值
 * 3. 拆分出 a' -> b' -> c'
 *
 * Time Complexity: O(n) = 三次 for 循环遍历次数 O(3n)
 * Space complexity: O(n) = 输出值 O(3n)
 * Auxiliary complexity: O(1)
 *
 * @param {Node} head
 * @returns {Node} newHead
 */
function copyRandomList(head) {
    for (let node = head; node !== null; node = node.next.next) {
        node.next = new Node(node.val, node.next);
    }

    const newHead = head ? head.next : null;

    for (let node = head; node !== null; node = node.next.next) {
        const newNode = node.next;

        newNode.random = (node.random !== null) ? node.random.next : null;
    }
    for (let node = head; node !== null; node = node.next) {
        const newNode = node.next;

        node.next = node.next.next;
        newNode.next = (newNode.next !== null) ? newNode.next.next : null;
    }

    return newHead;
}

module.exports = copyRandomList;
