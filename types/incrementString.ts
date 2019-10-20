function incrementString (strng: string): string {
  if (strng === '') return '1'
  let res: string = ''
  let str: string = ''
  let strFlag: boolean = false
  for (let i: number = strng.length - 1; i >= 0; i--) {
    let itm: string = strng.charAt(i)
    if (!/\d/g.test(strng.charAt(i)) || strFlag) {
      str = itm + str
      strFlag = true
      continue
    }
    res = itm + res
  }
  if (res.length === 0) return strng + '1'
  let s: string = parseInt(res) + 1 + ''
  let len = res.length - s.length
  for (let i = 0; i < len; i++) {
    s = '0' + s
  }
  return str + s
}

console.log(incrementString('foobar000'))
console.log(incrementString('foo'))
console.log(incrementString(''))

// Test.assertEquals(incrementString("foobar000"), "foobar001");
// Test.assertEquals(incrementString("foo"), "foo1");
// Test.assertEquals(incrementString("foobar001"), "foobar002");
// Test.assertEquals(incrementString("foobar99"), "foobar100");
// Test.assertEquals(incrementString("foobar099"), "foobar100");
// Test.assertEquals(incrementString(""), "1");