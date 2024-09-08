/*
 * 47. Permutations II
 *
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
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
*/

/**
 * Backtracking + sorting/signs 剪枝
 *
 * Time Complexity: O(n! * n) = 遍历次数 O(n!) * 拷贝单个排列到答案数组中 O(n) + 排序 O(n * log(n))
 * Space complexity: O(n! * n) = 排列个数 O(n!) * 单个排列的长度 O(n) + backtrack 函数调用栈深度 O(n) + signs 长度 O(n)+ 排序 O(log(n))
 * Auxiliary complexity: O(n) = backtrack 函数调用栈深度 O(n) + signs 长度 O(n) + 排序 O(log(n))
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function permuteUnique(nums) {
    const permutations = [];
    const len = nums.length;
    const signs = [];
    const backtrack = arr => {
        if (arr.length === len) {
            permutations.push(arr);
        } else {
            for (let i = 0; i < len; i++) {
                if (signs[i] || (nums[i] === nums[i - 1] && !signs[i - 1])) {
                    continue;
                }
                signs[i] = true;
                backtrack(arr.concat(nums[i]));
                signs[i] = false;
            }
        }
    };

    nums.sort();
    backtrack([]);

    return permutations;
}

export default permuteUnique;
