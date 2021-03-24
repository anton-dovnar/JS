function sumFibs(num) {
    if (num === 1) {
        return num
    }

    let a = 0;
    let b = 1;
    let result = 0;

    while (b <= num) {
        if (b % 2 !== 0) {
            result += b;
        }
        b += a;
        a = b - a;
    }
    return result;
}

console.log(sumFibs(4));
console.log(sumFibs(1000));
