/*
 * 109. Convert Sorted List to Binary Search Tree
 *
 * Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 *
 * Example 1:
 * Input: head = [-10, -3, 0, 5, 9]
 * Output: [0, -3, 9, -10, null, 5]
 * Explanation: One possible answer is [0, -3, 9, -10, null, 5], which represents the shown height balanced BST.
 *
 * Example 2:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 * The number of nodes in head is in the range [0, 2 * 10 ** 4].
 * (-10) ** 5 <= Node.val <= 10 ** 5
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * 先把链表值放在数组里，再把数组转化为 BST
 *
 * Time Complexity: O(n) = while 循环次数 / sortedArrayToBST time complexity
 * Space complexity: O(n) = nums 数组长度 / sortedArrayToBST space complexity
 * Auxiliary complexity: O(n) = sortedArrayToBST auxiliary complexity
 *
 * @param {ListNode} head
 * @returns {TreeNode}
 */
function sortedListToBST(head) {
    const nums = [];

    while (head) {
        nums.push(head.val);
        head = head.next;
    }

    return sortedArrayToBST(nums);
}

/**
 * Time Complexity: O(n) = 函数执行次数
 * Space complexity: O(n) = 函数调用栈深度 / 生成的 BST 中节点个数
 * Auxiliary complexity: O(n) = 函数调用栈深度 / 生成的 BST 中节点个数
 *
 * @param {number[]} nums
 * @returns {TreeNode}
 */
function sortedArrayToBST(nums) {
    if (nums.length === 0) {
        return null;
    }

    const mid = Math.floor(nums.length / 2);

    return new TreeNode(
        nums[mid],
        sortedArrayToBST(nums.slice(0, mid)),
        sortedArrayToBST(nums.slice(mid + 1))
    );
}

module.exports = sortedListToBST;
