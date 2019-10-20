"use strict";
function dotsAndBoxes(ar) {
    let map = {};
    let n = 0;
    let k = 0;
    let roleIndex = 0;
    let lastRoleIndex = 0;
    let result = [0, 0];
    // 寻找n
    for (let i = 0; i < ar.length; i++) {
        let [s, e] = [Math.min.apply(ar[i], ar[i]), Math.max.apply(ar[i], ar[i])];
        let d = e - s;
        if (d === 1) {
            continue;
        }
        n = d;
        k = n + 1;
        break;
    }
    // 得到结果
    for (let i = 0; i < ar.length; i++) {
        roleIndex = (1 - lastRoleIndex);
        let sPoint = Math.min.apply(ar[i], ar[i]);
        let ePoint = Math.max.apply(ar[i], ar[i]);
        let diagonalPoint = ePoint - k; // 对角线起始点
        map[sPoint] === undefined && (map[sPoint] = 0);
        diagonalPoint >= 0 && map[diagonalPoint] === undefined && (map[diagonalPoint] = 0);
        map[sPoint]++;
        if (ePoint % n > 0) {
            map[diagonalPoint]++;
        }
        if (map[sPoint] === 4) {
            roleIndex = lastRoleIndex;
            result[roleIndex]++;
        }
        if (map[diagonalPoint] === 4) {
            roleIndex = lastRoleIndex;
            result[roleIndex]++;
        }
        lastRoleIndex = roleIndex;
    }
    return result;
}
