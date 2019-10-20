"use strict";
function whoIsWinner(piecesPositionList) {
    let map = {
        'A': 0,
        'B': 1,
        'C': 2,
        'D': 3,
        'E': 4,
        'F': 5,
        'G': 6
    };
    let list = [];
    for (let i = 0; i < piecesPositionList.length; i++) {
        let [curPos, result] = piecesPositionList[i].split('_');
        if (isWin(list, map[curPos], result)) {
            return result;
        }
    }
    return 'Draw';
}
function isWin(list, curPos, value) {
    if (!list[curPos])
        list[curPos] = [];
    list[curPos].push(value);
    let r = true;
    // 纵向
    if (list[curPos].length >= 4) {
        for (let i = list[curPos].length - 2; i >= list[curPos].length - 4; i--) {
            if (value !== list[curPos][i]) {
                r = false;
                break;
            }
        }
    }
    else {
        r = false;
    }
    // 横向
    if (!r) {
        let h = list[curPos].length - 1, total = 0, nextIndex = curPos - 1, direction = 'left';
        while (true) {
            if (list[nextIndex] && list[nextIndex][h] === value) {
                total++;
                if (direction === 'left') {
                    nextIndex--;
                }
                else {
                    nextIndex++;
                }
            }
            else {
                if (direction === 'left') {
                    direction = 'right';
                    nextIndex = curPos + 1;
                }
                else {
                    break;
                }
            }
            if (total >= 3) {
                r = true;
                break;
            }
        }
    }
    // 正斜向
    if (!r) {
        let h = list[curPos].length - 1, total = 0, nextIndex = curPos - 1, direction = 'lt_rb', nextH = h + 1;
        while (true) {
            if (list[nextIndex] && list[nextIndex][nextH] === value) {
                total++;
                if (direction === 'lt_rb') {
                    nextIndex--;
                    nextH++;
                }
                else {
                    nextIndex++;
                    nextH--;
                }
            }
            else {
                if (direction === 'lt_rb') {
                    direction = 'rt_lb';
                    nextIndex = curPos + 1;
                    nextH = h - 1;
                }
                else {
                    break;
                }
            }
            if (total >= 3) {
                r = true;
                break;
            }
        }
    }
    // 反斜向
    if (!r) {
        let h = list[curPos].length - 1, total = 0, nextIndex = curPos - 1, direction = 'lt_rb', nextH = h - 1;
        while (true) {
            if (list[nextIndex] && list[nextIndex][nextH] === value) {
                total++;
                if (direction === 'lt_rb') {
                    nextIndex--;
                    nextH--;
                }
                else {
                    nextIndex++;
                    nextH++;
                }
            }
            else {
                if (direction === 'lt_rb') {
                    direction = 'rt_lb';
                    nextIndex = curPos + 1;
                    nextH = h + 1;
                }
                else {
                    break;
                }
            }
            if (total >= 3) {
                r = true;
                break;
            }
        }
    }
    return r;
}
let r = whoIsWinner(["C_Yellow",
    "E_Red",
    "C_Yellow",
    "B_Red",
    "C_Yellow",
    "B_Red",
    "C_Yellow",
    "G_Red",
    "C_Yellow",
    "C_Red",
    "D_Yellow",
    "F_Red",
    "E_Yellow",
    "A_Red",
    "A_Yellow",
    "G_Red",
    "A_Yellow",
    "F_Red",
    "F_Yellow",
    "D_Red",
    "B_Yellow",
    "E_Red",
    "D_Yellow",
    "A_Red",
    "G_Yellow",
    "D_Red",
    "D_Yellow",
    "C_Red"]);
console.log(r);
