const enum DirectionSnail {
  LEFT,
  DOWN,
  RIGHT,
  UP
}

function snail (array: number[][]): number[] {
  if (!array || !array[0] || array[0].length === 0) return []
  let resArr: number[] = []
  let x: number = 0
  let y: number = 0
  let n: number = array.length
  let totalLength = Math.pow(n, 2)
  let visitedSet = new Set<string>()
  let direction: DirectionSnail = DirectionSnail.RIGHT
  while(resArr.length < totalLength) {
    resArr.push(array[x][y])
    visitedSet.add(`${x}-${y}`)
    
    // move
    switch (direction) {
      case DirectionSnail.RIGHT:
        y++
        break
      case DirectionSnail.DOWN:
        x++
        break
      case DirectionSnail.LEFT:
        y--
        break
      default:
        x--
    }

    // change direction
    if (y >= n) {
      direction = DirectionSnail.DOWN
      y--
      x++
    }
    if (y < 0) {
      direction = DirectionSnail.UP
      y++
      x--
    }
    if (x >= n) {
      direction = DirectionSnail.LEFT
      x--
      y--
    }

    // has visited
    let visitedNode = `${x}-${y}`
    if (direction === DirectionSnail.RIGHT && visitedSet.has(visitedNode)) {
      direction = DirectionSnail.DOWN
      y--
      x++
    } else if (direction === DirectionSnail.DOWN && visitedSet.has(visitedNode)) {
      direction = DirectionSnail.LEFT
      x--
      y--
    } else if (direction === DirectionSnail.LEFT && visitedSet.has(visitedNode)) {
      direction = DirectionSnail.UP
      y++
      x--
    } else if (direction === DirectionSnail.UP && visitedSet.has(visitedNode)) {
      direction = DirectionSnail.RIGHT
      x++
      y++
    }
  }

  return resArr
}

console.log(snail([[1]]))