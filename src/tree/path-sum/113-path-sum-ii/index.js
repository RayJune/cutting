/*
 * 113. Path Sum II
 *
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
 *
 * A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
 *
 * Example 1:
 * Input: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22
 * Output: [[5, 4, 11, 2], [5, 8, 4, 5]]
 *
 * Example 2:
 * Input: root = [1, 2, 3], targetSum = 5
 * Output: []
 *
 * Example 3:
 * Input: root = [1, 2], targetSum = 0
 * Output: []
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 *
 * https://leetcode.com/problems/path-sum-ii/
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
 * Time Complexity: O(n ** 2) = 函数执行次数 O(n) * path.slice 方法 O(n)
 * Space Complexity: O(n) = result 数组长度 / 函数调用栈深度
 * Auxiliary Complexity: O(n) = 函数调用栈深度
 * 其中 n 为以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[]}
 */
function pathSum(root, targetSum) {
    if (root === null) {
        return [];
    }

    const result = [];
    const helper = (node, num, path = []) => {
        const {left, right, val} = node;

        path.push(val);
        num -= val;
        if (left === null && right === null && num === 0) {
            result.push(path);
        }
        if (left) {
            helper(left, num, path.slice());
        }
        if (right) {
            helper(right, num, path.slice());
        }
    }

    helper(root, targetSum);

    return result;
}

module.exports = pathSum;
