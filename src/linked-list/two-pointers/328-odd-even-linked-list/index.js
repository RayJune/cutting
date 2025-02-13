/*
 * 328. Odd Even Linked List
 *
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
 *
 * The first node is considered odd, and the second node is even, and so on.
 *
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 *
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4, 5]
 * Output: [1, 3, 5, 2, 4]
 *
 * Example 2:
 * Input: head = [2, 1, 3, 5, 6, 4, 7]
 * Output: [2, 3, 6, 7, 1, 5, 4]
 *
 * Constraints:
 * n == number of nodes in the linked list
 * 0 <= n <= 10 ** 4
 * (-10) ** 6 <= Node.val <= 10 ** 6
 *
 * https://leetcode.com/problems/odd-even-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Two Pointers
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 head 作为头节点的链表的节点数
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function oddEvenList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let odd = head;
    let even = head.next;
    const evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;

    return head;
}

export default oddEvenList;
