/*
 * 236. Lowest Common Ancestor of a Binary Tree
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 *
 * Example 1:
 * Input: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 *
 * Example 2:
 * Input: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 *
 * Example 3:
 * Input: root = [1, 2], p = 1, q = 2
 * Output: 1
 *
 * Constraints:
 * The number of nodes in the tree is in the range [2, 10 ** 5].
 * (-10) ** 9 <= Node.val <= 10 ** 9
 * All Node.val are unique.
 * p != q
 * p and q will exist in the BST.
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 递归前序遍历所有节点，处理函数的返回值只有 null、p、q、p/q/p&q 的祖先节点四种情况
 * 通过比较得出 left && right 函数返回值为 true 的就是最近公共祖先节点
 *
 * Time Complexity: O(n) = 函数执行次数
 * Space complexity: O(n) = 函数调用栈深度
 * Auxiliary complexity: O(n) = 函数调用栈深度
 * 其中 n 是以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    if (root === null || root.val === p.val || root.val === q.val) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    return left && right ? root : left || right;
}

export default lowestCommonAncestor;
