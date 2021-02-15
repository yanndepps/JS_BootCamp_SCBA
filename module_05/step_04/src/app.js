// Arrays & Sets
// get subsets of arrays

const restaurants = [
  { name: 'Cap City Dinner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
];

const resultA = restaurants.filter(restaurant => restaurant.name.startsWith('C') && restaurant.milesAway < 3);
// if we only need one element :
const resultB = restaurants.find(restaurant => restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 3);
console.log(resultB);
// console.log(restaurants);
