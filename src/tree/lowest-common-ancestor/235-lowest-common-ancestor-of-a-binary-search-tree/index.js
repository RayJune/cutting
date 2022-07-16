/*
 * 235. Lowest Common Ancestor of a Binary Search Tree
 *
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 *
 * Example 1:
 * Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
 * Output: 6
 * Explanation: The LCA of nodes 2 and 8 is 6.
 *
 * Example 2:
 * Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 4
 * Output: 2
 * Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 *
 * Example 3:
 * Input: root = [2, 1], p = 2, q = 1
 * Output: 2
 *
 * Constraints:
 * The number of nodes in the tree is in the range [2, 10 ** 5].
 * (-10) ** 9 <= Node.val <= 10 ** 9
 * All Node.val are unique.
 * p != q
 * p and q will exist in the BST.
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 利用 BST 的特性，如果当前节点值同时大于 p 和 q 的节点值，则公共祖先节点在左子树下；
 * 如果当前节点值同时小于 p 和 q 的节点值，则公共祖先节点在右子树下；
 * 如果不满足以上两种情况，则说明当前节点就是 p、q 的最近公共祖先节点
 *
 * Time Complexity: O(n) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是以 root 为根节点的 BST 的节点数
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    while (root) {
        const {left, right, val} = root;

        if (val > p.val && val > q.val) {
            root = left;
        } else if (val < p.val && val < q.val) {
            root = right;
        } else {
            break;
        }
    }

    return root;
}

module.exports = lowestCommonAncestor;
