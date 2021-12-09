/*
 * 211. Design Add and Search Words Data Structure
 *
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 *
 * Implement the WordDictionary class:
 *
 * WordDictionary() Initializes the object.
 * void addWord(word) Adds word to the data structure, it can be matched later.
 * bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 *
 * Example 1:
 * Input
 * ["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"]
 * [[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]]
 * Output
 * [null, null, null, null, false, true, true, true]
 *
 * Explanation
 * WordDictionary wordDictionary = new WordDictionary();
 * wordDictionary.addWord("bad");
 * wordDictionary.addWord("dad");
 * wordDictionary.addWord("mad");
 * wordDictionary.search("pad"); // return False
 * wordDictionary.search("bad"); // return True
 * wordDictionary.search(".ad"); // return True
 * wordDictionary.search("b.."); // return True
 *
 * Constraints:
 * 1 <= word.length <= 500
 * word in addWord consists lower-case English letters.
 * word in search consist of  '.' or lower-case English letters.
 * At most 50000 calls will be made to addWord and search.
 *
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
*/

class TrieNode {
    constructor(char = undefined) {
        this.char = char;
        this.isEnd = false;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

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
}

class WordDictionary {
    tire = new Trie();

    /**
     * Time Complexity: O(n) = Trie addWord 方法
     * Space complexity: O(n) = Trie addWord 方法
     * Auxiliary complexity: O(n) = Trie addWord 方法
     *
     * @param {string} word
     */
    addWord(word) {
        this.tire.insert(word);
    }

    /**
     * Time Complexity: O(n) = dfs 函数执行次数
     * Space complexity: O(1)
     * Auxiliary complexity: O(1)
     *
     * @param {string} word
     * @returns {boolean}
     */
    search(word) {
        const dfs = (i, node) => {
            if (i === word.length) {
                return node.isEnd;
            }

            const char = word[i];

            if (char !== '.') {
                node = node.children.get(char);
                if (node && dfs(i + 1, node)) {
                    return true;
                }
            } else {
                for (const child of node.children.values()) {
                    if (node && dfs(i + 1, child)) {
                        return true;
                    }
                }
            }

            return false;
        };

        return dfs(0, this.tire.root);
    }
}

module.exports = WordDictionary;
