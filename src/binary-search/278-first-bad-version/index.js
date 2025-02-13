/*
 * 278. First Bad Version
 *
 * You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
 *
 * Example 1:
 * Input: n = 5, bad = 4
 * Output: 4
 * Explanation:
 * call isBadVersion(3) -> false
 * call isBadVersion(5) -> true
 * call isBadVersion(4) -> true
 * Then 4 is the first bad version.
 *
 * Example 2: n = 1, bad = 1
 * Output: 1
 *
 * Constraints:
 * 1 <= bad <= n <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/first-bad-version/
*/

/**
 * Binary Search
 *
 * Time Complexity: O(log(n)) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {Function} isBadVersion
 * @returns {Function}
 */
function solution(isBadVersion) {
    /**
     * @param {number} n
     * @returns {number}
     */
    return n => {
        let left = 1;
        let right = n;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);

            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return right;
    };
}

export default solution;
