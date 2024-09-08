/*
 * 100. Same Tree
 *
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * Example 1:
 * Input: p = [1, 2, 3], q = [1, 2, 3]
 * Output: true
 *
 * Example 2:
 * Input: p = [1, 2], q = [1, null, 2]
 * Output: false
 *
 * Example 3:
 * Input: p = [1, 2, 1], q = [1, 1, 2]
 * Output: false
 *
 * Constraints:
 * The number of nodes in both trees is in the range [0, 100].
 * -10 ** 4 <= Node.val <= 10 ** 4
 *
 * https://leetcode.com/problems/same-tree/
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
 * 输入两颗二叉树的根节点，判断他们是否相同
 * 思路：用迭代来实现广度优先遍历 BFS
 *
 * Time Complexity: O(min(m, n)) = 遍历次数
 * Space Complexity: O(min(m, n)) = stack 数组长度
 * Auxiliary Complexity: O(min(m, n)) = stack 数组长度
 * 其中 m 和 n 分别是以 p, q 为根节点的二叉树的节点数
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {boolean}
 */
function isSameTree(p, q) {
    const stack = [p, q];

    while (stack.length) {
        const p = stack.pop();
        const q = stack.pop();

        if (p === null && q === null) {
            continue;
        }
        if (p === null || q === null || p.val !== q.val) {
            return false;
        }
        stack.push(p.left, q.left, p.right, q.right);
    }

    return true;
}

export default isSameTree;
