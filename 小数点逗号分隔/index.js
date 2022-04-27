/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-24 20:29:39
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-24 20:29:58
 */
function numSplit(str) {
    let symbol = str > 0 ? '+' : '-'
    // 1、转为字符串
    str = str + ''
    // 2、根据小数点、负号分割
    let tmp_arr = str.split(symbol)
    let num_arr = tmp_arr[1].split('.')
    // 分为两步处理，第一项翻转之后根据每3个加一个, 第二项直接加，
    let revese_1 = num_arr[0].split('').reverse().join(''),
        reverse_2 = num_arr[1].split('')
    function formatStr(str, curren) {
        let arr = [],
            start = 0,
            end = 3,
            str_len = str.length
        while (str_len % 3 == 0 && str_len > 0) {
            arr = arr.concat([str.substring(start, end), ','])
            start += 3
            end = end + start
            str_len -= 3
        }
        if (curren == 'left') {
            arr = arr.join('').split('').reverse()
            arr.splice(0, 1)
            return arr.join('')
        } else if (curren == 'right') {
            arr.splice(arr.length - 1, 1)
            return arr.join('')
        }

    }
    let result_left = formatStr(revese_1, 'left'),
        result_right = formatStr(revese_1, 'right')
    return symbol + result_left + '.' + result_right
}
