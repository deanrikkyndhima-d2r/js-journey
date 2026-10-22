
const products = [
  { id: 1, name: "Laptop", price: 12000, category: "tech", stock: 5 },
  { id: 2, name: "Phone", price: 8000, category: "tech", stock: 0 },
  { id: 3, name: "Desk", price: 3500, category: "furniture", stock: 12 },
  { id: 4, name: "Chair", price: 1800, category: "furniture", stock: 20 },
  { id: 5, name: "Headphones", price: 1500, category: "tech", stock: 8 },
  { id: 6, name: "Lamp", price: 450, category: "furniture", stock: 0 },
];

// 1. Names of all products as an array.
console.log(products.map(p => p.name));
// 2. Products under R2000.
console.log(products.filter(p => p.price < 2000));
// 3. Only the in-stock products (stock > 0).
console.log(products.filter(p => p.stock > 0));
// 4. Total value of the inventory (price * stock, summed).
console.log(products.reduce((total, p) => total + p.price * p.stock, 0));
// 5. The most expensive product.
console.log(products.reduce((max, p) => p.price > max.price ? p: max));
// 6. Names of in-stock tech products, sorted alphabetically.
console.log(products.filter(p => p.category === "tech" && p.stock > 0)
.map(p => p.name).sort());
// 7. Products sorted by price, high to low (without mutating the original).
console.log([...products].sort((a, b) => b.price - a.price));
// 8. Whether any product is out of stock, and whether every product costs more than R100.
console.log(products.some(p => p.stock === 0));
console.log(products.every(p => p.price > 100));
// 9. Average price per category (hint: build an object keyed by category with reduce).
console.log(
  Object.fromEntries(
    Object.entries(
      products.reduce((acc, p) => {
        acc[p.category] ??= { total: 0, count: 0 };
        acc[p.category].total += p.price;
        acc[p.category].count++;
        return acc;
      }, {})
    ).map(([cat, data]) => [cat, data.total / data.count])
  )
);

// 10. Apply a 10% discount to all furniture, returning new objects (don’t mutate: { ...p, price: p.price * 0.9 }).
console.log(
  products.map(p =>
    p.category === "furniture"
      ? { ...p, price: p.price * 0.9 }
      : p
  )
);

/*
Extra Challenge (good practice for interviews)

// Total stock of all tech products
products
  .filter(p => p.category === "tech")
  .reduce((sum, p) => sum + p.stock, 0);

// Names of products sorted by stock (highest first)
[...products]
  .sort((a, b) => b.stock - a.stock)
  .map(p => p.name);

// First out-of-stock product
products.find(p => p.stock === 0);

// All categories without duplicates
[...new Set(products.map(p => p.category))]; */