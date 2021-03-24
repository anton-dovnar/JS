function sumAll(arr) {
  let start, stop, sum = 0;
  [start, stop] = arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]];
  while (start <= stop) {
    sum += start;
    start++;
  }
  return sum;
}

console.log(sumAll([1, 4]));
