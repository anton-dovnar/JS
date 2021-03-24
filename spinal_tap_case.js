function getPart(str, a, b) {
    let part = str.slice(a, b);

    if (part) {
        let m = part.match(/[a-z]+/i);
        return m ? m.join('') : '';
    }

    return '';
}

function spinalCase(str) {
    let arr = [];
    let prev_idx = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            arr.push(getPart(str, prev_idx, i));
            prev_idx = i;
        }
    }

    arr.push(getPart(str, prev_idx, str.length));

    return arr.filter(function (obj) {
        return !!obj;
    }).join("-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("Teletubbies say Eh-oh"));
