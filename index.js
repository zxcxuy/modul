function evenorodd(N) {
    if (N % 2 === 0) {
        res = `Число ${N} четное!`;
    } else {
        res = `Число ${N} нечетное!`;
    }
    return res;
}
module.exports = evenorodd;
