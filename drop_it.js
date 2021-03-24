function dropElements(arr, func) {
    let idx = null;

    for (let i = 0; i < arr.length; i ++) {
        if (func(arr[i])) {
            idx = i;
            break;
        }
    }

    return idx !== null ? arr.slice(idx) : [];
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))
