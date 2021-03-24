function convertToRoman(num) {
    let decimal = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ]
    let roman = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ]
    let result = "";
    let i = 0;

    while (num > 0) {
        let range = Math.floor(num/decimal[i]);
        for (let j = 0; j < range; j++) {
            result += roman[i];
            num -= decimal[i]
        }
        i += 1
    }
    return result;
}

console.log(convertToRoman(2));
console.log(convertToRoman(36));
