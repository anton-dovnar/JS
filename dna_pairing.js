function pairElement(str) {
    var dna_pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    let arr = str.split("");
    return arr.map(x => [x, dna_pairs[x]]);
}

console.log(pairElement("GCG"));
