// Arrays & Sets
// transform arrays with reduce()

const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatori", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheeze Steak", price: 13 },
  { item: "Backed Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

// accumulator is like a safe, storage for whatever value
// we want to hold in it.
const total = menuItems.reduce((accumulator, menuItem) => {
  console.log(`
    accumulator: ${accumulator},
    menu item price: ${menuItem.price}
`);
  return accumulator + menuItem.price;
}, 0);
console.log('total: ', total);
