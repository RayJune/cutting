/*
 * 160. Intersection of Two Linked Lists
 *
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
 * If the two linked lists have no intersection at all, return null.
 *
 * Note that the linked lists must retain their original structure after the function returns.
 *
 * Example 1:
 * Input: intersectVal = 8, listA = [4, 1, 8, 4, 5], listB = [5, 6, 1, 8, 4, 5], skipA = 2, skipB = 3
 * Output: Intersected at '8'
 *
 * Example 2:
 * intersectVal = 2, listA = [1, 9, 1, 2, 4], listB = [3, 2, 4], skipA = 3, skipB = 1
 * Output: Intersected at '2'
 *
 * Example 3:
 * Input: intersectVal = 0, listA = [2, 6, 4], listB = [1, 5], skipA = 3, skipB = 2
 * Output: No intersection
 *
 * Constraints:
 *
 * The number of nodes of listA is in the m.
 * The number of nodes of listB is in the n.
 * 0 <= m, n <= 3 * 104
 * 1 <= Node.val <= 105
 * 0 <= skipA <= m
 * 0 <= skipB <= n
 * intersectVal is 0 if listA and listB do not intersect.
 * intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.
 *
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 *
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 用双指针来做
 *
 * Time Complexity: O(m + n) = while 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @returns {ListNode}
 */
function getIntersectionNode(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }

    let nodeA = headA;
    let nodeB = headB;

    while (nodeA !== nodeB) {
        nodeA = nodeA ? nodeA.next : headB;
        nodeB = nodeB ? nodeB.next : headA;
    }

    return nodeA;
}

module.exports = getIntersectionNode;
