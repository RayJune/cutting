/*
 * 211. 添加与搜索单词 - 数据结构设计
 *
 * 请你设计一个数据结构，支持添加新单词和查找字符串是否与任何先前添加的字符串匹配。
 *
 * 实现词典类 WordDictionary ：
 *
 * WordDictionary() 初始化词典对象
 * void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
 * bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回 false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。
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
 * https://leetcode.cn/problems/design-add-and-search-words-data-structure/
*/

export default WordDictionary;
