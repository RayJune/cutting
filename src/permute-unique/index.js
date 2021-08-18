/*
 * Given a collection of numbers, nums, that might contain duplicates,
 * return all possible unique permutations in any order.
 *
 * Example 1:
 * Input: nums = [1, 1, 2]
 * Output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
 *
 * Example 2:
 * Input: nums = [1, 2, 3]
 * Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 *
 * Constraints:
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 *
 * https://leetcode-cn.com/problems/permutations-ii/
 *
*/

/**
 * Backtracking + array unique
 *
 * O(n*n!) time | O(n*n!) space, n 代表参数 nums 的数组长度
 *
 * @param {number[]} nums
 * @return {number[][]} permutations
 */
function permuteUnique(nums) {
    const permutations = [];
    const map = {};

    backtrack(nums, 0, permutations, map);

    return permutations;
}

/**
 *
 * @param {number[]} arr
 * @param {number} depth
 * @param {number[][]} permutations
 * @param {Object} map
 */
function backtrack(arr, depth, permutations, map) {
    const len = arr.length;

    if (depth === len - 1) {
        if (map[arr] === undefined) {
            permutations.push(arr.slice());
            map[arr] = 1;
        }
    } else {
        for (let i = depth; i < len; i++) {
            swap(arr, depth, i);
            backtrack(arr, depth + 1, permutations, map);
            swap(arr, i, depth);
        }
    }
}

/**
 *
 * @param {Array} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = permuteUnique;
