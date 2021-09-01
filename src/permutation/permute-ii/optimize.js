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
 * Backtracking + signs
 *
 * Time Complexity: O(n*n!): backtrack 的调用次数 O(n!) * for 循环 O(n) + 排序 O(n*log(n))
 * Space complexity:  O(n*n!): output 里的排列个数 O(n!) * 单个排列的长度 O(n) + signs 的长度 O(n) + 排序 O(log(n))
 * Auxiliary complexity: O(n): 函数调用栈的深度 O(n) + signs 的长度 O(n) + 排序 O(log(n))
 * 其中 n 代表输入参数 arr 的数组长度
 *
 * @param {number} nums
 * @returns {number[][]} permutations
 */
function permuteUnique(nums) {
    const permutations = [];
    const len = nums.length;
    const signs = new Array(len);
    const backtrack = (currentPermutation = []) => {
        if (currentPermutation.length === len) {
            permutations.push(currentPermutation.slice());
        } else {
            for (let i = 0; i < len; i++) {
                if (signs[i] || (i > 0 && nums[i] === nums[i - 1] && !signs[i - 1])) {
                    continue;
                }
                signs[i] = true;
                currentPermutation.push(nums[i]);
                backtrack(currentPermutation);
                signs[i] = false;
                currentPermutation.pop();
            }
        }
    };

    nums.sort();
    backtrack();

    return permutations;
}

module.exports = permuteUnique;
