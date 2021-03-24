function rot13(str) {
    let result = "";
    let non_ascci = /[^a-z]/i;

    for (let i = 0; i < str.length; i++) {
        if (non_ascci.test(str[i])) {
            result += str[i];
            continue;
        }

        let code = str.charCodeAt(i)
        if (non_ascci.test(String.fromCharCode(code - 13))) {
            result += String.fromCharCode(code + 13);
        } else {
            result += String.fromCharCode(code - 13);
        }
    }

    return result;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
