function convertFrac (lst) {
  let result = ''
  let ar = [lst[0][1], lst[1][1]], index = 1

  do {
    ar[0] = fn(ar)
    
  } while (lst[++index] && (ar[1] = lst[index][1]))

  lst.forEach(ls => {

    result += '(' + ls[0] * ar[0] / ls[1] + ',' + ar[0] + ')'
  })

  return result
}

function fn (ls, result = 1) {
  for (let i = 2; i <= Math.min.apply(Math, ls); i++) {

    if (ls.some(l => l % i !== 0)) {

      continue
    } else {
      
      result *= i

      return fn(ls.map(l => l / i), result)
    }
  }

  return result *= ls[0] * ls[1]
}

console.log('result = ', convertFrac([[1, 2], [1, 3], [1, 4]]))