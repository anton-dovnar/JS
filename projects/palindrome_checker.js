function palindrome(str) {
    let result = str.match(/[a-z0-9]/gi).join("").toLowerCase();
    let reversed = result.split("").reverse().join("").toLowerCase();

    if (result == reversed) {
        return true;
    }

    return false;
}

console.log(palindrome("eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
