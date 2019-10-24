let testList: number[][] = [
  [ 7, 3 ],
  [],
  [ 5, 3 ],
  [ 0, 1, 6, 6 ],
  [ 0, 3, 2, 7 ],
  [],
  [ 1 ],
  [ 5 ]
]

let capacity = 2

const enum Direction {
  UP,
  DOWN
}

var theLift = function(queues: number[][], capacity: number): any {
  // Your code here!
  let resultArr: number[] = []; // 结果数组
  let liftArr: number[] = []; // 电梯数组
  let direction: Direction = Direction.UP; // 电梯运行方向
  let stopFlag: boolean = false; // 是否停靠标志
  let index: number = -1; // 当前楼层
  let maxLev: number = 0; // 电梯最高有人的层数
  let firstTime: boolean = true
  // queues.unshift([])

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
    } else if (index === 0 && !firstTime) { // 到了底层，改变电梯方向
      stopFlag = true
      
      for (let i = queues.length - 1; i >= 0; i--) {
        if (queues[i].length > 0) {
          maxLev = i;
          break;
        }
      }
      direction = Direction.UP
    }
    firstTime = false

    if (maxLev < queues.length - 1) {
      if (index === maxLev && liftArr.length === 0 && direction === Direction.UP) {
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

    // 电梯为空的情况下，判断是否改变电梯的方向
    if (liftArr.length === 0) {
      let lowerTrue = !!queues.slice(0, index).join('')
      let higherTrue = !!queues.slice(index + 1).join('')
      if (!lowerTrue && higherTrue && direction === Direction.DOWN) {
        direction = Direction.UP
        liftArr.push(...queues[index])
        queues[index] = []
        if (!stopFlag) {
          resultArr.push(index)
        }
      } else if (lowerTrue && !higherTrue && direction === Direction.UP) {
        direction = Direction.DOWN
        liftArr.push(...queues[index])
        queues[index] = []
        if (!stopFlag) {
          resultArr.push(index)
        }
      } else if (!lowerTrue && !higherTrue && queues[index]) { // 上下都没有人,并且当前层有人
        // 电梯中是否有跟此时电梯方向保持一致的
        queues[index].filter(q => {
          let isUp = q - index > 0 // 此人方向跟电梯保持同步
          if ((isUp && direction === Direction.UP) || (!isUp && direction === Direction.DOWN)) {
            liftArr.push(q)
            return false
          }
          return true
        })

        // 没有同方向的人
        if (liftArr.length === 0) {
          direction = direction === Direction.DOWN ? Direction.UP : Direction.DOWN
          liftArr.push(...queues[index].splice(0, queues.length))

          if (!stopFlag) {
            resultArr.push(index);
          }
        }
      }
    }

    if (queues.join('') === '' && liftArr.length === 0) {
      break;
    }
  }

  if (resultArr[resultArr.length - 1] !== 0) {
    resultArr.push(0)
  }
  if (resultArr[0] !== 0) {
      resultArr.unshift(0)
  }
  return resultArr
}

console.log(theLift(testList, capacity))