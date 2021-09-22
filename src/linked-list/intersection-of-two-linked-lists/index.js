/*
 * 160. Intersection of Two Linked Lists
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
 * The number of nodes in the list is in the range [1, 105].
 * 0 <= Node.val <= 9
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
 * 用哈希表来做
 *
 * Time Complexity: O(m + n) = 第一次 while 循环 O(m) + 第二次 while 循环 O(n)
 * Space complexity: O(m) = map 的长度
 * Auxiliary complexity: O(m) = map 的长度
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @returns {ListNode|null}
 */
function getIntersectionNode(headA, headB) {
    const map = new Map();
    let node = headA;

    while (node) {
        map.set(node, true);
        node = node.next;
    }
    node = headB;
    while (node) {
        if (map.get(node)) {
            return node;
        }
        node = node.next;
    }

    return null;
}

module.exports = getIntersectionNode;
