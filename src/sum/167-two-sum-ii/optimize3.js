/*
 * Two Sum II - Input array is sorted
 *
 * Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
 *
 *
 * Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.
 *
 *
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 *
 * Example 1:
 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [1, 2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 *
 * Example 2:
 * Input: numbers = [2, 3, 4], target = 6
 * Output: [1, 3]
 *
 * Example 3:
 * Input: numbers = [-1, 0], target = -1
 * Output: [1, 2]
 *
 * Constraints:
 *
 * 2 <= numbers.length <= 3 * 104
 * -1000 <= numbers[i] <= 1000
 * numbers is sorted in non-decreasing order.
 * -1000 <= target <= 1000
 * The tests are generated such that there is exactly one solution.
 *
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
*/

/**
 * 双指针
 *
 * Time Complexity: O(n) = while 循环 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(numbers, target) {
    const len = numbers.length;
    let small = 0;
    let big = len - 1;

    while (small < big) {
        const sum = numbers[small] + numbers[big];

        if (sum > target) {
            big -= 1;
        } else if (sum < target) {
            small += 1;
        } else {
            return [small + 1, big + 1];
        }
    }

    return [];
}

module.exports = twoSum;
