/*
 * 147. Insertion Sort List
 *
 * Given the head of a linked list, return the list after sorting it in ascending order.
 *
 * The steps of the insertion sort algorithm:
 *
 * Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
 * At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
 * It repeats until no input elements remain.
 *
 * Example 1:
 * Input: head = [4, 2, 1, 3]
 * Output: [1, 2, 3, 4]
 *
 * Example 2:
 * Input: head = [-1, 5, 3, 4, 0]
 * Output: [-1, 0, 3, 4, 5]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 5000].
 * -5000 <= Node.val <= 5000
 *
 * https://leetcode.com/problems/insertion-sort-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

module.exports = insertionSortList;
