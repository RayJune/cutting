/*
 * 92. Reverse Linked List II
 *
 * Given the head of a singly linked list and two integers left and right where left <= right,
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4, 5], left = 2, right = 4
 * Output: [1, 4, 3, 2, 5]
 *
 * Example 2:
 * Input: head = [5], left = 1, right = 1
 * Output: [5]
 *
 * Constraints:
 *
 * The number of nodes in the list is n.
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * 1 <= left <= right <= n
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/
 *
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    /**
     * @param {number} val
     * @param {ListNode} next
     */
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * 用 array 辅助来做
 *
 * Time Complexity: O(n) = while 循环次数 O(n) + 数组操作 O(n)
 * Space complexity: O(n) = arr 长度 O(n) + 新创建的 listNode 长度 O(n)
 * Auxiliary complexity: O(n) = arr 长度 O(n) + 新创建的 listNode 长度 O(n)
 * n 代表输入参数 head 链表的长度
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @returns {ListNode}
 */
function reverseBetween(head, left, right) {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    const reversedArr = arr.slice(left - 1, right).reverse();
    const newArr = [...arr.slice(0, left - 1), ...reversedArr, ...arr.slice(right)];

    return buildListNode(newArr);
}

/**
 *
 * @param {Array} arr
 * @returns {ListNode}
 */
function buildListNode(arr) {
    let preHead = new ListNode();
    let preNode = preHead;

    arr.forEach(num => {
        preNode.next = new ListNode(num);
        preNode = preNode.next;
    });

    return preHead.next;
}

module.exports = reverseBetween;
