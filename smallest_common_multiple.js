function is_valid(m, min, max) {
    for (let i = min; i < max; i++) {
        if (m % i !== 0) {
            return false;
        }
    }
    return true;
}

function smallestCommons(arr) {
    let [min, max] = [Math.min(arr[0], arr[1]), Math.max(arr[0], arr[1])];
    let multiple = max;

    while (!is_valid(multiple, min, max)) {
        multiple += max;
    }

    return multiple;
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([1, 13]));
