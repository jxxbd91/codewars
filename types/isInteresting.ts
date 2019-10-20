type resType = 0 | 1 | 2

function isInteresting (number: number, awesomePhrases: number[]): resType{

  return getAoY(number, awesomePhrases)
}

function getAoY (number: number, awesomePhrases: number[], aIndex: number = 0): resType {

  if (aIndex === 3) return 0;

  let n: number = number + aIndex, flag: boolean = false;

  if (awesomePhrases.indexOf(n) > -1) {

    flag = true
  } else if () { // 尾数全部为0

  } else if () { // 全部相同

  } else if () { // 顺序排列

  } else if () { // 回文

  }


  if (flag) return aIndex === 0 ? 2 : 1

  return getAoY(number, awesomePhrases, ++aIndex)
}

console.log(isInteresting(1337, [1337, 256]))