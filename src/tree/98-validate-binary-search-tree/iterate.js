/*
 * 98. Validate Binary Search Tree
 *
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 * Input: root = [2, 1, 3]
 * Output: true
 *
 * Example 2:
 * Input: root = [5, 1, 4, null, null, 3, 6]
 * Output: false
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10 ** 4].
 * (-2) ** 31 <= Node.val <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/validate-binary-search-tree/
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
 * Inorder Traversal
 *
 * Time Complexity: O(n) = while 循环次数
 * Space complexity: O(n) = stack 长度
 * Auxiliary complexity: O(n) = stack 长度
 *
 * @param {TreeNode} root
 * @returns {boolean}
 */
function isValidBST(root) {
    if (root === null) {
        return true;
    }

    const stack = [];
    let prevValue = -Infinity;

    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (prevValue >= root.val) {
            return false;
        }
        prevValue = root.val;
        root = root.right;
    }

    return true;
}

module.exports = isValidBST;
