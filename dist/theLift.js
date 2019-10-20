"use strict";
let testList = [
    [],
    [6, 5, 2],
    [4],
    [],
    [0, 0, 0],
    [],
    [],
    [3, 6, 4, 5, 6],
    [],
    [1, 10, 2],
    [1, 4, 3, 2] // 10 ---- 10
];
var theLift = function (queues, capacity) {
    // Your code here!
    let resultArr = []; // 结果数组
    let liftArr = []; // 电梯数组
    let direction = 0 /* UP */; // 电梯运行方向
    let stopFlag = false; // 是否停靠标志
    let index = 0; // 当前楼层
    let maxLev = 0; // 电梯最高有人的层数
    // TODO 还需要编写电梯停靠的最高层无需停靠的问题方案
    for (let i = queues.length - 1; i >= 0; i--) {
        if (queues[i].length > 0) {
            maxLev = i;
            break;
        }
    }
    while (true) {
        if (direction === 0 /* UP */) {
            index++;
        }
        else {
            index--;
        }
        stopFlag = false;
        if (liftArr.indexOf(index) > -1) {
            // console.log(index)
            // 电梯中有人要下
            stopFlag = true;
            // 电梯中人下去
            liftArr = liftArr.filter(liftItem => liftItem !== index);
        }
        if (index === queues.length - 1) {
            stopFlag = true;
            direction = 1 /* DOWN */;
        }
        else if (index === 0) {
            stopFlag = true;
            direction = 0 /* UP */;
        }
        queues[index] = queues[index].filter(que => {
            // console.log(direction)
            if (que > index && direction === 0 /* UP */) { // 当前楼层有人要向上
                liftArr.push(que);
                stopFlag = true;
                return false;
            }
            else if (que < index && direction === 1 /* DOWN */) { // 当前楼层有人要向下
                // console.log(index)
                stopFlag = true;
                liftArr.push(que);
                return false;
            }
            return true;
        });
        if (stopFlag) {
            resultArr.push(index);
        }
        if (queues.join('') === '') {
            break;
        }
    }
    return {
        resultArr,
        liftArr
    };
};
console.log(theLift(testList, 10));
