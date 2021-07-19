const numPermutations = (letters) => {
    let total;
    for (let i = 1; i <= letters.length; i++) {
        if (total === undefined) {
            total = i;
            continue;
        }
        total *= i;
    }
    return total;
};

console.log(numPermutations('hello'));
