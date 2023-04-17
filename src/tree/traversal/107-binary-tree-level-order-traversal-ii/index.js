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
 * 输入二叉树根节点，返回其自底向上层序遍历的节点值数组（number[][]）
 * 思路：用数组来记录层序遍历的位置和顺序
 *
 * Time Complexity: O(n) = 遍历次数
 * Space Complexity: O(n) = result/arr 数组占用空间
 * Auxiliary Complexity: O(n) = arr 数组占用空间
 * 其中 n 是以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @returns {number[][]}
 */
function levelOrderBottom(root) {
    if (root === null) {
        return [];
    }

    const arr = [[root]];
    const result = [];
    let subArr = [root];

    while (subArr.length) {
        let temp = [];

        for (const {left, right} of subArr) {
            if (left) {
                temp.push(left);
            }
            if (right) {
                temp.push(right);
            }
        }

        subArr = temp;

        if (subArr.length) {
            arr.push(subArr);
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        const level = [];

        for (const {val} of arr[i]) {
            level.push(val);
        }

        result.push(level);
    }

    return result;
}

module.exports = levelOrderBottom;
