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
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 *
 * https://leetcode.com/problems/path-num/
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
 * 迭代，BFS，层序遍历
 *
 * Time Complexity: O(n) = hasPathSum 函数执行次数 O(n)
 * Space complexity: O(n) = hasPathSum 函数调用栈深度 O(n) （最坏情况下，树呈现链状，空间复杂度为 O(n)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(log n)）
 * Auxiliary complexity: O(n) = hasPathSum 函数调用栈深度 O(n)
 * n 为二叉树的节点数
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {boolean}
 */
function hasPathSum(root, targetSum) {
    if (root === null) {
        return false;
    }

    let stack = [{
        node: root,
        num: targetSum
    }];

    while (stack.length) {
        const temp = [];

        for (const {node, num} of stack) {
            const {left, right, val} = node;

            if (left === null && right === null && num === val) {
                return true;
            }
            if (left) {
                temp.push({
                    node: left,
                    num: num - val
                });
            }
            if (right) {
                temp.push({
                    node: right,
                    num: num - val
                });
            }
        }

        stack = temp;
    }

    return false;
}

module.exports = hasPathSum;
