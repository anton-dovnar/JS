function whatIsInAName(collection, source) {
  let source_keys = Object.keys(source);
  return collection.filter(function(obj) {
    return source_keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
