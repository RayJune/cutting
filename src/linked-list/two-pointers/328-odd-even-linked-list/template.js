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

export default oddEvenList;
