/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    /**
     * @param {string} val
     * @param {ListNode} node
     */
    constructor(val = undefined, node = null) {
        this.val = val;
        this.next = node;
    }
}

module.exports = ListNode;