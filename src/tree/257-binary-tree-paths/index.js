/*
 * 257. Binary Tree Paths
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 *
 * A leaf is a node with no children.
 *
 * Example 1:
 * Input: [1, 2, 3, null, 5]
 * Output: ["1->2->5", "1->3"]
 *
 * Example 2:
 * Input: root = [1]
 * Output: ["1"]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 100].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/binary-tree-paths/
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
 * 递归，DFS，前序遍历
 *
 * Time Complexity: O(n ** 2) = helper 函数执行次数 O(n) * path.join 方法 O(n)
 * Space complexity: O(n ** 2) = result 占用空间 O(n) + helper 函数调用栈深度 O(n) * path 占用空间 O(n)
 * Auxiliary complexity: O(n) = helper 函数调用栈深度 O(n) * path 长度 O(n)
 *
 * @param {TreeNode} root
 * @returns {string[]}
 */
function binaryTreePaths(root) {
    const result = [];
    const helper = (node, path = []) => {
        const {left, right, val} = node;

        path.push(val);
        if (left === null && right === null) {
            result.push(path.join('->'));
        }
        if (left) {
            helper(left, path);
        }
        if (right) {
            helper(right, path);
        }
        path.pop();
    };

    helper(root);

    return result;
}

export default binaryTreePaths;
