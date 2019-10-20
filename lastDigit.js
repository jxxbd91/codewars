function lastDigit(str1, str2) {
    if (str2 === '0')
        return 1;
    var map = {
        '0': 1,
        '1': 1,
        '2': 5,
        '3': 5,
        '4': 3,
        '5': 1,
        '6': 1,
        '7': 4,
        '8': 4,
        '9': 2
    };
    var n = +str1.substring(str1.length - 1);
    var n2;
    if (n === 0 || n === 1 || n === 5 || n === 6)
        return n;
    n2 = +str2.substring(str2.length - 2);
    console.log(n2)
    var f = Math.pow(n, n2 % map[n]) + '';
    return +f.substring(f.length - 1);
}
console.log(lastDigit('3', '748690529793967770887297694278352102731294091377715629'));
// 3 9 7 1 3