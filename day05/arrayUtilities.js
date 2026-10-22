// 1. unique(arr)
function unique(arr) {
  return [...new Set(arr)];
}

// Alternative with filter + indexOf
function unique2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 2. chunk(arr, size)
function chunk(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

// 3. countBy(arr)
function countBy(arr) {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

// 4. zip(a, b)
function zip(a, b) {
  return a.map((item, index) => [item, b[index]]);
}

// 5. max(arr) and min(arr)
function max(arr) {
  return arr.reduce((max, num) => (num > max ? num : max));
}

function min(arr) {
  return arr.reduce((min, num) => (num < min ? num : min));
}

// Tests
console.log(unique([1, 2, 2, 3, 3, 4]));
// [1, 2, 3, 4]

console.log(chunk([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]

console.log(countBy(["a", "b", "a"]));
// { a: 2, b: 1 }

console.log(zip([1, 2], ["x", "y"]));
// [[1, "x"], [2, "y"]]

console.log(max([10, 5, 20, 8]));
// 20

console.log(min([10, 5, 20, 8]));
// 5