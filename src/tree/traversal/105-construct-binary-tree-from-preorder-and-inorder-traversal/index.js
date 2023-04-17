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
 * 输入二叉树的前序、中序遍历的节点值数组，构造二叉树并返回其根节点
 * 思路：前序遍历 root -> left subtree -> right subtree, 中序遍历 left subtree -> root -> right sub tree。
 * 由 preorder[i]（i 从 0 开始递增）可以得到 root 节点值，进而由 root 节点值在 inorder 中的位置可以区分左右字树。用递归来实现代码。
 *
 * Time Complexity: O(n ** 2) = 函数执行次数 O(n) * .shift/.indexOf/.slice 操作 O(n)
 * Space Complexity: O(n ** 2) = 函数调用栈深度（最坏情况下树呈现链状）O(n) * .slice 操作 O(n)
 * Auxiliary Complexity: O(n ** 2) = 函数调用栈深度（最坏情况下树呈现链状）O(n) * .slice 操作 O(n)
 * 其中 n 是 preorder 和 inorder 的数组长度，即二叉树的节点数
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @returns {TreeNode}
 */
function buildTree(preorder, inorder) {
    if (inorder.length === 0) {
        return null;
    }

    const rootVal = preorder.shift();
    const pivot = inorder.indexOf(rootVal);

    return new TreeNode(
        rootVal,
        buildTree(preorder, inorder.slice(0, pivot)),
        buildTree(preorder, inorder.slice(pivot + 1))
    );
}

module.exports = buildTree;
