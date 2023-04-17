/*
 * 107. Binary Tree Level Order Traversal II
 *
 * Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
 *
 * Example 1:
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: [[15, 7], [9, 20], [3]]
 *
 * Example 2:
 * Input: root = []
 * Output: []
 *
 * Example 3:
 * Input: root = [1]
 * Output: [[1]]
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
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
 * 输入二叉树的根节点，返回其自底向上的层序遍历节点值数组（number[][]）
 * 思路：用数组来记录层序遍历的位置和顺序
 *
 * Time Complexity: O(n) = 遍历次数 / reverse 操作
 * Space Complexity: O(n) = result 数组占用空间 / arr 数组长度
 * Auxiliary Complexity: O(n) = arr 数组长度
 * 其中 n 为以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {number[][]}
 */
function levelOrderBottom(root) {
    if (root === null) {
        return [];
    }

    let arr = [root];
    const result = [];

    while (arr.length) {
        const level = [];
        const temp = [];

        for (const {val, left, right} of arr) {
            level.push(val);
            if (left) {
                temp.push(left);
            }
            if (right) {
                temp.push(right);
            }
        }

        result.push(level);
        arr = temp;
    }
    return result.reverse();
}

module.exports = levelOrderBottom;
