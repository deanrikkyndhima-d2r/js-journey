// Reimplement reduce()

function myReduce(array, fn, initial) {
  let accumulator = initial;

  for (let i = 0; i < array.length; i++) {
    accumulator = fn(accumulator, array[i], i, array);
  }

  return accumulator;
}

// Tests

console.log(
  myReduce([1, 2, 3, 4], (acc, n) => acc + n, 0)
);
// 10

console.log(
  myReduce([1, 2, 3, 4], (acc, n) => acc * n, 1)
);
// 24

console.log(
  myReduce(["Hello", " ", "World"], (acc, str) => acc + str, "")
);
// Hello World

console.log(
  myReduce(
    ["a", "b", "a"],
    (acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    },
    {}
  )
);
// { a: 2, b: 1 }