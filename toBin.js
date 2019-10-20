function int32ToIp(int32){
  
  return intToBin(int32)
}

function intToBin (int, list = '', total = 0, len = 8, res = '') {

  if (int == 0) {
    if (res === '') {
      res = '0.0.0.' + binToInt(list)
    } else {
      let r = res.slice(0, res.length - 1)
      if (total === 3) {
        res = binToInt(list) + '.' + r
      } else if (total === 2) {
        res = '0.' + binToInt(list) + '.' + r
      } else if (total === 1) {
        res = '0.0.' + binToInt(list) + '.' + r
      } else {
        res = res.slice(0, res.length - 1)
      }
      
    }
    return res
  }


  list = int % 2 + list
  
  if ((list.length) % len === 0 && list.length > 0) {
    res = binToInt(list) + '.' + res
    list = ''
    total++
  }
  return intToBin(Math.floor(int / 2), list, total, len, res)
}

function binToInt (bins, index = 0) {
  if (bins == 0) return 0
  
  return (bins % 10) * Math.pow(2, index) + binToInt(Math.floor(bins / 10), ++index)
}

int32ToIp(2430982)
