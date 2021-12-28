/*
 * 437. Path Sum III
 *
 * Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
 *
 * The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
 *
 * Example 1:
 * Input: root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], targetSum = 8
 * Output: 3
 *
 * Example 2:
 * Input: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22
 * Output: 3
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 1000].
 * (-10) ** 9 <= Node.val <= 10 ** 9
 * -1000 <= targetSum <= 1000
 *
 * https://leetcode.com/problems/path-sum-iii/
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
 * 前序遍历每一个节点，然后检测以这个节点为起始且向下延伸的路径有多少种
 *
 * Time Complexity: O(n^2) = pathSum 函数执行次数 O(n) * rootSum 函数执行次数 O(n)
 * Space complexity: O(n) = pathSum 函数调用栈深度 O(n) + rootSum 函数调用栈深度 O(n)
 * Auxiliary complexity: O(n) = pathSum 函数调用栈深度 O(n) + rootSum 函数调用栈深度 O(n)
 * 其中 n 是二叉树的节点数
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {number}
 */
function pathSum(root, targetSum) {
    if (root === null) {
        return 0;
    }

    return rootSum(root, targetSum)
        + pathSum(root.left, targetSum)
        + pathSum(root.right, targetSum);
}

/**
 * Time Complexity: O(n) = rootSum 函数执行次数
 * Space complexity: O(n) = rootSum 函数调用栈深度（最坏情况下，树呈现链状，空间复杂度为 O(n)。平均情况下树的高度和节点数的对数正相关，空间复杂度为 O(log n)
 * Auxiliary complexity: O(n) = rootSum 函数调用栈深度
 * 其中 n 是二叉树的节点数
 *
 * @param {TreeNode} root
 * @param {number} num
 * @returns {number}
 */
function rootSum(root, num) {
    if (root === null) {
        return 0;
    }

    const {left, right, val} = root;
    const count = val === num ? 1 : 0;

    return count + rootSum(left, num - val) + rootSum(right, num - val);
}

module.exports = pathSum;
