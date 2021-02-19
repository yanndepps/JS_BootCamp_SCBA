// Arrays & Sets
// understand the power of .reduce()
// NOTE: the callback function is called the reducer ( for the .reduce() method )

// Example 1
const numbers = [1, 2, 3, 4, 5, 6];

// here is a map operation :
// map the numbers array into a new set of data
const doubled = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);

console.log('numbers: ', numbers);
console.log('doubled numbers: ', doubled);

// same operation using .map() :
const doubledNums = numbers.map(num => num * 2);
console.log('doubled numbers map: ', doubledNums);

// Example 2
// get a subset of an array based on a condition

const subset = numbers.reduce((acc, num) => {
  if (num > 3) {
    acc.push(num);
  }
  return acc;
}, []);

console.log('subset: ', subset);

// above is an equivalent of a .filter() method :
const greatestNums = numbers.filter(num => num > 3);
console.log('greatesNums: ', greatestNums);

// clean things up with a ternary :
// but here push is not returning the updated array; we can't provide that as the
// new value of the accumulator. we use the concact method which does return the
// updated array.
const subTernary = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);

console.log('ternary: ', subTernary);

// in summary :
// 1. the power of .reduce() : every major array method can be created with .reduce()
// 2. the reason why : the majority of array methods that we use can be thought as reductions :
// each of them take an array and transform it into smth else ( some other transformed array )
