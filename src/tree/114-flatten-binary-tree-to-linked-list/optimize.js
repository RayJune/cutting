/*
 * 114. flatten List
 *
 * Given the root of a binary tree, flatten the tree into a "linked list":
 *
 * The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
 * The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 *
 * Example 1:
 * Input: root = [1, 2, 5, 3, 4, null, 6]
 * Output: [1, null, 2, null, 3, null, 4, null, 5, null, 6]
 *
 * Example 2:
 * Input: root = []
 * Output: []
 *
 * Example 3:
 * Input: root = [0]
 * Output: [0]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 在进行二叉树的前序遍历的同时，进行展开为单链表的操作
 *
 * Time Complexity: O(n) = 前序遍历 O(n)
 * Space complexity: O(n) = stack 长度 O(n)
 * Auxiliary complexity: O(n) = stack 长度 O(n)
 *
 * @param {TreeNode} root
 */
function flatten(root) {
    if (root) {
        const stack = [root];
        let preNode = null;

        while (stack.length) {
            const node = stack.pop();

            if (preNode) {
                preNode.left = null;
                preNode.right = node;
            }
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
            preNode = node;
        }
    }
}

module.exports = flatten;
