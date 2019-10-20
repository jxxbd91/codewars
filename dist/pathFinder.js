"use strict";
function pathFinder(maze) {
    let map = maze.split(/\n/).map(item => item.split(''));
    let node = new NODE(map);
    console.log(map);
    let findedMap = new Set();
    return find(node, map, findedMap);
}
function find(node, map, findedMap, x = 0, y = 0, pX = 0, pY = 0) {
    let mapKey = `${x}-${y}`;
    if (findedMap.has(mapKey))
        return false;
    findedMap.add(mapKey);
    if ((x === map[0].length - 1) && (y === map.length - 1))
        return true;
    for (let attr in directions) {
        node.setX(x);
        node.setY(y);
        let nextDir = directions[attr];
        if (!(x >= 0 && x < map.length && y >= 0 && y < map[0].length) || node.getValue() === 'W') {
            return false;
        }
        node.move(nextDir);
        let nextX = node.getX();
        let nextY = node.getY();
        if (pX === nextX && pY === nextY)
            continue;
        let res = find(node, map, findedMap, nextX, nextY, x, y);
        if (res)
            return res;
    }
    return false;
}
var directions;
(function (directions) {
    directions["DOWN"] = "1";
    directions["RIGHT"] = "2";
    directions["UP"] = "3";
    directions["LEFT"] = "4";
})(directions || (directions = {}));
class NODE {
    constructor(map) {
        this.x = 0;
        this.y = 0;
        this.dir = directions.DOWN;
        this.lastDir = directions.DOWN;
        this.value = '.';
        this.map = [];
        this.map = map;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setDir(dir) {
        this.dir = dir;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getDir() {
        return this.dir;
    }
    getValue() {
        return this.map[this.y][this.x];
    }
    move(dir) {
        switch (dir) {
            case directions.DOWN:
                this.setY(this.y + 1);
                break;
            case directions.LEFT:
                this.setX(this.x - 1);
                break;
            case directions.RIGHT:
                this.setX(this.x + 1);
                break;
            case directions.UP:
                this.setY(this.y - 1);
                break;
        }
        this.lastDir = this.dir;
        this.setDir(dir);
    }
    moveBack() {
        switch (this.dir) {
            case directions.DOWN:
                this.setY(this.y - 1);
                break;
            case directions.LEFT:
                this.setX(this.x + 1);
                break;
            case directions.RIGHT:
                this.setX(this.x - 1);
                break;
            case directions.UP:
                this.setY(this.y + 1);
                break;
        }
        this.dir = this.lastDir;
    }
}
console.log(pathFinder(`......
......
......
......
.....W
....W.`));
