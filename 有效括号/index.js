/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-04-24 20:29:01
 * @LastEditors: YDKD
 * @LastEditTime: 2022-04-24 20:29:01
 */
function isValid(s) {
    const left = ['(', '{', '[']
    const right = [')', '}', ']']
  
    if (typeof s != 'string') return false
  
    const split_str_arr = s.split('')
  
    if (left.includes(split_str_arr[split_str_arr.length - 1] || right.includes(split_str_arr[0]))) return false
  
    if (split_str_arr.length % 2 != 0) return false
  
    const stack = []
  
    for (let i = 0; i < split_str_arr.length; i++) {
      if (stack.length > 0) {
        const left_index = left.findIndex((item) => item === stack[stack.length - 1])
        const right_index = right.findIndex((item) => item === split_str_arr[i])
  
        if (left_index == right_index) {
          stack.pop()
        } else {
          stack.push(split_str_arr[i])
        }
      } else {
        stack.push(split_str_arr[i])
      }
    }
    return stack.length === 0
  }
  
  console.log(isValid('{[()]}'))
