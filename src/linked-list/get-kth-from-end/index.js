/*
 * 剑指 Offer 22. 链表中倒数第 k 个节点
 *
 * 输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。
 *
 * 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
 *
 * Example 1:
 * Input: head = 1->2->3->4->5, k = 2
 * Output: 4->5
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
*/

/**
 * 快慢指针
 *
 * Time Complexity: O(n) = 两个 while 循环加一起的执行次数 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function getKthFromEnd(head, k) {
    let fast = head;
    let slow = head;

    while (fast && k > 0) {
        fast = fast.next;
        k -= 1;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}

module.exports = getKthFromEnd;
