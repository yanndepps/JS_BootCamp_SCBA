// arrow functions are all function expressions and therefore assigned to a variable !

// using callback pattern
// a callback function is just a function called after another function
// all callback functions are higher-order functions.
// the ability to pass a function to another function as a callback is called
// a higher-order function.

// function greetUser(name, callback) {
//   return callback(capitalize(name));
// }

const username = 'yann';

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

const greetUser = (name, callback) => callback(capitalize(name));

const result = greetUser(username, name => `hi there, ${name} !`);

console.log(result);
