/*
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 *
 * Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.
 *
 * Example 1:
 * Input: inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]
 * Output: [3, 9, 20, null, null, 15, 7]
 *
 * Example 2:
 * Input: inorder = [-1], postorder = [-1]
 * Output: [-1]
 *
 * Constraints:
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder and postorder consist of unique values.
 * Each value of postorder also appears in inorder.
 * inorder is guaranteed to be the inorder traversal of the tree.
 * postorder is guaranteed to be the postorder traversal of the tree.
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
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
 * 输入二叉树的中序、后续遍历的节点值数组，构造二叉树并返回其根节点
 * 思路：中序遍历 left subtree -> root -> right subtree，后续遍历 left subtree -> right subtree -> root。
 * 通过 postorder[i]（i 值从 postorder.length - 1 递减）可以得到 root，再由 root 在 inorder 中的位置区分左右字树。用递归实现代码。
 * 需要注意在构造树的时候是按照 root -> right -> left 的顺序
 *
 * Time Complexity: O(n ** 2) = 函数执行次数 O(n) * .indexOf/.slice 操作
 * Space Complexity: O(n ** 2) = 函数调用栈深度（最坏情况下树成链状）O(n) * .slice 操作
 * Auxiliary Complexity: O(n ** 2) = 函数调用栈深度（最坏情况下树成链状）O(n) * .slice 操作
 * 其中 n 是 inorder 和 postorder 的数组长度，即二叉树的节点数
 *
 * @param {number} inorder
 * @param {number} postorder
 * @returns {TreeNode}
 */
function buildTree(inorder, postorder) {
    if (inorder.length === 0) {
        return null;
    }

    const rootVal = postorder.pop();
    const pivot = inorder.indexOf(rootVal);
    const root = new TreeNode(rootVal);

    root.right = buildTree(inorder.slice(pivot + 1), postorder);
    root.left = buildTree(inorder.slice(0, pivot), postorder);

    return root;
}

export default buildTree;
