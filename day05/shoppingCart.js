
const products = [
  { id: 1, name: "Laptop", price: 12000, category: "tech", stock: 5 },
  { id: 2, name: "Phone", price: 8000, category: "tech", stock: 0 },
  { id: 3, name: "Desk", price: 3500, category: "furniture", stock: 12 },
  { id: 4, name: "Chair", price: 1800, category: "furniture", stock: 20 },
  { id: 5, name: "Headphones", price: 1500, category: "tech", stock: 8 },
  { id: 6, name: "Lamp", price: 450, category: "furniture", stock: 0 },
];

const cart = [
    {productId: 1, qty: 2},
    {productId: 2, qty: 1},
    {productId: 5, qty: 3},
];

function getCartItems(cart, products){
    return cart.map(item => {
        const product = products.find(p => p.id === item.productId);

        return {
            name: product.name,
            price: product.price,
            qty: item.qty,
            lineTotal: product.price * item.qty,
        };
    });

}

function getCartTotal(cart, products){
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.productId);
        return total + product.price * item.qty;
    }, 0);

}

function addToCart(cart, productId) {
  const existingItem = cart.find(item => item.productId === productId);

  return existingItem
    ? cart.map(item =>
        item.productId === productId
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    : [...cart, { productId, qty: 1 }];
}

function removeFromCart(cart, productId) {
  return cart.filter(item => item.productId !== productId);
}

console.log("Cart Items:");
console.log(getCartItems(cart, products));

console.log("\nCart Total:");
console.log(getCartTotal(cart, products));

console.log("\nAdd Product 1:");
console.log(addToCart(cart, 1));

console.log("\nAdd Product 3:");
console.log(addToCart(cart, 3));

console.log("\nRemove Product 4:");
console.log(removeFromCart(cart, 4));