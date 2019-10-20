function dotsAndBoxes(ar: number[][]): number[] {

  let map: {
    [x: number]: number;
  } = {}
  
  let n: number = 0;
  let k: number = 0;
  let roleIndex: 0 | 1 = 0;
  let lastRoleIndex: 0 | 1 = 0;
  let result: number[] = [0, 0];

  // 寻找n
  for (let i: number = 0; i < ar.length; i++) {
    let [s, e] = [Math.min.apply(ar[i], ar[i]), Math.max.apply(ar[i], ar[i])]
    let d = e - s
    if (d === 1) {
      continue
    }
    n = d
    k = n + 1
    break
  }

  // 得到结果
  for (let i: number = 0; i < ar.length; i++) {
    roleIndex = (1 - lastRoleIndex) as 0 | 1
    let sPoint = Math.min.apply(ar[i], ar[i])
    let ePoint = Math.max.apply(ar[i], ar[i])
    let diagonalPoint = ePoint - k // 对角线起始点
    map[sPoint] === undefined && (map[sPoint] = 0)
    diagonalPoint >= 0 && map[diagonalPoint] === undefined && (map[diagonalPoint] = 0)

    map[sPoint]++
    if (ePoint % n > 0) {
      map[diagonalPoint]++
    }
    
    if (map[sPoint] === 4) {
      roleIndex = lastRoleIndex
      result[roleIndex]++
    }

    if (map[diagonalPoint] === 4) {
      roleIndex = lastRoleIndex
      result[roleIndex]++
    }

    lastRoleIndex = roleIndex
  }
  
  return result
}
