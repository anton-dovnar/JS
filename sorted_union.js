function uniteUnique(...narr) {
    let result = [];
    for (let i = 0; i < narr.length; i++) {
        for (let j = 0; j < narr[i].length; j++) {
            if (result.indexOf(narr[i][j]) === - 1) {
                result.push(narr[i][j]);
            }
        }
    }
    return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
