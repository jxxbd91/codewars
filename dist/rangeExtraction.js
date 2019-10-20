"use strict";
function solution(list) {
    let lastPointer = 0, currentPointer = 0, initPointer = -1;
    let res = '';
    list.push(-100);
    for (; currentPointer < list.length;) {
        if (currentPointer === lastPointer) {
            currentPointer++;
        }
        if (list[currentPointer] - list[lastPointer] === 1) {
            (initPointer === -1) && (initPointer = lastPointer);
        }
        else if (initPointer === -1) {
            res += list[lastPointer];
            if (currentPointer < list.length - 1) {
                res += ',';
            }
        }
        else if (lastPointer - initPointer !== 1) {
            let str = `${list[initPointer]}-${list[lastPointer]}`;
            res += str;
            if (currentPointer < list.length - 1) {
                res += ',';
            }
            initPointer = -1;
        }
        else {
            res += list[initPointer] + ',' + list[lastPointer];
            initPointer = -1;
            if (currentPointer < list.length - 1) {
                res += ',';
            }
        }
        lastPointer++;
        currentPointer++;
    }
    return res;
}
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 6, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 22, 23]));
