function myReplace(str, before, after) {
    let new_word;
    if (before[0] === before[0].toUpperCase()) {
        new_word = after[0].toUpperCase() + after.slice(1);
        return str.replace(before, new_word);
    }

    new_word = after[0].toLowerCase() + after.slice(1);
    return str.replace(before, new_word);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("I think we should look up there", "up", "Down"));
