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
 * Recursion
 *
 * Time Complexity: O(n) = 函数执行次数
 * Space Complexity: O(n) = 函数调用栈深度
 * Auxiliary Complexity: O(n) = 函数调用栈深度
 * 其中 n 为以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @param {number} [low=-Infinity]
 * @param {number} [high=Infinity]
 * @returns {boolean}
 */
function isValidBST(root, low = -Infinity, high = Infinity) {
    if (root === null) {
        return true;
    }

    const {left, right, val} = root;

    if (val <= low || val >= high) {
        return false;
    }

    return isValidBST(left, low, val) && isValidBST(right, val, high);
}

export default isValidBST;
