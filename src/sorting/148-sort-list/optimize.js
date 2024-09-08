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
 * The number of nodes in the list is in the range [0, 5 * 10 ** 4].
 * (-10) ** 5 <= Node.val <= (10) ** 5
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
 * 自底向上归并排序
 * 1. 初始化子链表长度为 1，然后每次将链表拆分为若干个同样长度的子链表
 * 2. 按照每两个子链表一组进行排序合并，子链表长度 * 2
 * 3. 重复步骤 1 -> 步骤 2 的操作，直到子链表长度等于链表的长度
 *
 * Time Complexity: O(n * log(n)) = 树的层数 log(n) * 每层遍历和 merge 操作 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function sortList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    const len = getListLength(head);
    const preHead = new ListNode(-1, head);
    let subLen = 1;

    while (subLen < len) {
        let preNode = preHead;
        let node = preHead.next;

        while (node) {
            const l1 = node;

            for (let i = 1; i < subLen && node.next; i++) {
                node = node.next;
            }
            if (node.next) {
                const tail1 = node;
                const l2 = node.next;

                node.next = null;
                node = l2;
                for (let i = 1; i < subLen && node && node.next; i++) {
                    node = node.next;
                }

                const tail2 = node;
                const nextNode = node.next;

                node.next = null;
                preNode.next = mergeTwoLists(l1, l2);
                preNode = tail1.val > tail2.val ? tail1 : tail2;
                node = nextNode;
            } else {
                preNode.next = l1;
                node = node.next;
            }
        }
        subLen *= 2
    }

    return preHead.next;
}

/**
 * @param {ListNode} head
 * @returns {number}
 */
function getListLength(head) {
    let length = 0;
    let node = head;

    while (node) {
        length += 1;
        node = node.next;
    }

    return length;
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

    while (l1 && l2) {
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

export default sortList;
