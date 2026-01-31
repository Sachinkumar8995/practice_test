const shoppingCart = [
  { itemName: "Wireless Mouse", itemPrice: 25 },
  { itemName: "Gaming Monitor", itemPrice: 300 },
  { itemName: "USB-C Cable", itemPrice: 15 },
  { itemName: "Mechanical Keyboard", itemPrice: 120 },
  { itemName: "Webcam", itemPrice: 85 }
];
//The output should be a new array where the items are sorted in ascending order based on itemPrice:
const sortedCart = shoppingCart.slice().sort((a, b) => a.itemPrice - b.itemPrice);
console.log(sortedCart);