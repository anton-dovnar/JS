function telephoneCheck(str) {
    let match = str.match(/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/);
    return match ? true : false;
}

console.log(telephoneCheck("555-555-5555"));
