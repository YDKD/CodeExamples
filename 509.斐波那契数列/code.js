/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-27 21:15:44
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-27 21:16:48
 */
var fib = function(n) {
    function recursion (start, end, n) {
        if (n <= 1) return n
        if (n < 3) {
            return start + end
        }
        return recursion(end, start + end, n - 1)
    }
   
    return recursion(0, 1, n)
};

console.log(fib(4))
