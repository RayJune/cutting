/*
 * 208. Implement Trie (Prefix Tree)
 *
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
 *
 * Implement the Trie class:
 *
 * Trie() Initializes the trie object.
 * void insert(String word) Inserts the string word into the trie.
 * boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
 * boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 *
 * Example 1:
 * Input
 * ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
 * [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
 * Output
 * [null, null, true, false, true, null, true]
 *
 * Explanation
 * Trie trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple");   // return True
 * trie.search("app");     // return False
 * trie.startsWith("app"); // return True
 * trie.insert("app");
 * trie.search("app");     // return True
 *
 * Constraints:
 * 1 <= word.length, prefix.length <= 2000
 * word and prefix consist only of lowercase English letters.
 * At most 3 * 10 ** 4 calls in total will be made to insert, search, and startsWith.
 *
 * https://leetcode.com/problems/implement-trie-prefix-tree/
*/

class TrieNode {
    constructor(char = undefined) {
        this.char = char;
        this.isEnd = false;
        this.children = new Map();
    }
}

class Trie {
    root = new TrieNode();

    /**
     * Time Complexity: O(n) = for...of 循环次数
     * Space complexity: O(n) = 占用存储空间
     * Auxiliary complexity: O(n) = 占用存储空间
     * 其中 n 为 word 的长度
     *
     * @param {string} word
     */
    insert(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode(char));
            }
            node = node.children.get(char);;
        }
        node.isEnd = true;
    }

    /**
     * Time Complexity: O(n) = for...of 循环次数
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     * 其中 n 为 word 的长度
     *
     * @param {string} prefix
     * @returns {boolean}
     */
    searchPrefix(prefix) {
        return Boolean(this.#searchHelper(prefix));
    }

    /**
     * @param {string} prefix
     * @returns {TrieNode}
     */
    #searchHelper(prefix) {
        let node = this.root;

        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }

        return node;
    }

    /**
     * Time Complexity: O(n) = for...of 循环次数
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     * 其中 n 为 word 的长度
     *
     * @param {string} prefix
     * @returns {boolean}
     */
    search(word) {
        const node = this.#searchHelper(word);

        return node && node.isEnd;
    }

    /**
     * Time Complexity: O(n) = for...of 循环次数
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     * 其中 n 为 word 的长度
     *
     * @param {string} prefix
     * @returns {boolean}
     */
    startsWith(prefix) {
        return this.searchPrefix(prefix);
    }
}

module.exports = Trie;
