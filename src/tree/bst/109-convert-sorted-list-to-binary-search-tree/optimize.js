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
 * Inorder Simulation
 *
 * Time Complexity: O(n) = while 循环次数 / convertListToBST 函数执行次数
 * Space complexity: O(n) = 创建的 BST 节点数 O(n) + convertListToBST 函数调用栈深度 O(log(n))
 * Auxiliary complexity: O(log(n)) = convertListToBST 函数调用栈深度
 *
 * @param {ListNode} head
 * @returns {TreeNode}
 */
function sortedListToBST(head) {
    if (head === null) {
        return null;
    }

    let size = 0;
    let node = head;

    while (node) {
        node = node.next;
        size += 1;
    }

    const convertListToBST = (start, end) => {
        if (start > end) {
            return null;
        }

        const mid = start + Math.ceil((end - start) / 2);
        const left = convertListToBST(start, mid - 1);
        const node = new TreeNode(head.val, left);

        head = head.next;
        node.right = convertListToBST(mid + 1, end);

        return node;
    }

    return convertListToBST(0, size - 1);
}

export default sortedListToBST;
