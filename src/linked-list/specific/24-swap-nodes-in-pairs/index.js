/*
 * 24. Swap Nodes in Pairs
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 *
 * Example 1:
 * Input: head = [1, 2, 3, 4]
 * Output: [2, 1, 4, 3]
 *
 * Example 2:
 * Input: head = []
 * Output: []
 *
 * Example 3:
 * Input: head = [1]
 * Output: [1]
 *
 * Constraints:
 * The number of nodes in the list is in the range [0, 100].
 * 0 <= Node.val <= 100
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * 注意交换节点的时候不要生成环，可以画图判断一下操作步骤是否正确
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function swapPairs(head) {
    const preHead = new ListNode(-1, head);
    let prevNode = preHead;
    let node = head;

    while (node && node.next) {
        const nextNode = node.next;

        prevNode.next = nextNode;
        node.next = node.next.next;
        nextNode.next = node;
        prevNode = node;
        node = node.next;
    }

    return preHead.next;
}

export default swapPairs;
