/*
 * 74. Search a 2D Matrix
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 *
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 *
 * Example 1:
 * Input: matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
 * Output: true
 *
 * Example 2:
 * Input: matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13
 * Output: false
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * (-10 ** 4) <= matrix[i][j], target <= 10 ** 4
 *
 * https://leetcode.com/problems/search-a-2d-matrix/
*/

/**
 * Binary Search
 *
 * Time Complexity: O(log(m * n)) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const num = matrix[Math.floor(mid / n)][mid % n];

        if (num < target) {
            left = mid + 1;
        } else if (num > target) {
            right = mid - 1;
        } else {
            return true;
        }
    }

    return false;
}

export default searchMatrix;
