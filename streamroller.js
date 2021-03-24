function steamrollArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            result.push(...steamrollArray(arr[i]))
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
