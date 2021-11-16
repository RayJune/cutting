/*
 * 148. Sort List
 *
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * Example 1:
 * Input: head = [4, 2, 1, 3]
 * Output: [1, 2, 3, 4]
 *
 * Example 2:
 * Input: head = [-1, 5, 3, 4, 0]
 * Output: [-1, 0, 3, 4, 5]
 *
 * Example 3:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 5 * 10^4].
 * -10^5 <= Node.val <= 10^5
 *
 * https://leetcode.com/problems/sort-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * 自顶向下归并排序
 * 1. 用快慢指针找到中间点，并断开两个链表
 * 2. 对两个子链表进行排序、合并
 *
 * Time Complexity: O(n * log(n)) = 树的层数 log(n) * 每层遍历和 merge 操作 O(n)
 * Space complexity: O(log(n)) = 函数调用栈的深度
 * Auxiliary complexity: O(log(n)) = 函数调用栈的深度
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function sortList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    const preMiddle = getPreMiddle(head);
    const middleNode = preMiddle.next;

    preMiddle.next = null;

    return mergeTwoLists(sortList(head), sortList(middleNode));
}

/**
 * 返回中间节点的前一个节点，如果有两个中间节点，返回第一个中间节点
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function getPreMiddle(head) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

/**
 * 合并两个升序链表
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function mergeTwoLists(l1, l2) {
    const preHead = new ListNode(-1);
    let prevNode = preHead;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prevNode.next = l1;
            l1 = l1.next;
        } else {
            prevNode.next = l2;
            l2 = l2.next;
        }
        prevNode = prevNode.next;
    }
    prevNode.next = l1 === null ? l2 : l1;

    return preHead.next;
}

module.exports = sortList;
