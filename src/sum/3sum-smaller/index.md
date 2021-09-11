* Time Complexity: O(n^2) = for 循环 O(n) * while 循环 O(n) + 排序 O(n*log(n))
* Space complexity: O(log(n) + $\binom{n}{3}$) = 排序 O(log(n)) + triplets 中子数组个数 O($\binom{n}{3}$) * 子数组长度 O(3)
* Auxiliary complexity: O(log(n)) = 排序
