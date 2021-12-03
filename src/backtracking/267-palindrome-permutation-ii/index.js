/*
 * 267. Palindrome Permutation II
 *
 * Given a string s, return all the palindromic permutations (without duplicates) of it.
 *
 * You may return the answer in any order. If s has no palindromic permutation, return an empty list.
 *
 * Example 1:
 * Input: s = "aabb"
 * Output: ["abba", "baab"]
 *
 * Example 2:
 * Input: s = "abc"
 * Output: []
 *
 * Constraints:
 * 1 <= s.length <= 16
 * s consists of only lowercase English letters.
 *
 * https://leetcode.com/problems/palindrome-permutation-ii/
*/

/**
 * Backtracking
 *
 * Time Complexity: O(s! * s) = 遍历次数 O((s / 2)!) * 构成字符串 O(s) + for..of 循环次数 O(s) + 排序 O((s / 2) * log(s / 2))
 * Space complexity: O(s! * s) = 字符串个数 O((s / 2!)) * 字符串长度 O(s) + backtrack 函数调用栈深度 O(s / 2) + signs 长度 O(s / 2) + 排序 O(log(s / 2))
 * Auxiliary complexity: O(s) = backtrack 函数调用栈深度 O(s / 2) + signs 长度 O(s / 2) + 排序 O(log(s))
 *
 * @param {string} s
 * @returns {string[]}
 */
function generatePalindromes(s) {
    const set = new Set();
    const candidates = [];

    for (const char of s) {
        if (set.has(char)) {
            set.delete(char);
            candidates.push(char);
        } else {
            set.add(char);
        }
    }
    if (set.size > 1) {
        return [];
    }

    let mid = '';
    const permutations = [];
    const len = Math.floor(s.length / 2);
    const signs = [];
    const backtrack = arr => {
        if (arr.length === len) {
            permutations.push([...arr, mid, ...arr.slice().reverse()].join(''));
        } else {
            for (let i = 0; i < len; i++) {
                if (signs[i] || (candidates[i] === candidates[i - 1] && !signs[i - 1])) {
                    continue;
                }
                signs[i] = true;
                backtrack(arr.concat(candidates[i]));
                signs[i] = false;
            }
        }
    };

    if (set.size === 1) {
        mid = set.values().next().value;
    }
    candidates.sort();
    backtrack([]);

    return permutations;
}

module.exports = generatePalindromes;
