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
 * 输入二叉树的前序、中序遍历的节点值数组，构造该二叉树并返回其根节点
 * 思路：使用 Map 来和指针来代替数组操作方法优化时空复杂度
 *
 * Time Complexity: O(n) = helper 函数执行次数 / buildMap 内遍历次数
 * Space Complexity: O(n) = 创建树所需要的空间 / hashmap 占用的空间 / helper 函数调用栈深度
 * Auxiliary Complexity: O(n) = hashmap 占用的空间 / helper 函数调用栈深度
 * 其中 n 是 preorder 和 inorder 的数组长度，即二叉树的节点数
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    let i = -1;
    const map = buildMap(inorder);
    const helper = (start, end) => {
        if (end - start < 0) {
            return null;
        }

        const rootVal = preorder[i += 1];
        const pivot = map.get(rootVal);

        return new TreeNode(
            rootVal,
            helper(start, pivot - 1),
            helper(pivot + 1, end)
        );
    };

    return helper(0, inorder.length - 1);
}

/**
 * 构建数组元素到索引值的映射表
 *
 * @param {number[]} arr
 * @return {Map<number, number>}
 */
function buildMap(arr) {
    const map = new Map();

    arr.forEach((num, i) => {
        map.set(num, i);
    });

    return map;
}

module.exports = buildTree;
