"use strict";
function lastDigit(str1, str2) {
    if (str2 === '0')
        return 1;
    let map = {
        '0': 1,
        '1': 1,
        '2': 5,
        '3': 5,
        '4': 2,
        '5': 1,
        '6': 1,
        '7': 4,
        '8': 4,
        '9': 2
    };
    let n = +str1.substring(str1.length);
    let n2;
    if (n === 3) {
        let r = 0;
        for (let i = 0; i < str2.length; i++) {
            r += +(str2.charAt(i));
        }
        n2 = r % 3;
    }
    else {
        n2 = +str2.substring(str2.length - 2);
    }
    if (n === 0 || n === 1 || n === 5 || n === 6)
        return n;
    let f = Math.pow(n, n2 % map[n]) + '';
    console.log(n2);
    return +f.substring(f.length - 1);
}
console.log(lastDigit('2', '19'));
