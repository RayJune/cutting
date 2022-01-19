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
 * The number of nodes in the list is in the range [1, 10 ** 5].
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
 * Time Complexity: O(n) = 遍历次数 / reverseList
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @returns {boolean}
 */
function isPalindrome(head) {
    const mid = getMid(head);
    let nodeA = head;
    let nodeB = reverseList(mid);
    const headB = nodeB;

    while (nodeB) {
        if (nodeA.val !== nodeB.val) {
            reverseList(headB);

            return false;
        }
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    reverseList(headB);

    return true;
}

/**
 * 返回链表的中间节点，如果有两个中间节点，返回第二个中间节点
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function getMid(head) {
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
 * @returns {ListNode}
 */
function reverseList(head) {
    let prevNode = null;

    while (head) {
        const nextNode = head.next;

        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }

    return prevNode;
}

module.exports = isPalindrome;
