function translatePigLatin(str) {
    let match = str.match(/^[^aeiou]+/i);
    return match ? str.slice(match[0].length) + str.slice(0, match[0].length) + 'ay': str + 'way';
}

console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
