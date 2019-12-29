
const normalNumbersList = [1, 2, 2, 2, 2, 2, 3, 3, 4, 5];
const midNumbersList = [1, 2, 2, 2, 2, 2, 2, 2, 3, 3];
const firstIndexList = [1, 6, 8, 9];
const midIndexList = [0, 1, 8];
const normalIndexList = [0, 1, 6, 8, 9];
function upsideDown(x, y) {
    //your code goes here. you can do it!
    let xM = 0, yM = 0;
    if (x.length < 2) {
        xM = { '0': 3, '1': 2, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1, '9': 0 }[x];
        x = '10';
    }
    if (y.length < 2) {
        yM = 6 - map[y];
        y = '10';
    }
    if (x === y)
        return yM + xM;
    let xlen = x.length;
    let ylen = y.length;
    let reg = /^10*$/;
    if (reg.test(x) && reg.test(y)) {
        return getIRes(xlen, ylen) + yM + xM;
    }
    else if (reg.test(x) && !reg.test(y)) {
        let ty = y[0] + ''.padStart(y.length - 1, '0');
        return getIRes(xlen, ty.length) + getFIRes(y) + yM + xM;
    }
    else if (!reg.test(x) && reg.test(y)) {
        let tx = x[0] + ''.padStart(x.length - 1, '0');
        return getIRes(tx.length, ylen) - getFIRes(x) + yM + xM;
    }
    else {
        let tx = '1' + ''.padStart(x.length - 1, '0');
        let ty = '1' + ''.padStart(y.length - 1, '0');
        return getIRes(tx.length, ty.length) + getFIRes(y) - getFIRes(x) + yM + xM;
    }
}
function getIRes(xlen, ylen) {
    let res = 0;
    for (let i = xlen; i < ylen; i++) {
        let n = Math.floor(i / 2) - 1;
        res += i % 2 === 1 ? 12 * (Math.pow(5, n)) : 4 * (Math.pow(5, n));
    }
    return res;
}
function getFIRes(sn) {
    let len = sn.length;
    let midIndex = Math.ceil(len / 2) - 1; // 中间位置
    let midSnNum = -1; // 中间数，如果是偶数就是 0 ，奇数则取 sn[midIndex] 的值
    let res = 0;
    if (len % 2 === 1) {
        midSnNum = Number(sn[midIndex]);
        sn = sn.substring(0, midIndex) + sn.substring(midIndex + 1);
    }
    for (let s = 0, e = sn.length - 1; s < e; s++, e--) {
        let sNum = Number(sn[s]), snHalfLen = sn.length / 2, eNum = Number(sn[e]);
        if (s === 0 && firstIndexList.indexOf(sNum) > -1 && s !== e - 1) {
            // 第一位是颠倒数
            res += sNum === 1 ? 0 : (normalNumbersList[sNum - 1] - 1) * Math.pow(5, (snHalfLen - 1)) * (midSnNum > -1 ? 3 : 1);
        }
        else if (s === 0 && firstIndexList.indexOf(sNum) === -1) {
            // 第一位不是颠倒数
            return (normalNumbersList[sNum - 1] - 1) * Math.pow(5, (snHalfLen - 1)) * (midSnNum > -1 ? 3 : 1);
        }
        else if (s !== e - 1 && normalIndexList.indexOf(sNum) > -1) {
            // 其他位是颠倒数
            res += sNum === 0 ? 0 : normalNumbersList[sNum - 1] * Math.pow(5, (snHalfLen - s - 1)) * (midSnNum > -1 ? 3 : 1);
        }
        else if (s !== e - 1) {
            // 其他位不是颠倒数
            return res + normalNumbersList[sNum - 1] * Math.pow(5, (snHalfLen - s - 1)) * (midSnNum > -1 ? 3 : 1);
        }
        if (s === e - 1 && normalIndexList.indexOf(sNum) > -1) {
            if (midSnNum === 0 && sNum === 0)
                break;
            // 最后一位是颠倒数
            if (sNum <= eNum) {
                if (sNum === 0) {
                    res += midSnNum > -1 ? midNumbersList[midSnNum] : 0;
                    break;
                }
                res += (s === 0 ? (normalNumbersList[sNum - 1] - 1) : normalNumbersList[sNum - 1]) * (midSnNum > -1 ? 3 : 1) + (midSnNum > -1 ? midNumbersList[midSnNum] : 0);
            }
            else {
                res += (s === 0 ? (normalNumbersList[sNum - 1] - 1) : normalNumbersList[sNum - 1]) * (midSnNum > -1 ? 3 : 1) + (midSnNum > 0 ? midNumbersList[midSnNum - 1] : 0);
            }
        }
        else if (s === e - 1) {
            // 最后一位不是颠倒数
            res += normalNumbersList[sNum - 1];
        }
    }
    return res;
}