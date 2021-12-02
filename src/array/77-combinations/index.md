Time Complexity: O(k*$\binom{n}{k}$) = 构成每个组合所需要的 push 次数 O(k) * backtrack 执行次数 O($\binom{n}{k}$)

Space complexity: O(k*$\binom{n}{k}$) = 组合长度 k * 组合个数 O($\binom{n}{k}$)

Auxiliary complexity: O(k) = O(n) = backtrack 函数调用栈的深度 O(k) + 临时数组 currentCombination 的空间 O(k)

>二项式系数 (Binomial coefficient) $\binom{n}{k}$ 可以被理解为从 n 个相异元素中取出 k 个元素的方法数，读作从 n 取 k
