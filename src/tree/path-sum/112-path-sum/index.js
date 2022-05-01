/*
 * 112. Path Sum
 *
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 *
 * A leaf is a node with no children.
 *
 * Example 1:
 * Input: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum = 22
 * Output: true
 *
 * Example 2:
 * Input: root = [1, 2, 3], targetSum = 5
 * Output: false
 *
 * Example 3:
 * Input: root = [1, 2], targetSum = 0
 * Output: false
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 *
 * https://leetcode.com/problems/path-sum/
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
 * Space Complexity: O(n) = 函数调用栈深度（最坏情况下，树呈现链状，空间复杂度为 O(n)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(log n)）
 * Auxiliary Complexity: O(n) = 函数调用栈深度
 * 其中 n 为以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
    if (root === null) {
        return false;
    }

    const {val, left, right} = root;

    targetSum -= val;
    if (left === null && right === null) {
        return targetSum === 0;
    }

    return hasPathSum(left, targetSum) || hasPathSum(right, targetSum);
}

module.exports = hasPathSum;
