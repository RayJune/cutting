Time Complexity: O(n^2) = for 循环 O(n) * while 循环 O(n) + 排序 O(n * log(n))

Space complexity: O($\binom{n}{3}$ + log(n)) = triplets 中的子数组个数 O($\binom{n}{3}$) * 子数组长度 O(3) + 排序所需要的空间 O(log(n))

Auxiliary complexity: O(log(n)) = 排序所需要的空间 O(log(n))

>二项式系数 (Binomial coefficient) $\binom{n}{k}$ 可以被理解为从 n 个相异元素中取出 k 个元素的方法数，读作从 n 取 k
