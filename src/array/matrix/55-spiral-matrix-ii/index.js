/*
 * 59. Spiral Matrix II
 *
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n ** 2 in spiral order.
 *
 * Example 1:
 * Input: n = 3
 * Output: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
 *
 * Example 2:
 * Input: n = 1
 * Output: [[1]]
 *
 * Constraints:
 * 1 <= n <= 20
 *
 * https://leetcode.com/problems/spiral-matrix-ii/
*/

/**
 * Time Complexity: O(n ** 2) = 遍历次数
 * Space complexity: O(n ** 2) = matrix 占用空间
 * Auxiliary complexity: O(n ** 2) = matrix 占用空间
 *
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num;
            num += 1;
        }
        top += 1;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num;
            num += 1;
        }
        right -= 1;
        if (left <= right && top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num;
                num += 1;
            }
            bottom -= 1;
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num;
                num += 1;
            }
            left += 1;
        }
    }

    return matrix;
}

module.exports = generateMatrix;
