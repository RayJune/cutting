* Time Complexity: O(k*$\binom{n}{k}$) = 构成每个组合所需要的 push 次数 O(k) * backtrack 执行次数 O($\binom{n}{k}$)
* Space complexity: O(k*$\binom{n}{k}$) = 组合长度 k * 组合个数 O($\binom{n}{k}$)
* Auxiliary complexity: O(k) = currentCombination 的长度 O(k + 1)