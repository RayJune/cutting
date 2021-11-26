/*
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 *
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 *
 * Example 1:
 * Input: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
 * Output: [3, 9, 20, null, null, 15, 7]
 *
 * Example 2:
 * Input: preorder = [-1], inorder = [-1]
 * Output: [-1]
 *
 * Constraints:
 *
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder and inorder consist of unique values.
 * Each value of inorder also appears in preorder.
 * preorder is guaranteed to be the preorder traversal of the tree.
 * inorder is guaranteed to be the inorder traversal of the tree.
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

/**
 * Definition for a binary tree root.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * 用 preorder[0] 找出 root，然后再用 root 在 inorder 中所处的位置区分出左右子树
 *
 * Time Complexity: O(n ** 2) = buildTree 函数执行次数 O(n) * array.indexOf + array.slice 操作 O(n)
 * Space complexity: O(n) = 创建树所需要的空间 O(n) + 函数调用栈深度 O(m) + array.slice 创建新数组占用的空间 O(n)
 * Auxiliary complexity: O(n) = array.slice 创建新数组占用的空间 O(n) + 函数调用栈深度 O(m)
 * n 是树中的节点个数，m 是树的高度
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    const root = new TreeNode(preorder[0]);
    const pivot = inorder.indexOf(preorder.shift());

    root.left = buildTree(preorder, inorder.slice(0, pivot));
    root.right = buildTree(preorder, inorder.slice(pivot + 1));

    return root;
}

module.exports = buildTree;
