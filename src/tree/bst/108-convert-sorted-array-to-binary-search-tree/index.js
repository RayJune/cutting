/*
 * 108. Convert Sorted Array to Binary Search Tree
 *
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 *
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 *
 * Example 1:
 * Input: nums = [-10, -3, 0, 5, 9]
 * Output: [0, -3, 9, -10, null, 5]
 * Explanation: [0, -10, 5, null, -3, null, 9] is also accepted:
 *
 * Example 2:
 * Input: nums = [1, 3]
 * Output: [3,1]
 * Explanation: [1, 3] and [3, 1] are both a height-balanced BSTs.
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 * nums is sorted in a strictly increasing order.
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Inorder Traversal, 总是选择中间位置左边的数字作为根节点
 *
 * Time Complexity: O(n) = 函数执行次数
 * Space Complexity: O(n) = 生成的 BST 中节点个数 / 函数调用栈深度
 * Auxiliary Complexity: O(n) = 函数调用栈深度
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @returns {TreeNode}
 */
function sortedArrayToBST(nums) {
    if (nums.length === 0) {
        return null;
    }

    const mid = Math.floor(nums.length / 2);

    return new TreeNode(
        nums[mid],
        sortedArrayToBST(nums.slice(0, mid)),
        sortedArrayToBST(nums.slice(mid + 1))
    );
}

export default sortedArrayToBST;
