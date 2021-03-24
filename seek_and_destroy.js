function destroyer(arr, ...args) {
  let idx;
  for (let i = 0; i < args.length; i++) {
    while ((idx=arr.indexOf(args[i])) !== -1) {
      arr.splice(idx, 1);
    }
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
