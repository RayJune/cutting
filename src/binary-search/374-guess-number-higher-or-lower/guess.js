/**
 * 因为 guess 函数在本题为预先定义好的，这里使用非常规写法来实现单测
 *
 * @param {number} n
 * @returns {number}
 */
function guess(n) {
    if (n === guess.pick) {
        return 0;
    } else if (n > guess.pick) {
        return -1;
    } else {
        return 1;
    }
}

module.exports = guess;
