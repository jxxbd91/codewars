"use strict";
function snail(array) {
    if (!array || !array[0] || array[0].length === 0)
        return [];
    let resArr = [];
    let x = 0;
    let y = 0;
    let n = array.length;
    let totalLength = Math.pow(n, 2);
    let visitedSet = new Set();
    let direction = 2 /* RIGHT */;
    while (resArr.length < totalLength) {
        resArr.push(array[x][y]);
        visitedSet.add(`${x}-${y}`);
        // move
        switch (direction) {
            case 2 /* RIGHT */:
                y++;
                break;
            case 1 /* DOWN */:
                x++;
                break;
            case 0 /* LEFT */:
                y--;
                break;
            default:
                x--;
        }
        // change direction
        if (y >= n) {
            direction = 1 /* DOWN */;
            y--;
            x++;
        }
        if (y < 0) {
            direction = 3 /* UP */;
            y++;
            x--;
        }
        if (x >= n) {
            direction = 0 /* LEFT */;
            x--;
            y--;
        }
        // has visited
        let visitedNode = `${x}-${y}`;
        if (direction === 2 /* RIGHT */ && visitedSet.has(visitedNode)) {
            direction = 1 /* DOWN */;
            y--;
            x++;
        }
        else if (direction === 1 /* DOWN */ && visitedSet.has(visitedNode)) {
            direction = 0 /* LEFT */;
            x--;
            y--;
        }
        else if (direction === 0 /* LEFT */ && visitedSet.has(visitedNode)) {
            direction = 3 /* UP */;
            y++;
            x--;
        }
        else if (direction === 3 /* UP */ && visitedSet.has(visitedNode)) {
            direction = 2 /* RIGHT */;
            x++;
            y++;
        }
    }
    return resArr;
}
console.log(snail([[1]]));
