/*
 * 234. Palindrome Linked List
 *
 * Given the head of a singly linked list, return true if it is a palindrome.
 *
 * Example 1:
 * Input: head = [1, 2, 2, 1]
 * Output: true
 *
 * Example 2:
 * Input: head = [1, 2]
 * Output: false
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 10^5].
 * 0 <= Node.val <= 9
 *
 * https://leetcode.com/problems/palindrome-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 先用快慢指针找到中间节点，然后把后半段链表反转后与前半段链表相比较，最后把链表恢复为原样
 *
 * Time Complexity: O(n) = 第一个 while 循环次数 O(n / 2) + reverseList O(n / 2) + 第二个 while 循环次数 O(n / 2)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @returns {boolean} result
 */
function isPalindrome(head) {
    const middle = getMiddle(head);
    let result = true;
    let nodeA = head;
    let nodeB = reverseList(middle);
    const headB = nodeB;

    while (nodeB) {
        if (nodeA.val !== nodeB.val) {
            result = false;
            break;
        }
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    reverseList(headB);

    return result;
}

/**
 * 返回链表的中间节点，如果有两个中间节点，返回第二个中间节点
 *
 * @param {ListNode} head
 * @returns {ListNode} slow
 */
function getMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

/**
 * @param {ListNode} head
 * @returns {ListNode} preNode
 */
function reverseList(head) {
    let preNode = null;

    while (head) {
        const nextNode = head.next;

        head.next = preNode;
        preNode = head;
        head = nextNode;
    }

    return preNode;
}

module.exports = isPalindrome;
