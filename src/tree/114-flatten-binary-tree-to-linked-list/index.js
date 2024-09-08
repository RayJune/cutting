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
 * 利用二叉树的前序遍历来做
 *
 * Time Complexity: O(n) = 前序遍历 O(n) + for 循环 O(n)
 * Space complexity: O(n) = 前序遍历函数调用栈深度 O(n)
 * Auxiliary complexity: O(n) = 前序遍历函数调用栈深度 O(n)
 *
 * @param {TreeNode} root
 */
function flatten(root) {
    const list = preorderTraversal(root);
    const len = list.length;

    for (let i = 1; i < len; i++) {
        list[i - 1].left = null;
        list[i - 1].right = list[i];
    }
}

/**
 * @param {TreeNode} root
 * @param {number[]} result
 * @returns {number[]}
 */
function preorderTraversal(root, result = []) {
    if (root) {
        result.push(root);
        preorderTraversal(root.left, result);
        preorderTraversal(root.right, result);
    }

    return result;
}

export default flatten;
