/*
 * 54. Spiral Matrix
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Example 1:
 * Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
 *
 * Example 2:
 * Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
 * Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 *
 * https://leetcode.com/problems/spiral-matrix/
*/

/**
 * Set Up Boundaries
 *
 * Time Complexity: O(m * n) = 遍历次数
 * Space complexity: O(m * n) = result 占用空间
 * Auxiliary complexity: O(1)
 * 其中 m 和 n 分别是 matrix 的行数和列数
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top += 1;
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right -= 1;
        if (top <= bottom && left <= right) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom -= 1;
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left += 1;
        }
    }

    return result;
}

module.exports = spiralOrder;
