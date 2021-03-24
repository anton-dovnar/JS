function addTogether() {
    const [first, second] = Object.values(arguments);

    if (typeof first !== "number") {
        return undefined;
    }

    const addSecond = (second) => typeof second === "number" ? first + second : undefined;

    if (second !== undefined) {
        return addSecond(second);
    } else {
        return addSecond
    }
}

console.log(addTogether(2,3));
console.log(addTogether(5)(7));
