function pathFinder(maze: string): boolean {
  let map: string[][] = maze.split(/\n/).map(item => item.split(''))
  let node: NODE = new NODE(map)
  console.log(map)
  let findedMap: Set<string> = new Set()
  return find(node, map, findedMap)
}

function find (node: NODE, map: string[][], findedMap: Set<string>, x: number = 0, y: number = 0, pX: number = 0, pY: number = 0): boolean {
  let mapKey: string = `${x}-${y}`
  if (findedMap.has(mapKey)) return false
  findedMap.add(mapKey)
  if ((x === map[0].length - 1) && (y === map.length - 1)) return true
  for (let attr in directions) {
    node.setX(x)
    node.setY(y)
    let nextDir: directions = directions[attr] as unknown as directions
    if (!(x >= 0 && x < map.length && y >= 0 && y < map[0].length) || node.getValue() === 'W') {
      return false
    }
    node.move(nextDir)
    let nextX = node.getX()
    let nextY = node.getY()
    if (pX === nextX && pY === nextY) continue
    let res = find(node, map, findedMap, nextX, nextY, x, y)
    if (res) return res
  }
  return false
}


enum directions {
    DOWN = '1',
    RIGHT = '2',
    UP = '3',
    LEFT = '4'
}

class NODE {
  private x: number = 0;
  private y: number = 0;
  private dir: directions = directions.DOWN;
  private lastDir: directions = directions.DOWN;
  private value: string = '.';
  private map: string[][] = [];

  constructor (map: string[][]) {
    this.map = map;
  }

  setX (x: number) {
    this.x = x;
  }

  setY (y: number) {
    this.y = y;
  }

  setDir (dir: directions) {
    this.dir = dir;
  }

  getX () {
    return this.x;
  }

  getY () {
    return this.y;
  }

  getDir () {
    return this.dir;
  }

  getValue () {
    return this.map[this.y][this.x];
  }

  move (dir: directions) {
    switch (dir) {
      case directions.DOWN:
        this.setY(this.y + 1)
        break;
      case directions.LEFT:
        this.setX(this.x - 1)
        break;
      case directions.RIGHT:
        this.setX(this.x + 1);
        break;
      case directions.UP:
        this.setY(this.y - 1);
        break;
    }
    this.lastDir = this.dir;
    this.setDir(dir);
  }

  moveBack () {
    switch (this.dir) {
      case directions.DOWN:
        this.setY(this.y - 1)
        break;
      case directions.LEFT:
        this.setX(this.x + 1)
        break;
      case directions.RIGHT:
        this.setX(this.x - 1);
        break;
      case directions.UP:
        this.setY(this.y + 1);
        break;
    }
    this.dir = this.lastDir
  }
}

console.log(pathFinder(
`......
......
......
......
.....W
....W.`
))
