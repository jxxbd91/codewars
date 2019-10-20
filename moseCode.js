function moseCode (code) {
  let i = 0, len = code.length;
  let res = '', times = 0, p = '';

  for (; i < len; i++) {
    if (code.charAt(i) === ' ') {
      times++
    } else if (times >= 3) {
      times = 0
      res += 'M[' + p + ']'
      res += ' '
      p = code.charAt(i)
    } else if (times >= 1) {

      times = 0
      res += 'M[' + p + ']'
      p = code.charAt(i)
    } else {
      p += code.charAt(i);
    }
  }

  res += 'M[' + p + ']'

  return res
}

console.log(moseCode('.. --. ----   --'))