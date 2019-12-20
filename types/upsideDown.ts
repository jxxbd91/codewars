const normalList = [1, 2, 2, 2, 2, 2, 3, 3, 4, 5]
const midList =    [1, 2, 2, 2, 2, 2, 2, 2, 3, 3]


function upsideDown(x: string, y: string){
  //your code goes here. you can do it!
  
  let xM = 0, yM = 0
  if (x.length < 2) {
    xM = {'0': 3, '1': 2, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1, '9': 0}[x];
    x = '10';
  }
  if (y.length < 2) {
    yM = 6 - map[y]
    y = '10'
  }
  if (x === y) return yM + xM
  let xlen = x.length
  let ylen = y.length
  let reg = /^10*$/
  if (reg.test(x) && reg.test(y)) {
    return getIRes(xlen, ylen) + yM + xM
  } else if (reg.test(x) && !reg.test(y)) {
    let ty = y[0] + ''.padStart(y.length - 1, '0')
    return getIRes(xlen, ty.length) + getFIRes(y) + yM + xM
  } else if (!reg.test(x) && reg.test(y)) {
    
    let tx = x[0] + ''.padStart(x.length - 1, '0')
    return getIRes(tx.length, ylen) - getFIRes(x) + yM + xM
  } else {
    let tx = x[0] + ''.padStart(x.length - 1, '0')
    let ty = y[0] + ''.padStart(y.length - 1, '0')
    return getIRes(tx.length, ty.length) + getFIRes(y) - getFIRes(x) + yM + xM
  }
}

function getIRes(xlen: number, ylen: number): number {
  let res = 0
  for (let i: number = xlen; i < ylen; i++) {
      let n = Math.floor(i / 2) - 1
      res += i % 2 === 1 ? 12 * (5 ** n) : 4 * (5 ** n)
  }
  return res
}

function getFIRes(s: string): number {
  const list = ['0', '1', '6', '8', '9']
  const midList = ['0', '1', '8']
  let r = 1
  for (let i: number = 0; i < s.length; i++) {

    if (list.includes(s[i])) {
      
      if (i === Math.ceil(s.length / 2) - 1) {
        // zhong jian
        if (s.length % 2 === 1) {
          // ji shu
          if (midList.includes(s[i])) { // 中间数是颠倒数
            if (isUpsideDownNum(s[i].substring(0, i) + s[i].substring(i+1, s.length))) { // 本身是

            } else { // 本身不是
              r *= 
            }
          } else {
            r *= midList[s[i]]
            break
          }
        } else {
          // ou shu

        }
      }

      r *= i === 0 ? (normalList[s[i]] - 1) : normalList[s[i]]
    } else {
      r *= i === 0
        ? (normalList[s[i]] - 1) 
        : i === Math.floor(s.length / 2)
          ? midList[s[i]]
          : normalList[s[i]]
      if (i === Math.floor(s.length / 2)) return r
      r *= 
        s.length % 2 === 1
        ? 5 ** ((s.length - 1) / 2 - i - 1) * 3
        : 5 ** (s.length / 2 - i - 1)
      break
    }
  }
  return r
}

function isUpsideDownNum(s: string) {

}

// getFIRes('12307500')

console.log(getFIRes('123'))
// console.log(upsideDown('123', '1234'))