/*
 * 240. Search a 2D Matrix II
 *
 * Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:
 *
 * Integers in each row are sorted in ascending from left to right.
 * Integers in each column are sorted in ascending from top to bottom.
 *
 * Example 1:
 * Input: matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5
 * Output: true
 *
 * Example 2:
 * Input: matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 20
 * Output: false
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= n, m <= 300
 * (-10) ** 9 <= matrix[i][j] <= 10 ** 9
 * All the integers in each row are sorted in ascending order.
 * All the integers in each column are sorted in ascending order.
 * (-10) ** 9 <= target <= 10 ** 9
 *
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
*/

/**
 * Z 字形查找
 *
 * Time Complexity: O(m + n) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {number}
 */
function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let i = 0;
    let j = n - 1;

    while (i < m && j >= 0) {
        if (matrix[i][j] > target) {
            j -= 1;
        } else if (matrix[i][j] < target) {
            i += 1;
        } else {
            return true;
        }
    }

    return false;
}

export default searchMatrix;
