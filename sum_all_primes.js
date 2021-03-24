function sumPrimes(num) {
    let result = 0;
    for (let i = 2; i <= num; i++) {
        let found = false;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                found = true;
                break;
            }
        }
        if (!found) {
            result += i;
        }
    }
    return result;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
