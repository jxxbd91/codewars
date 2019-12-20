"use strict";
function josephusSurvivor(n, k) {
    //your code here
    let arr = new Array(n).fill(1).map((n, i) => i + 1);
    let cIndex = 0;
    if (k === 1)
        return n;
    while (arr.length > 1) {
        let spliceIndex = (cIndex + k - 1) % arr.length;
        cIndex = spliceIndex;
        arr.splice(spliceIndex, 1);
    }
    return arr[0];
}
console.log(josephusSurvivor(7, 3));
