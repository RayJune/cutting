/*
 * 437. Path Sum III
 *
 * Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
 *
 * The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
 *
 * Example 1:
 * Input: root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], targetSum = 8
 * Output: 3
 *
 * Example 2:
 * Input: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22
 * Output: 3
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 1000].
 * (-10) ** 9 <= Node.val <= 10 ** 9
 * -1000 <= targetSum <= 1000
 *
 * https://leetcode.com/problems/path-sum-iii/
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
 * Prefix Sum + Recursion
 *
 * Time Complexity: O(n) = 函数执行次数
 * Space Complexity: O(n) = 函数调用栈深度 / map 占用空间
 * Auxiliary Complexity: O(n) = 函数调用栈深度 / map 占用空间
 * 其中 n 为以 root 为根节点的二叉树的节点数
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {number}
 */
function pathSum(root, targetSum) {
    if (root === null) {
        return 0;
    }

    const prefixSum = new Map([[0, 1]]);
    const helper = (node, sum) => {
        const {left, right, val} = node;
        let count = 0;

        sum += val;
        if (prefixSum.has(sum - targetSum)) {
            count += prefixSum.get(sum - targetSum);
        }
        prefixSum.set(sum, prefixSum.has(sum) ? prefixSum.get(sum) + 1 : 1);
        if (left) {
            count += helper(left, sum);
        }
        if (right) {
            count += helper(right, sum);
        }
        prefixSum.set(sum, prefixSum.get(sum) - 1);

        return count;
    };

    return helper(root, 0);
}

module.exports = pathSum;
