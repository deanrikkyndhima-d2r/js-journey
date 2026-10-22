const fruits = ["apple", "banana", "cherry"];

// Basics
fruits.length;            // 3
fruits[0];                // "apple"
fruits.at(-1);            // "cherry" (last item)

// Mutating methods: change the original array
fruits.push("date");      // add to end
fruits.pop();             // remove from end
fruits.unshift("fig");    // add to start
fruits.shift();           // remove from start
fruits.splice(1, 1);      // remove 1 item at index 1

// Non-mutating methods: return something new
fruits.slice(0, 2);       // copy of a section
fruits.includes("apple"); // true
fruits.indexOf("apple");  // 0
fruits.join(", ");        // "apple, banana, cherry"

// The big three. Each takes a callback and returns something NEW
const nums = [1, 2, 3, 4, 5];

nums.map((n) => n * 2);           // [2, 4, 6, 8, 10]  transform each item
nums.filter((n) => n % 2 === 0);  // [2, 4]            keep matching items
nums.reduce((total, n) => total + n, 0); // 15          boil down to one value
//                         ^ accumulator   ^ current   ^ starting value

// Searching and testing
nums.find((n) => n > 3);          // 4 (first match, or undefined)
nums.findIndex((n) => n > 3);     // 3
nums.some((n) => n > 4);          // true (at least one matches)
nums.every((n) => n > 0);         // true (all match)

// Sorting: DEFAULT SORT IS ALPHABETICAL, even for numbers
[10, 9, 1].sort();                // [1, 10, 9]  (surprise!)
[10, 9, 1].sort((a, b) => a - b); // [1, 9, 10]  (correct numeric sort)
// sort() mutates the original. Copy first: [...nums].sort(...)

// Chaining
nums
  .filter((n) => n % 2 === 1)
  .map((n) => n * 10);            // [10, 30, 50]

// Destructuring
const [first, second, ...rest] = nums;  // first=1, second=2, rest=[3,4,5]
const [a, , c] = nums;                  // skip an item

// Spread: copy and combine without mutating
const copy = [...nums];
const combined = [...nums, 6, 7];
const withoutFirst = nums.slice(1);

// Array of objects: the most common real-world shape
const products = [
  { name: "Laptop", price: 12000, category: "tech" },
  { name: "Desk", price: 3500, category: "furniture" },
];
products.map((p) => p.name);               // ["Laptop", "Desk"]
products.reduce((sum, p) => sum + p.price, 0); // 15500