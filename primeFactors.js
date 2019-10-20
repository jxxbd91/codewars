function primeFactors (n) {
  let res = ''
  let obj = fn(n)
  for (let attr in obj) {
    res += '(' + attr + (obj[attr] > 1 ? ('**' + obj[attr]) : '') + ')'
  }

  console.log(obj)
  return res
}

function fn (n, i = 2, res = {}, arr = [], index = 0) {
  let half = n / i
  index++
  console.log('n=', n, 'i=', i, index, 'arr = ', arr)
  if (i * i > n) {
    if (res[n]) {
      res[n] += 1
    } else {
      res[n] = 1
    }
    return res
  }

  if (half === Math.floor(n / i)) {
    
    if (res[i]) {
      res[i] += 1
    } else {
      res[i] = 1
    }

    arr.push(i)
    return fn(half, i, res, arr, index)
  } else {
    do {
      i++
    } while (arr.some(t => i % t === 0))
    arr.push(i)
    return fn(n, i, res, arr, index)
  }
}



console.log(primeFactors(18195729))