function q (num) {
  return s(0, num)
}

function s (i, num) {

  let r = (num % 10) * Math.pow(10, i)
  console.log(r)
  if (num < 10) {

    return r
  } else {

    return r > 0 ? (s(++i, Math.floor(num / 10)) + " + " + r) : s(++i, Math.floor(num / 10))
  }
}

console.log(q(1026))