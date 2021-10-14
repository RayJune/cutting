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
 * 用 hashmap 和下标操作来优化时间复杂度和空间复杂度
 * inorder 起到区分出左右字树的作用
 *
 * Time Complexity: O(n) = buildTree 函数执行次数 O(n)
 * Space complexity: O(n) = 创建树所需要的空间 O(n) + hashmap 占用的空间 O(n)
 * Auxiliary complexity: O(n) = hashmap 占用的空间 O(n)
 * n 是树中的节点个数
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    let i = 0;
    const map = buildMap(inorder);
    const helper = (start, end) => {
        if (start > end) {
            return null
        }

        const value = preorder[i];
        const pivot = map.get(value)
        const root = new TreeNode(value)

        i += 1;
        root.left = helper(start, pivot - 1)
        root.right = helper(pivot + 1, end)

        return root;
    }

    return helper(0, inorder.length - 1);
}

/**
 * @param {number[]} inorder
 * @returns {Map<number, number>} map
 */
function buildMap(inorder) {
    const map = new Map();

    inorder.forEach((num, i) => {
        map.set(num, i);
    });

    return map;
}

module.exports = buildTree;
