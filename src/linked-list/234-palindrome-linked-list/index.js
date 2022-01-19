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
 * Array + Two Pointers
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(n) = arr 长度
 * Auxiliary complexity: O(n) = arr 长度
 *
 * @param {ListNode} head
 * @returns {boolean}
 */
function isPalindrome(head) {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }

    return true;
}

module.exports = isPalindrome;
