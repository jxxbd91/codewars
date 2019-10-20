"use strict";
function isInteresting(number, awesomePhrases) {
    return getAoY(number, awesomePhrases);
}
function getAoY(number, awesomePhrases, aIndex = 0) {
    if (aIndex === 3)
        return 0;
    let n = number + aIndex, flag = false;
    if (awesomePhrases.indexOf(n) > -1) {
        flag = true;
    }
    else if () { // 尾数全部为0
    }
    else if () { // 全部相同
    }
    else if () { // 顺序排列
    }
    else if () { // 回文
    }
    if (flag)
        return aIndex === 0 ? 2 : 1;
    return getAoY(number, awesomePhrases, ++aIndex);
}
console.log(isInteresting(1337, [1337, 256]));
