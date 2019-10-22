"use strict";
let testList = [
    [ 3, 3, 3, 3, 3, 3 ], [], [], [], [], [], []
];
let capacity = 5;
var theLift = function (queues, capacity) {
    // Your code here!
    let resultArr = []; // 结果数组
    let liftArr = []; // 电梯数组
    let direction = 0 /* UP */; // 电梯运行方向
    let stopFlag = false; // 是否停靠标志
    let index = -1; // 当前楼层
    let maxLev = 0; // 电梯最高有人的层数
    let firstTime = true;
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
        direction === 0 /* UP */ ? index++ : index--;
        stopFlag = false;
        // 是否有人要下电梯
        if (liftArr.indexOf(index) > -1) {
            stopFlag = true;
            // 电梯中人下去
            liftArr = liftArr.filter(liftItem => liftItem !== index);
        }
        if (index === queues.length - 1) { // 到了顶层，改变电梯方向
            stopFlag = true;
            direction = 1 /* DOWN */;
        }
        else if (index === 0 && !firstTime) { // 到了底层，改变电梯方向
            stopFlag = true;
            for (let i = queues.length - 1; i >= 0; i--) {
                if (queues[i].length > 0) {
                    maxLev = i;
                    break;
                }
            }
            direction = 0 /* UP */;
        }
        firstTime = false;
        if (maxLev < queues.length - 1) {
            if (index === maxLev && liftArr.length === 0) {
                // 此处需要停下电梯，首先看是否有人是向上的
                stopFlag = true;
                queues[index] = queues[index].filter(que => {
                    if (que > index) {
                        if (liftArr.length < capacity) {
                            liftArr.push(que);
                            return false;
                        }
                    }
                    return true;
                });
                // 如果电梯内有人要继续向上继续保持向上
                direction = liftArr.length > 0 ? 0 /* UP */ : 1 /* DOWN */;
            }
        }
        queues[index] = queues[index].filter(que => {
            if (que > index && direction === 0 /* UP */) { // 当前楼层有人要向上
                stopFlag = true;
                if (liftArr.length < capacity) {
                    liftArr.push(que);
                    return false;
                }
            }
            else if (que < index && direction === 1 /* DOWN */) { // 当前楼层有人要向下
                stopFlag = true;
                if (liftArr.length < capacity) {
                    liftArr.push(que);
                    return false;
                }
            }
            return true;
        });
        if (stopFlag) {
            resultArr.push(index);
        }
        // 电梯为空的情况下，判断是否改变电梯的方向
        if (liftArr.length === 0) {
            let lowerTrue = !!queues.slice(0, index).join('');
            let higherTrue = !!queues.slice(index + 1, queues.length);
            if (!lowerTrue && higherTrue && direction === 1 /* DOWN */) {
                direction = 0 /* UP */;
                liftArr.push(...queues[index]);
                queues[index] = [];
                if (!stopFlag) {
                    resultArr.push(index);
                }
            }
            else if (lowerTrue && !higherTrue && direction === 0 /* UP */) {
                direction = 1 /* DOWN */;
                liftArr.push(...queues[index]);
                queues[index] = [];
                if (!stopFlag) {
                    resultArr.push(index);
                }
            }
        }
        if (queues.join('') === '' && liftArr.length === 0) {
            break;
        }
    }
    if (resultArr[resultArr.length - 1] !== 0) {
        resultArr.push(0);
    }
    if (resultArr[0] !== 0) {
        resultArr.unshift(0);
    }
    return resultArr;
};
console.log(theLift(testList, capacity));
