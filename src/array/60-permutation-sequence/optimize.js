/*
 * 60. Permutation Sequence
 *
 * The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
 *
 * By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
 *
 * 1. "123"
 * 2. "132"
 * 3. "213"
 * 4. "231"
 * 5. "312"
 * 6. "321"
 *
 * Given n and k, return the No.k permutation sequence.
 *
 * Example 1:
 * Input: n = 3, k = 3
 * Output: "213"
 *
 * Example 2:
 * Input: n = 4, k = 9
 * Output: "2314"
 *
 * Example 3:
 * Input: n = 3, k = 1
 * Output: "123"
 *
 * Constraints:
 * 1 <= n <= 9
 * 1 <= k <= n!
 *
 * https://leetcode.com/problems/permutation-sequence/
*/

/**
 * 用 nextPermutation 来做
 *
 * Time Complexity: O(k * n) = for 循环构建 permutation 初始数组 O(n) + nextPermutation 时间复杂度 O(k) * nextPermutation 执行次数 O(n)
 * Space complexity: O(n) = permutation 长度 O(n)
 * Auxiliary complexity: O(1)
 *
 * @param {number} n
 * @param {number} k
 * @returns {string}
 */
function getPermutation(n, k) {
    const permutation = [];

    for (let i = 1; i <= n; i++) {
        permutation.push(i);
    }
    for (let i = 2; i <= k; i++) {
        nextPermutation(permutation);
    }

    return permutation.join('');
}

/**
 * Time Complexity: O(n) = while loop + while loop + reverse
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} nums
 */
function nextPermutation(nums) {
    const len = nums.length;
    let smaller = len - 2;

    while (nums[smaller] >= nums[smaller + 1]) {
        smaller -= 1;
    }
    let bigger = len - 1;

    while (nums[smaller] >= nums[bigger]) {
        bigger -= 1;
    }
    [nums[smaller], nums[bigger]] = [nums[bigger], nums[smaller]];
    reverse(nums, smaller + 1);
}

/**
 * @param {Array} arr
 * @param {number} start
 */
function reverse(arr, start) {
    let end = arr.length - 1;

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start += 1;
        end -= 1;
    }
}

module.exports = getPermutation;
