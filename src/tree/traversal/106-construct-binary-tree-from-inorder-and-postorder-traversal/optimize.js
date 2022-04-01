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
 * 用 hashmap 优化时间、空间复杂度
 *
 * Time Complexity: O(n) = helper 函数执行次数
 * Space Complexity: O(n) = 创建树所需要的空间 O(n) + hashmap 占用的空间 O(n) + helper 函数调用栈深度 O(m)
 * Auxiliary Complexity: O(n) = hashmap 占用的空间 O(n) + helper 函数调用栈深度 O(m)
 * 其中 n 是树中的节点个数，m 是树的高度
 *
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
    if (inorder.length === 0) {
        return null;
    }

    let i = inorder.length - 1;
    const map = buildMap(inorder);
    const helper = (start, end) => {
        if (start > end) {
            return null;
        }

        const value = postorder[i];
        const pivot = map.get(value);
        const root = new TreeNode(value);

        i -= 1;
        root.right = helper(pivot + 1, end)
        root.left = helper(start, pivot - 1)

        return root;
    }

    return helper(0, inorder.length - 1);
}

/**
 * @param {number[]} inorder
 * @returns {Map<number, number>}
 */
function buildMap(inorder) {
    const map = new Map();

    inorder.forEach((num, i) => {
        map.set(num, i);
    });

    return map;
}

module.exports = buildTree;
