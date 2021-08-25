Time Complexity: O(k*$\binom{n}{k}$)

Space complexity: O(k*$\binom{n}{k}$)

Auxiliary complexity: O(n + k) = O(n) , 即递归使用栈空间和临时数组 currentCombination 的空间

>二项式系数 (Binomial coefficient) $\binom{n}{k}$ 可以被理解为从 n 个相异元素中取出 k 个元素的方法数，读作从 n 取 k
