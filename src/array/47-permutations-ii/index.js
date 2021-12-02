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
 * https://leetcode.com/problems/permutations-ii/
 *
*/

/**
 * 回溯法 + map 进行过滤
 *
 * Time Complexity: O(n ** 2 * n!) = for 循环次数 O(n) * nums.toString O(n) * backtrack 函数执行次数 O(n!)
 * Space complexity: O(n * n!) = (排列长度 O(n) * 排列个数 O(n!)) + map 长度 O(n!) + 函数调用栈深度 O(n)
 * Auxiliary complexity: O(n!) = map 长度 O(n!) + backtrack 函数调用栈深度 O(n)
 * (n 代表输入参数 nums 的数组长度)
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function permuteUnique(nums) {
    const map = new Map();
    const permutations = [];
    const len = nums.length;
    const backtrack = (depth = 0) => {
        if (depth === len - 1) {
            const key = nums.toString();

            if (map.get(key) === undefined) {
                permutations.push(nums.slice());
                map.set(key, true);
            }
        } else {
            for (let i = depth; i < len; i++) {
                swap(nums, i, depth);
                backtrack(depth + 1);
                swap(nums, depth, i);
            }
        }
    }

    backtrack();

    return permutations;
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
