let testList: number[][] = [
  [], // G
  [6, 5, 2], // 1
  [4], // 2
  [], // 3
  [0, 0, 0], // 4
  [], // 5
  [], // 6
  [3, 6, 4, 5, 6],
  [],
  [1, 10, 2],
  [1, 4, 3, 2]
]

const enum Direction {
  UP,
  DOWN
}

var theLift = function(queues: number[][], capacity: number): any {
  // Your code here!
  let resultArr: number[] = [0]; // 结果数组
  let liftArr: number[] = []; // 电梯数组
  let direction: Direction = Direction.UP; // 电梯运行方向
  let stopFlag: boolean = false; // 是否停靠标志
  let index: number = 0; // 当前楼层
  let maxLev: number = 0; // 电梯最高有人的层数

  // TODO 还需要编写电梯停靠的最高层无需停靠的问题方案
  for (let i = queues.length - 1; i >= 0; i--) {
    if (queues[i].length > 0) {
      maxLev = i;
      break;
    }
  }

  while (true) {
    // 通过电梯方向决定楼层是上升还是下降
    direction === Direction.UP ? index++ : index--
    stopFlag = false
    
    // 是否有人要下电梯
    if (liftArr.indexOf(index) > -1) {
      stopFlag = true
      // 电梯中人下去
      liftArr = liftArr.filter(liftItem => liftItem !== index)
    }

    if (index === queues.length - 1) { // 到了顶层，改变电梯方向
      stopFlag = true
      direction = Direction.DOWN
    } else if (index === 0) { // 到了底层，改变电梯方向
      stopFlag = true
      
      for (let i = queues.length - 1; i >= 0; i--) {
        if (queues[i].length > 0) {
          maxLev = i;
          break;
        }
      }
      direction = Direction.UP
    }

    if (maxLev < queues.length - 1) {
      if (index === maxLev && liftArr.length === 0) {
        // 此处需要停下电梯，首先看是否有人是向上的
        stopFlag = true
        queues[index] = queues[index].filter(que => {
          if (que > index) {
            if (liftArr.length < capacity) {
              liftArr.push(que)
              return false
            }
          }
          return true
        })
        // 如果电梯内有人要继续向上继续保持向上
        direction = liftArr.length > 0 ? Direction.UP : Direction.DOWN
      }
    }

    queues[index] = queues[index].filter(que => {
      if (que > index && direction === Direction.UP) { // 当前楼层有人要向上
        stopFlag = true
        if (liftArr.length < capacity) {
          liftArr.push(que)
          return false
        }
      } else if (que < index && direction === Direction.DOWN) { // 当前楼层有人要向下
        stopFlag = true
        if (liftArr.length < capacity) {
          liftArr.push(que)
          return false
        }
      }
      return true
    })

    if (stopFlag) {
      resultArr.push(index)
    }

    if (queues.join('') === '' && liftArr.length === 0) {
      break;
    }
  }

  if (resultArr[resultArr.length - 1] !== 0) {
    resultArr.push(0)
  }
  return resultArr
}

console.log(theLift(testList, 5))