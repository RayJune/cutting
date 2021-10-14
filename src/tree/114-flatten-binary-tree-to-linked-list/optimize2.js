/*
 * 114. flatten List
 *
 * Given the root of a binary tree, flatten the tree into a "linked list":
 *
 * The "linked list" should use the same TreeNode class where the right child pointer points to the left node in the list and the left child pointer is always null.
 * The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 *
 * Example 1:
 * Input: root = [1, 2, 5, 3, 4, null, 6]
 * Output: [1, null, 2, null, 3, null, 4, null, 5, null, 6]
 *
 * Example 2:
 * Input: root = []
 * Output: []
 *
 * Example 3:
 * Input: root = [0]
 * Output: [0]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
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
 * 寻找 predecessor，如果左子树有 right 的话，就是 right 中最右边的节点，如果没有的话，就是 node.left 本身
 *
 * Time Complexity: O(n) = 两层 while 循环的次数之和 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 为二叉树的节点数
 *
 * @param {TreeNode} root
 */
function flatten(root) {
    let node = root;

    while (node) {
        if (node.left) {
            let predecessor = node.left;
            const right = node.right;

            node.right = node.left;
            node.left = null;
            while (predecessor.right) {
                predecessor = predecessor.right;
            }
            predecessor.right = right;
        }
        node = node.right;
    }
}

module.exports = flatten;
