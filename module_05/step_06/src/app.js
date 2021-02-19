// Arrays & Sets
// challenge
// transform arrays with reduce()
// 1. use reduce() to sum the weight of all the cars
// 2. use reduce() to sum the weight of only the electric cars

const cars = [
  { name: 'Toyota', isElectric: false, weight: 1320 },
  { name: 'Ford', isElectric: false, weight: 1400 },
  { name: 'Volkswagen', isElectric: false, weight: 1370 },
  { name: 'Honda', isElectric: false, weight: 1375 },
  { name: 'Tesla', isElectric: true, weight: 1750 },
  { name: 'BMW', isElectric: true, weight: 1350 },
];

// 1.
const total = cars.reduce((accu, car) => {
  return accu + car.weight;
}, 0);

// console.log('total: ', total);

// 2.
const elecTotal = cars.reduce((accu, car) => {
  if (car.isElectric) {
    return accu + car.weight;
  } else {
    return accu;
  }
}, 0);

console.log('total: ', elecTotal);
