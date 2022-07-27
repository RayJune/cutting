/*
 * 99. Recover Binary Search Tree
 *
 * You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
 *
 * Example 1:
 * Input: root = [1, 3, null, null, 2]
 * Output: [3, 1, null, null, 2]
 * Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
 *
 * Example 2:
 * Input: root = [3, 1, 4, null, null, 2]
 * Output: [2, 1, 4, null, null, 3]
 * Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
 *
 * Constraints:
 * The number of nodes in the tree is in the range [2, 1000].
 * (-2) ** 31 <= Node.val <= 2 ** 31 - 1
 *
 * Follow up: A solution using O(n) space is pretty straight-forward. Could you devise a constant O(1) space solution?
 *
 * https://leetcode.com/problems/recover-binary-search-tree/
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
 * 利用 BST 的特性：中序遍历后的 BST 数组是递增序列
 *
 * 1. 边中序遍历边比较当前遍历节点值是否大于其前驱节点，若符合，则为目标节点
 * 2. 交换两个目标节点的节点值
 *
 * Time Complexity: O(n) = 中序遍历次数
 * Space complexity: O(n) = stack 长度，最坏情况下树呈链状
 * Auxiliary complexity: O(n) = stack 长度，最坏情况下树呈链状
 * 其中 n 是以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 */
function recoverTree(root) {
    const {x, y} = findTwoSwapped(root);

    swap(x, y);
}

/**
 * @param {TreeNode} node
 * @return {{x: TreeNode, y: TreeNode}}
 */
function findTwoSwapped(node) {
    const stack = [];
    let x = null;
    let y = null;
    let pred = null;

    while (stack.length || node) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        if (pred && node.val < pred.val) {
            y = node;
            if (x === null) {
                x = pred;
            } else {
                break;
            }
        }
        pred = node;
        node = node.right;
    }

    return {x, y};
}

/**
 * @param {TreeNode} x
 * @param {TreeNode} y
 */
function swap(x, y) {
    const temp = x.val;

    x.val = y.val;
    y.val = temp;
}

module.exports = recoverTree;
