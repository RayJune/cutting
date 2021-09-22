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
 * The number of nodes in the list is in the range [1, 105].
 * 0 <= Node.val <= 9
 *
 * https://leetcode.com/problems/palindrome-linked-list/
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
 * 用 arr 来做
 *
 * Time Complexity: O(n) = while 循环次数 O(n) + join 方法 O(n) + reverse 方法 O(n) + join 方法 O(n)
 * Space complexity: O(n) = arr 长度 O(n)
 * Auxiliary complexity: O(n) = arr 长度 O(n)
 *
 * @param {ListNode} head
 * @returns {boolean}
 */
function isPalindrome(head) {
    let node = head;
    const arr = [];

    while (node) {
        arr.push(node.val);
        node = node.next;
    }

    return arr.join('') === arr.reverse().join('');
}

module.exports = isPalindrome;
